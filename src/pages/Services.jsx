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
  { label: "Planning", desc: "Create a detailed roadmap and clear strategy" },
  { label: "Execution", desc: "Build and iterate rapidly with your feedback" },
  { label: "Launch", desc: "Deploy, monitor, and optimize results" },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 h-screen flex items-center justify-center px-6">
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-200 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-200 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            What We Offer
          </span>
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            Our <span className="text-green-500">Services</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            End-to-end digital solutions designed to accelerate your business
            growth and competitive edge.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-10">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(function (s) {
              const IconComp = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl overflow-hidden border border-green-100 hover:shadow-xl hover:shadow-green-50 transition-all duration-300 group flex flex-col"
                >
                  <div className="relative overflow-hidden h-36">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-md">
                        <IconComp size={18} className="text-green-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-1">
                      {s.desc}
                    </p>
                    <ul className="space-y-1">
                      {s.features.map(function (feat) {
                        return (
                          <li
                            key={feat}
                            className="flex items-center gap-2 text-gray-600 text-xs"
                          >
                            <RiCheckLine
                              size={12}
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
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white h-screen flex items-center px-6">
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
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-5 group-hover:bg-green-600 transition-colors shadow-lg shadow-green-200"
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

      {/* CTA */}
      <section className="relative bg-green-500 h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 translate-x-1/2 translate-y-1/2" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
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
