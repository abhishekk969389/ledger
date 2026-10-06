const fs = require('fs');

const path = './data/ledger.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const categories = [
  "Accounting & Bookkeeping",
  "Tax Planning",
  "Business Advisory",
  "Audit & Assurance",
  "Financial Reporting",
  "Company Formation"
];

const posts = [];
const blogDetailsVariants = {};

let postCounter = 1;

for (const cat of categories) {
  for (let i = 1; i <= 3; i++) {
    const slug = `${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-post-${i}`;
    const date = `August ${10 + postCounter}, 2024`;
    const title = `${cat} - Essential Guide Part ${i}`;
    const text = `Discover the essential strategies and tips regarding ${cat} to help your business thrive and stay compliant.`;
    const image = `https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80`;
    
    // Add to posts array
    posts.push({
      tag: cat,
      date,
      title,
      text,
      img: image,
      href: `/blogs/${slug}`
    });

    // Add to blogDetails variants
    blogDetailsVariants[slug] = {
      title,
      date,
      category: cat,
      readTime: "5 Min Read",
      image,
      content: {
        paragraphs: [
          `This is an in-depth guide on ${cat}. Managing this aspect of your business is crucial for long-term success.`,
          `Our experts provide comprehensive insights to help you navigate the complexities of ${cat}.`
        ],
        blockquote: {
          text: `Mastering ${cat} is the key to unlocking sustainable business growth and compliance.`,
          author: "Industry Expert"
        },
        sections: [
          {
            title: "1. Understanding the Basics",
            text: `Start by evaluating your current approach to ${cat} and identifying areas for improvement.`
          },
          {
            title: "2. Implementing Strategies",
            text: `Adopt proven methodologies to streamline your processes and reduce inefficiencies.`
          },
          {
            title: "3. Continuous Monitoring",
            text: `Regularly review your performance and stay updated with the latest industry standards.`
          }
        ]
      },
      sidebar: {
        recentPostsTitle: "Recent Posts",
        categoriesTitle: "Categories",
        categories: categories.map(c => ({ name: c, count: 3 })),
        cta: {
          title: "Need Professional Guidance?",
          text: "Get expert advice for your business finance and taxation needs.",
          buttonText: "Contact Us",
          buttonHref: "/contact"
        }
      }
    };
    
    postCounter++;
  }
}

// Update JSON structure
data.LedgerIndustries.sections.Blog.variants.LedgerBlog1.posts = posts;
data.LedgerIndustries.sections.BlogDetails.variants = blogDetailsVariants;

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log("Successfully generated 18 blog posts and their details.");
