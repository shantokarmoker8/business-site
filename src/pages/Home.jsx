import { Link } from "react-router-dom";
import {
  MdArrowForward,
  MdRocketLaunch,
  MdDesignServices,
  MdInsights,
  MdSupportAgent,
  MdVerified,
  MdBusiness,
} from "react-icons/md";
import { FaStar } from "react-icons/fa";

const STATS = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Success Rate" },
  { value: "24/7", label: "Support Available" },
];

const FEATURES = [
  {
    Icon: MdRocketLaunch,
    title: "Rapid Growth",
    desc: "Accelerate your business with smart strategies and cutting-edge technology tailored to your goals.",
  },
  {
    Icon: MdDesignServices,
    title: "Creative Design",
    desc: "Stunning visual identities that make your brand stand out and leave a lasting impression.",
  },
  {
    Icon: MdInsights,
    title: "Data-Driven",
    desc: "Leverage analytics and insights to make informed decisions that maximize your ROI.",
  },
  {
    Icon: MdSupportAgent,
    title: "Reliable Support",
    desc: "Our expert team is available around the clock to ensure your business never skips a beat.",
  },
];

const TESTIMONIALS = [
  {
    name: "James Carter",
    role: "CEO, TechCorp",
    text: "Nexora completely transformed our business. The results exceeded every expectation we had going in.",
    stars: 5,
    initial: "J",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director, BrandCo",
    text: "Their digital marketing strategy tripled our sales within three months. An absolute game changer.",
    stars: 5,
    initial: "S",
  },
  {
    name: "Michael Brown",
    role: "Founder, StartupX",
    text: "Professional team, on-time delivery, and outstanding results. I recommend Nexora to everyone I know.",
    stars: 5,
    initial: "M",
  },
];

export default function Home() {
  return (
    <>
      {/* ════════════════ HERO ════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{ backgroundColor: "var(--color-light)" }}
      >
        {/* Blobs */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{
            backgroundColor: "var(--color-brand-100)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-2xl opacity-30 pointer-events-none"
          style={{ backgroundColor: "var(--color-brand-200)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left */}
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-7 animate-fade-up"
              style={{
                backgroundColor: "var(--color-brand-100)",
                color: "var(--color-brand-700)",
              }}
            >
              <MdVerified size={14} />
              #1 Business Solutions Agency
            </span>

            <h1
              className="font-heading text-5xl lg:text-7xl font-black leading-tight mb-6 animate-fade-up delay-100"
              style={{ color: "var(--color-dark)" }}
            >
              Grow Your{" "}
              <span style={{ color: "var(--color-brand-500)" }}>Business</span>{" "}
              With Us
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg animate-fade-up delay-200">
              Nexora helps you unlock the full potential of your business
              through innovative strategies, expert teams, and proven results
              that speak for themselves.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: "var(--color-brand-500)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-brand-600)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-brand-500)")
                }
              >
                Get Started Today <MdArrowForward size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-4 rounded-full border-2 transition-all duration-300 hover:border-[var(--color-brand-500)] hover:text-[var(--color-brand-500)]"
                style={{
                  borderColor: "var(--color-dark)",
                  color: "var(--color-dark)",
                }}
              >
                View Services
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-6 mt-14 animate-fade-up delay-400">
              <div className="flex -space-x-3">
                {["J", "S", "M", "A"].map((letter, i) => (
                  <span
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold text-white"
                    style={{
                      backgroundColor:
                        i % 2 === 0
                          ? "var(--color-brand-500)"
                          : "var(--color-brand-700)",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <div>
                <div
                  className="flex items-center gap-1"
                  style={{ color: "#facc15" }}
                >
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={13} />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  Trusted by 500+ clients worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right — visual card */}
          <div className="hidden lg:flex justify-center items-center animate-fade-up delay-300">
            <div className="relative">
              {/* Main card */}
              <div
                className="w-80 h-80 rounded-[3rem] flex flex-col items-center justify-center text-white shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-brand-500), var(--color-brand-700))",
                }}
              >
                <MdRocketLaunch size={72} className="mb-4 opacity-90" />
                <p className="font-heading text-2xl font-bold">On The Rise</p>
                <p className="text-sm opacity-80 mt-1">We grow with you</p>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-5 -right-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: "var(--color-brand-500)" }}
                >
                  <MdInsights size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">This Month</p>
                  <p
                    className="font-heading font-bold text-sm"
                    style={{ color: "var(--color-dark)" }}
                  >
                    +45% Growth
                  </p>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: "var(--color-brand-700)" }}
                >
                  <MdBusiness size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Recognition</p>
                  <p
                    className="font-heading font-bold text-sm"
                    style={{ color: "var(--color-dark)" }}
                  >
                    Top Agency 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ STATS ════════════════ */}
      <section
        style={{ backgroundColor: "var(--color-dark)" }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className="font-heading text-4xl lg:text-5xl font-black mb-2"
                style={{ color: "var(--color-brand-500)" }}
              >
                {value}
              </p>
              <p className="text-gray-400 text-sm tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ FEATURES ════════════════ */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--color-light)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--color-brand-500)" }}
            >
              Why Choose Us
            </span>
            <h2
              className="font-heading text-4xl lg:text-5xl font-black mt-3"
              style={{ color: "var(--color-dark)" }}
            >
              What Sets Us Apart
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              We combine creativity, technology, and strategy to deliver results
              that matter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {FEATURES.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white rounded-3xl p-8 border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ backgroundColor: "var(--color-brand-100)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-brand-500)";
                    e.currentTarget.querySelector("svg").style.color = "white";
                  }}
                >
                  <Icon
                    size={26}
                    style={{
                      color: "var(--color-brand-500)",
                      transition: "color 0.3s",
                    }}
                  />
                </div>
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

      {/* ════════════════ TESTIMONIALS ════════════════ */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--color-brand-50)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--color-brand-500)" }}
            >
              Testimonials
            </span>
            <h2
              className="font-heading text-4xl lg:text-5xl font-black mt-3"
              style={{ color: "var(--color-dark)" }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(({ name, role, text, stars, initial }) => (
              <div
                key={name}
                className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="flex items-center gap-1 mb-5"
                  style={{ color: "#facc15" }}
                >
                  {[...Array(stars)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: "var(--color-brand-500)" }}
                  >
                    {initial}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--color-dark)" }}
                    >
                      {name}
                    </p>
                    <p className="text-gray-400 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-dark)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl lg:text-6xl font-black text-white mb-6">
            Ready to{" "}
            <span style={{ color: "var(--color-brand-500)" }}>
              Get Started?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Contact us today and find the best solution for your business. Free
            consultation — no strings attached.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ backgroundColor: "var(--color-brand-500)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-brand-600)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-brand-500)")
            }
          >
            Book a Free Consultation <MdArrowForward size={22} />
          </Link>
        </div>
      </section>
    </>
  );
}
