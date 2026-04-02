import { Link } from "react-router-dom";
import {
  RiArrowRightLine,
  RiStarFill,
  RiShieldCheckLine,
  RiRocketLine,
  RiTeamLine,
  RiCheckLine,
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
    desc: "We ship products at lightning speed without compromising quality or attention to detail.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Reliable & Secure",
    desc: "Enterprise-grade security and reliability built into every solution we deliver.",
  },
  {
    icon: RiTeamLine,
    title: "Expert Team",
    desc: "A dedicated crew of specialists committed to your success and long-term growth.",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Luminary Co.",
    text: "business-site transformed our digital presence completely. Outstanding results every time!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "James Fowler",
    role: "Founder, NexaLab",
    text: "Professional, creative, and always on time. They exceeded every expectation we had.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "CMO, Vortex Inc.",
    text: "Their strategy doubled our leads in just 3 months. An incredible, results-driven team.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
];

const perks = [
  "No long-term contracts required",
  "Dedicated project manager",
  "24/7 support & maintenance",
  "Full ownership of all deliverables",
];

function FeatureCard({ icon: IconComp, title, desc }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-xl hover:shadow-green-50 transition-all duration-300 group flex flex-col">
      <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
        <IconComp
          size={26}
          className="text-green-600 group-hover:text-white transition-colors duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, role, text, rating, avatar }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map(function (_, i) {
          return <RiStarFill key={i} className="text-green-500" size={16} />;
        })}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 italic flex-1">
        "{text}"
      </p>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-11 h-11 rounded-full object-cover border-2 border-green-100"
        />
        <div>
          <div className="font-semibold text-gray-900 text-sm">{name}</div>
          <div className="text-green-600 text-xs mt-0.5">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero - 100vh */}
      <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-green-400 rounded-bl-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-0 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              🌿 Professional Business Solutions
            </span>
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900 mb-6"
            >
              Grow Your <span className="text-green-500">Business</span> With
              Confidence
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
              We deliver cutting-edge digital solutions — from brand strategy to
              product development — tailored for ambitious, forward-thinking
              businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-green-600 transition-colors shadow-lg shadow-green-200"
              >
                Explore Services <RiArrowRightLine size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-200 text-green-700 font-semibold px-8 py-4 rounded-full hover:border-green-400 hover:bg-green-50 transition-all"
              >
                Learn About Us
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-100">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=600&fit=crop"
                alt="Professional team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <RiStarFill className="text-white" size={22} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    98% Satisfaction
                  </div>
                  <div className="text-green-600 text-xs">
                    From 500+ clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - full width band */}
      <section className="bg-green-500 py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(function (s) {
            return (
              <div key={s.label} className="text-center">
                <div
                  className="text-4xl md:text-5xl font-black text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.value}
                </div>
                <div className="text-green-100 text-sm mt-2 font-medium">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features - 100vh */}
      <section className="bg-gray-50 min-h-screen flex items-center px-6 py-20 md:py-0">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-14">
            <span className="text-green-600 text-xs font-bold tracking-widest uppercase">
              Why Us
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4"
            >
              Why Choose business-site?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We combine creativity, technology, and strategy to deliver real,
              measurable business results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(function (f) {
              return (
                <FeatureCard
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  desc={f.desc}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* About Split - 100vh */}
      <section className="bg-white min-h-screen flex items-center px-6 py-20 md:py-0">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=600&fit=crop"
              alt="Our workspace"
              className="rounded-3xl w-full object-cover shadow-xl shadow-green-100"
              style={{ height: "520px" }}
            />
            <div className="absolute -top-6 -right-6 bg-green-500 text-white rounded-2xl p-6 shadow-lg text-center">
              <div
                className="text-3xl font-black"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                12+
              </div>
              <div className="text-green-100 text-xs mt-1">
                Years of Excellence
              </div>
            </div>
          </div>
          <div>
            <span className="text-green-600 text-xs font-bold tracking-widest uppercase">
              About Us
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5"
            >
              We Build Digital Solutions That Work
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Since 2012, we've helped hundreds of businesses establish a
              powerful digital presence. Our team of designers, developers, and
              strategists work together to deliver results that matter.
            </p>
            <ul className="space-y-3 mb-8">
              {perks.map(function (perk) {
                return (
                  <li
                    key={perk}
                    className="flex items-center gap-3 text-gray-700 text-sm"
                  >
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <RiCheckLine size={12} className="text-green-600" />
                    </div>
                    {perk}
                  </li>
                );
              })}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-green-600 transition-colors shadow-md shadow-green-200"
            >
              More About Us <RiArrowRightLine size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - 100vh */}
      <section className="bg-gray-50 min-h-screen flex items-center px-6 py-20 md:py-0">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-14">
            <span className="text-green-600 text-xs font-bold tracking-widest uppercase">
              Testimonials
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-black text-gray-900 mt-3"
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(function (t) {
              return (
                <TestimonialCard
                  key={t.name}
                  name={t.name}
                  role={t.role}
                  text={t.text}
                  rating={t.rating}
                  avatar={t.avatar}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - 100vh */}
      <section className="relative bg-green-500 min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Ready to Get Started?
          </h2>
          <p className="text-green-100 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
            Let's build something amazing together. Reach out and we'll respond
            within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-10 py-4 rounded-full hover:bg-green-50 transition-colors shadow-xl text-sm"
          >
            Contact Us Today <RiArrowRightLine size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
