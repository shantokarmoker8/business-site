import { Link } from "react-router-dom";
import {
  MdWebAsset,
  MdCampaign,
  MdBrandingWatermark,
  MdAnalytics,
  MdSupportAgent,
  MdPhoneAndroid,
  MdArrowForward,
  MdCheckCircle,
} from "react-icons/md";

const SERVICES = [
  {
    Icon: MdWebAsset,
    title: "Web Design & Development",
    desc: "We build modern, responsive, and fast websites that represent your brand powerfully online and convert visitors into customers.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "CMS Integration",
    ],
    price: "From $999",
  },
  {
    Icon: MdCampaign,
    title: "Digital Marketing",
    desc: "Reach your target audience through social media, Google Ads, and content marketing strategies that deliver measurable returns.",
    features: ["Social Media Ads", "Google Ads", "SEO", "Content Marketing"],
    price: "From $499 / mo",
  },
  {
    Icon: MdBrandingWatermark,
    title: "Branding & Identity",
    desc: "Build a powerful brand with logo design, color palettes, typography, and brand guidelines that make you unforgettable.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Business Cards",
      "Packaging Design",
    ],
    price: "From $699",
  },
  {
    Icon: MdAnalytics,
    title: "Business Analytics",
    desc: "Analyze your data to identify opportunities and weaknesses, then make decisions that drive sustainable growth.",
    features: [
      "Custom Dashboards",
      "Monthly Reports",
      "Competitor Analysis",
      "Forecasting",
    ],
    price: "From $349 / mo",
  },
  {
    Icon: MdSupportAgent,
    title: "Business Consulting",
    desc: "Work with experienced consultants to define your strategy, set achievable goals, and build a winning roadmap.",
    features: [
      "1-on-1 Sessions",
      "Strategy Planning",
      "Market Research",
      "Roadmap Creation",
    ],
    price: "From $199 / session",
  },
  {
    Icon: MdPhoneAndroid,
    title: "Mobile App Development",
    desc: "We build native and cross-platform apps for iOS and Android with seamless UX and robust backend integration.",
    features: [
      "iOS & Android",
      "Cross-Platform",
      "UI/UX Design",
      "API Integration",
    ],
    price: "From $2,499",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-light)" }}
      >
        <div
          className="absolute top-0 left-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{
            backgroundColor: "var(--color-brand-100)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--color-brand-500)" }}
          >
            What We Offer
          </span>
          <h1
            className="font-heading text-5xl lg:text-7xl font-black mt-3 mb-6"
            style={{ color: "var(--color-dark)" }}
          >
            Our{" "}
            <span style={{ color: "var(--color-brand-500)" }}>Services</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A complete suite of digital solutions to meet every need of your
            growing business — under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ Icon, title, desc, features, price }) => (
            <div
              key={title}
              className="group rounded-3xl p-8 border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default"
              style={{ backgroundColor: "var(--color-light)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-dark)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-light)")
              }
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500"
                style={{ backgroundColor: "var(--color-brand-100)" }}
              >
                <Icon size={26} style={{ color: "var(--color-brand-500)" }} />
              </div>

              <h3
                className="font-heading text-xl font-bold mb-3 transition-colors duration-500 group-hover:text-white"
                style={{ color: "var(--color-dark)" }}
              >
                {title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-5 transition-colors duration-500 group-hover:text-gray-300">
                {desc}
              </p>

              <ul className="space-y-2 mb-7">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-gray-500 transition-colors duration-500 group-hover:text-gray-300"
                  >
                    <MdCheckCircle
                      size={14}
                      style={{ color: "var(--color-brand-500)", flexShrink: 0 }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 transition-colors duration-500 group-hover:border-gray-700">
                <span
                  className="font-semibold text-sm"
                  style={{ color: "var(--color-brand-500)" }}
                >
                  {price}
                </span>
                <Link
                  to="/contact"
                  className="flex items-center gap-1 text-xs font-semibold transition-colors duration-300 hover:text-[var(--color-brand-500)] group-hover:text-white"
                  style={{ color: "var(--color-dark)" }}
                >
                  Learn More <MdArrowForward size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-light)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--color-brand-500)" }}
            >
              How We Work
            </span>
            <h2
              className="font-heading text-4xl font-black mt-3"
              style={{ color: "var(--color-dark)" }}
            >
              Our Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We learn about your business, goals, and target audience.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "We craft a tailored plan aligned with your objectives.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Our team brings the strategy to life with precision.",
              },
              {
                step: "04",
                title: "Optimization",
                desc: "We measure, refine, and improve for lasting results.",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="bg-white rounded-3xl p-8 border border-gray-100 text-center shadow-sm"
              >
                <p
                  className="font-heading text-5xl font-black mb-4 opacity-20"
                  style={{ color: "var(--color-brand-500)" }}
                >
                  {step}
                </p>
                <h3
                  className="font-heading text-xl font-bold mb-3"
                  style={{ color: "var(--color-dark)" }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-brand-500)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl font-black text-white mb-4">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Our experts will help you find the perfect solution — completely
            free of charge.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            style={{
              backgroundColor: "white",
              color: "var(--color-brand-600)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-dark)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "var(--color-brand-600)";
            }}
          >
            Book a Free Consultation <MdArrowForward size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
