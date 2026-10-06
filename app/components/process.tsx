import { FaRegCalendarAlt, FaSearchDollar, FaHandHoldingUsd } from "react-icons/fa";

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=80`;

const IMG_1 = u("photo-1600880292203-757bb62b4baf");
const IMG_2 = u("photo-1522071820081-009f0129c71c");

function IconBadge({ icon: Icon, dark }: { icon: React.ElementType; dark?: boolean }) {
  return (
    <span
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl ring-4 ${
        dark
          ? "bg-[#f6efe1] text-[#0b3b34] ring-white/10"
          : "bg-white text-[#b98a4a] ring-[#b98a4a]/20"
      }`}
    >
      <Icon />
    </span>
  );
}

export default function Process() {
  return (
    <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-3 px-4 sm:px-6 lg:grid-cols-12 lg:px-12">
        {/* ---------- Heading (row 1, right) ---------- */}
        <div className="order-first flex flex-col justify-center rounded-3xl bg-white px-6 py-8 lg:order-none lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:rounded-tl-[48px] lg:px-10">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#b98a4a]" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0b3b34]">
              How It Works
            </p>
          </div>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0b3b34] md:text-4xl">
            Our Simple &amp; Transparent
            <span className="block text-[#b98a4a]">Accounting Process</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
            We follow a clear and structured process to deliver accurate,
            compliant and result-driven financial solutions for your business.
          </p>
        </div>

        {/* ---------- Step 01 (row 1, left) ---------- */}
        <article className="rounded-3xl bg-[#0b3b34] p-7 text-white lg:col-span-5 lg:row-start-1 lg:rounded-br-[56px] lg:pr-10">
          <div className="flex items-start justify-between">
            <IconBadge icon={FaRegCalendarAlt} dark />
            <span className="text-2xl font-medium tracking-wide">01</span>
          </div>
          <h3 className="mt-5 text-2xl font-semibold">Initial Consultation</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
            We understand your business needs, goals and challenges to provide
            the right financial guidance.
          </p>
        </article>

        {/* ---------- Image 1 (row 2, left) ---------- */}
        <div className="h-60 overflow-hidden rounded-3xl border-4 border-white shadow-md lg:col-span-5 lg:row-start-2 lg:h-auto lg:min-h-[270px] lg:rounded-tr-[56px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG_1} alt="Advisors consulting with a client" className="h-full w-full object-cover" />
        </div>

        {/* ---------- Step 02 (row 2, right) ---------- */}
        <article className="rounded-3xl bg-[#0b3b34] p-7 text-white lg:col-span-7 lg:row-start-2 lg:rounded-tl-[56px] lg:rounded-bl-[56px] lg:pl-12">
          <div className="flex items-start justify-between">
            <IconBadge icon={FaSearchDollar} dark />
            <span className="text-2xl font-medium tracking-wide">02</span>
          </div>
          <h3 className="mt-5 text-2xl font-semibold">Analyze &amp; Strategize</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
            Our team reviews your financial records, identifies opportunities
            for tax savings and creates a customized strategy for your business
            growth.
          </p>
        </article>

        {/* ---------- Image 2 (row 3, left) ---------- */}
        <div className="h-60 overflow-hidden rounded-3xl border-4 border-white shadow-md lg:col-span-7 lg:row-start-3 lg:h-auto lg:min-h-[270px] lg:rounded-br-[56px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG_2} alt="Advisors supporting a client at a laptop" className="h-full w-full object-cover" />
        </div>

        {/* ---------- Step 03 (row 3, right) ---------- */}
        <article className="rounded-3xl bg-[#f7ecd9] p-7 text-[#0b3b34] lg:col-span-5 lg:row-start-3 lg:rounded-tl-[56px] lg:pl-10">
          <div className="flex items-center gap-4">
            <IconBadge icon={FaHandHoldingUsd} />
            <span className="h-[2px] w-8 bg-[#b98a4a]" />
            <span className="ml-auto text-2xl font-medium tracking-wide">03</span>
          </div>
          <h3 className="mt-5 text-2xl font-semibold">Manage &amp; Support</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            We handle your day-to-day accounting, tax filings and compliance,
            providing ongoing support so you can focus on growing your business
            with confidence.
          </p>
        </article>
      </div>
    </section>
  );
}