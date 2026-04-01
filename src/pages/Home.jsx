import { Link } from "react-router-dom";
import {
  RiArrowRightLine,
  RiStarFill,
  RiShieldCheckLine,
  RiRocketLine,
  RiTeamLine,
} from "react-icons/ri";

const stats = [
  { value: "500+", label: "Projects Done" },
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" },
];

const features = [
  {
    icon: RiRocketLine,
    title: "Fast Delivery",
    desc: "We ship products at lightning speed without compromising quality.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Reliable & Secure",
    desc: "Enterprise-grade security built into everything we create.",
  },
  {
    icon: RiTeamLine,
    title: "Expert Team",
    desc: "A crew of specialists dedicated to your success and growth.",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Luminary Co.",
    text: "business-site transformed our digital presence completely. Outstanding results!",
    rating: 5,
  },
  {
    name: "James Fowler",
    role: "Founder, NexaLab",
    text: "Professional, creative, and always on time. Highly recommended.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CMO, Vortex Inc.",
    text: "Their strategy doubled our leads in just 3 months. Incredible team.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950 py-28 md:py-40 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,191,36,0.12),_transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block bg-amber-400/10 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-amber-400/20">
            🚀 We Build What Matters
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            Grow Your Business <br />
            <span className="text-amber-400">With Confidence</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We deliver cutting-edge digital solutions — from brand strategy to
            product development — tailored for ambitious businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="bg-amber-400 text-zinc-950 font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-amber-300 transition-colors text-sm tracking-wide"
            >
              Explore Services <RiArrowRightLine size={18} />
            </Link>
            <Link
              to="/about"
              className="border border-zinc-700 text-white font-medium px-8 py-4 rounded-full hover:border-amber-400 hover:text-amber-400 transition-colors text-sm"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-amber-400 py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black text-zinc-950">{s.value}</div>
              <div className="text-zinc-800 text-sm font-medium mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
            Why Choose Us?
          </h2>
          <p className="text-zinc-400 text-center mb-14 max-w-xl mx-auto">
            We combine creativity, technology, and strategy to deliver real
            business results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700 hover:border-amber-400/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-400/20 transition-colors">
                  <f.icon size={28} className="text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-14">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <RiStarFill key={i} className="text-amber-400" size={16} />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-zinc-500 text-xs mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-amber-400 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-zinc-950 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-zinc-800 mb-8 max-w-xl mx-auto">
          Let's build something amazing together. Reach out and we'll respond
          within 24 hours.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-zinc-950 text-white font-bold px-8 py-4 rounded-full hover:bg-zinc-800 transition-colors"
        >
          Contact Us <RiArrowRightLine size={18} />
        </Link>
      </section>
    </div>
  );
}
