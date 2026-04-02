import { Link } from "react-router-dom";
import {
  RiCodeSSlashLine,
  RiPaletteLine,
  RiLineChartLine,
  RiSmartphoneLine,
  RiSearchEyeLine,
  RiCustomerService2Line,
  RiArrowRightLine,
  RiCheckLine,
} from "react-icons/ri";

const services = [
  {
    icon: RiCodeSSlashLine,
    title: "Web Development",
    desc: "Custom websites and web apps built with modern technologies — fast, secure, and scalable.",
    features: ["React & Next.js", "REST & GraphQL APIs", "Cloud Deployment"],
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop",
  },
  {
    icon: RiPaletteLine,
    title: "UI/UX Design",
    desc: "Beautiful, user-centered interfaces that convert visitors into loyal, returning customers.",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
  },
  {
    icon: RiLineChartLine,
    title: "Digital Marketing",
    desc: "Data-driven strategies to boost your visibility, traffic, and revenue significantly.",
    features: [
      "Social Media Marketing",
      "Email Campaigns",
      "Analytics & Reporting",
    ],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  },
  {
    icon: RiSmartphoneLine,
    title: "Mobile Apps",
    desc: "Native and cross-platform apps for iOS and Android that your users will love.",
    features: ["React Native", "iOS & Android", "App Store Deployment"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
  },
  {
    icon: RiSearchEyeLine,
    title: "SEO Optimization",
    desc: "Rank higher on search engines and attract the right audience organically.",
    features: ["Technical SEO", "Content Strategy", "Link Building"],
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
  },
  {
    icon: RiCustomerService2Line,
    title: "Business Consulting",
    desc: "Strategic advice to help you navigate growth, technology, and market changes.",
    features: ["Growth Strategy", "Tech Consulting", "Market Analysis"],
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
  },
];

const steps = [
  { label: "Discovery", desc: "Understand your goals and requirements deeply" },
  { label: "Planning", desc: "Create a detailed roadmap and strategy" },
  { label: "Execution", desc: "Build and iterate rapidly with feedback" },
  { label: "Launch", desc: "Deploy, monitor, and optimize results" },
];

function ServiceCard({ icon: IconComp, title, desc, features, img }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-green-100 hover:shadow-xl hover:shadow-green-50 transition-all duration-300 group flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-md">
            <IconComp size={22} className="text-green-600" />
          </div>
        </div>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
          {desc}
        </p>
        <ul className="space-y-2">
          {features.map(function (feat) {
            return (
              <li
                key={feat}
                className="flex items-center gap-2 text-gray-600 text-sm"
              >
                <RiCheckLine
                  size={14}
                  className="text-green-500 flex-shrink-0"
                />
                {feat}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div>
      {/* Hero - 100vh */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-screen flex items-center px-6">
        <div className="max-w-4xl mx-auto text-center w-full">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            What We Offer
          </span>
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
          >
            Our <span className="text-green-500">Services</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            End-to-end digital solutions designed to accelerate your business
            growth and competitive edge.
          </p>
        </div>
      </section>

      {/* Services Grid - 100vh */}
      <section className="bg-gray-50 min-h-screen flex items-center px-6 py-20 md:py-0">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <span className="text-green-600 text-xs font-bold tracking-widest uppercase">
              All Services
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl font-black text-gray-900 mt-3"
            >
              Everything You Need
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(function (s) {
              return (
                <ServiceCard
                  key={s.title}
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                  features={s.features}
                  img={s.img}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Process - 100vh */}
      <section className="bg-white min-h-screen flex items-center px-6 py-20 md:py-0">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <span className="text-green-600 text-xs font-bold tracking-widest uppercase">
              How We Work
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-black text-gray-900 mt-3"
            >
              Our Simple Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map(function (step, i) {
              return (
                <div key={step.label} className="text-center group">
                  <div
                    className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-5 group-hover:bg-green-600 transition-colors shadow-lg shadow-green-200"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {i + 1}
                  </div>
                  <div className="font-bold text-gray-900 text-lg mb-2">
                    {step.label}
                  </div>
                  <div className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - 100vh */}
      <section className="bg-green-500 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Need a Custom Solution?
          </h2>
          <p className="text-green-100 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your project and we'll figure out the best approach
            together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-10 py-4 rounded-full hover:bg-green-50 transition-colors shadow-xl"
          >
            Talk to Us <RiArrowRightLine size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
