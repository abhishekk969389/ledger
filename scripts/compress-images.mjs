import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const MAX_SVG_BYTES = 40 * 1024; // 40KB = 40960 bytes
const imageDir = path.resolve('public/image');
const files = [
  'blog1.svg',
  'blog2.svg',
  'blog3.svg',
  'ser1.svg',
  'ser3.svg',
  'ser4.svg',
  'ser5.svg',
  'ser6.svg',
  'ser7.svg'
];

async function compressSvgFile(filename) {
  const filePath = path.join(imageDir, filename);
  const svgContent = fs.readFileSync(filePath, 'utf8');
  const initialSizeBytes = Buffer.byteLength(svgContent, 'utf8');

  // Match href="data:image/(png|jpeg|jpg|webp);base64,..." or xlink:href="..."
  const hrefRegex = /(href\s*=\s*["']data:image\/)(png|jpeg|jpg|webp)(;base64,)([^"']*)(["'])/;
  const match = svgContent.match(hrefRegex);

  if (!match) {
    throw new Error(`Could not find embedded base64 image in ${filename}`);
  }

  const prefix = match[1];     // e.g. href="data:image/
  const originalType = match[2];
  const mid = match[3];        // ;base64,
  const base64Data = match[4];
  const suffix = match[5];     // "

  const imageBuffer = Buffer.from(base64Data, 'base64');
  const metadata = await sharp(imageBuffer).metadata();
  const hasAlpha = metadata.hasAlpha;

  // We want to test different widths and qualities
  const targetWidths = [800, 640, 500, 400, 320];
  let bestSvgContent = null;
  let bestFinalSize = Infinity;
  let bestQuality = null;
  let bestWidth = null;
  let bestMime = null;

  // Search strategy: try widths from 800 down, qualities from 80 down to 30 (step 5)
  for (const width of targetWidths) {
    for (let q = 80; q >= 30; q -= 5) {
      // Test WebP
      const webpCandidate = await sharp(imageBuffer)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: q, effort: 6 })
        .toBuffer();

      // Test JPEG if no alpha or if JPEG is clean
      let jpegCandidate = null;
      if (!hasAlpha) {
        jpegCandidate = await sharp(imageBuffer)
          .resize({ width, withoutEnlargement: true })
          .jpeg({ quality: q, mozjpeg: true, progressive: true })
          .toBuffer();
      }

      // Pick the smaller candidate
      let chosenBuffer = webpCandidate;
      let chosenMime = 'webp';
      if (jpegCandidate && jpegCandidate.length < webpCandidate.length) {
        chosenBuffer = jpegCandidate;
        chosenMime = 'jpeg';
      }

      const newBase64 = chosenBuffer.toString('base64');
      const candidateSvg = svgContent.replace(
        hrefRegex,
        `$1${chosenMime}$3${newBase64}$5`
      );
      const candidateSize = Buffer.byteLength(candidateSvg, 'utf8');

      if (candidateSize <= MAX_SVG_BYTES) {
        bestSvgContent = candidateSvg;
        bestFinalSize = candidateSize;
        bestQuality = q;
        bestWidth = width;
        bestMime = chosenMime;
        break; // Found the highest quality / width that satisfies <= 40KB
      }
    }
    if (bestSvgContent) {
      break;
    }
  }

  // If still not under 40KB after width 320, do emergency aggressive pass
  if (!bestSvgContent) {
    for (let w = 280; w >= 150; w -= 30) {
      for (let q = 30; q >= 15; q -= 5) {
        const buf = await sharp(imageBuffer)
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality: q, effort: 6 })
          .toBuffer();
        const b64 = buf.toString('base64');
        const candidateSvg = svgContent.replace(
          hrefRegex,
          `$1webp$3${b64}$5`
        );
        const candidateSize = Buffer.byteLength(candidateSvg, 'utf8');
        if (candidateSize <= MAX_SVG_BYTES) {
          bestSvgContent = candidateSvg;
          bestFinalSize = candidateSize;
          bestQuality = q;
          bestWidth = w;
          bestMime = 'webp';
          break;
        }
      }
      if (bestSvgContent) break;
    }
  }

  if (!bestSvgContent) {
    throw new Error(`Failed to compress ${filename} under 40KB`);
  }

  // Write compressed SVG in-place
  fs.writeFileSync(filePath, bestSvgContent, 'utf8');

  return {
    filename,
    initialKB: (initialSizeBytes / 1024).toFixed(2),
    finalKB: (bestFinalSize / 1024).toFixed(2),
    finalBytes: bestFinalSize,
    bestQuality,
    bestWidth,
    bestMime
  };
}

async function main() {
  console.log('Starting image compression for public/image/ ...\n');
  const results = [];

  for (const file of files) {
    const res = await compressSvgFile(file);
    results.push(res);
    console.log(`Compressed ${file}: ${res.initialKB} KB -> ${res.finalKB} KB (width: ${res.bestWidth}px, quality: ${res.bestQuality}, format: ${res.bestMime})`);
  }

  console.log('\n--- COMPRESSION SUMMARY TABLE ---');
  console.table(results.map(r => ({
    'File Name': r.filename,
    'Before (KB)': r.initialKB,
    'After (KB)': r.finalKB,
    'Final Quality': r.bestQuality,
    'Final Width (px)': r.bestWidth,
    'Format': r.bestMime,
    'Status': r.finalBytes <= MAX_SVG_BYTES ? 'PASS (<= 40KB)' : 'FAIL'
  })));
}

main().catch(err => {
  console.error('Error running compression:', err);
  process.exit(1);
});
