import { Link } from "react-router-dom";
import {
  RiCodeSSlashLine,
  RiPaletteLine,
  RiLineChartLine,
  RiSmartphoneLine,
  RiSearchEyeLine,
  RiCustomerService2Line,
  RiArrowRightLine,
} from "react-icons/ri";

const services = [
  {
    icon: RiCodeSSlashLine,
    title: "Web Development",
    desc: "Custom websites and web apps built with modern technologies — fast, secure, and scalable.",
  },
  {
    icon: RiPaletteLine,
    title: "UI/UX Design",
    desc: "Beautiful, user-centered interfaces that convert visitors into loyal customers.",
  },
  {
    icon: RiLineChartLine,
    title: "Digital Marketing",
    desc: "Data-driven strategies to boost visibility, traffic, and revenue.",
  },
  {
    icon: RiSmartphoneLine,
    title: "Mobile Apps",
    desc: "Native and cross-platform apps for iOS and Android that users love.",
  },
  {
    icon: RiSearchEyeLine,
    title: "SEO Optimization",
    desc: "Rank higher on search engines and attract the right audience organically.",
  },
  {
    icon: RiCustomerService2Line,
    title: "Business Consulting",
    desc: "Strategic advice to help you navigate growth, technology, and market changes.",
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-zinc-950 py-24 px-6 text-center border-b border-zinc-800">
        <span className="inline-block bg-amber-400/10 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-amber-400/20">
          What We Offer
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          Our <span className="text-amber-400">Services</span>
        </h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">
          End-to-end solutions designed to accelerate your business growth.
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700 hover:border-amber-400/50 transition-all group"
            >
              <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-400/20 transition-colors">
                <s.icon size={28} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 py-20 px-6 text-center border-t border-zinc-800">
        <h2 className="text-3xl font-black mb-4">Need a Custom Solution?</h2>
        <p className="text-zinc-400 mb-8">
          Tell us about your project and we'll figure out the best approach
          together.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-amber-400 text-zinc-950 font-bold px-8 py-4 rounded-full hover:bg-amber-300 transition-colors"
        >
          Talk to Us <RiArrowRightLine size={18} />
        </Link>
      </section>
    </div>
  );
}
