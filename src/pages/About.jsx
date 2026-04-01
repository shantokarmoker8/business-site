import {
  MdCheckCircle,
  MdGroups,
  MdVerified,
  MdEmojiEvents,
  MdTrendingUp,
} from "react-icons/md";

const VALUES = [
  "Integrity and transparency in everything we do",
  "Client satisfaction is our top priority",
  "Innovation and creative thinking always",
  "On-time delivery, every single time",
  "Building long-term client relationships",
  "Uncompromising quality of service",
];

const HIGHLIGHTS = [
  { Icon: MdGroups, label: "50+ Team Members", bg: "var(--color-brand-500)" },
  { Icon: MdVerified, label: "ISO Certified", bg: "var(--color-dark)" },
  {
    Icon: MdEmojiEvents,
    label: "15+ Awards Won",
    bg: "var(--color-brand-700)",
  },
  { Icon: MdTrendingUp, label: "10+ Years Experience", bg: "#1f2937" },
];

const TEAM = [
  { name: "Alex Johnson", role: "Founder & CEO", initial: "A" },
  { name: "Emily Davis", role: "Creative Director", initial: "E" },
  { name: "Ryan Mitchell", role: "Tech Lead", initial: "R" },
  { name: "Sophia Clark", role: "Head of Marketing", initial: "S" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-light)" }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{
            backgroundColor: "var(--color-brand-100)",
            transform: "translate(40%, -40%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--color-brand-500)" }}
          >
            About Us
          </span>
          <h1
            className="font-heading text-5xl lg:text-7xl font-black mt-3 mb-6"
            style={{ color: "var(--color-dark)" }}
          >
            Our <span style={{ color: "var(--color-brand-500)" }}>Story</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Since 2014, we have been helping businesses around the world achieve
            their goals through innovation, dedication, and creative thinking.
          </p>
        </div>
      </section>

      {/* Story + Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="font-heading text-4xl font-black mb-6"
              style={{ color: "var(--color-dark)" }}
            >
              How It All Began
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              In 2014, three passionate entrepreneurs came together with a
              single vision: to help businesses thrive in the digital age. What
              started as a small studio has grown into a full-service agency
              trusted by hundreds of clients worldwide.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Today, our team of 50+ talented professionals delivers exceptional
              results across web design, digital marketing, branding, and
              consulting. We believe that with the right strategy and
              dedication, any business can reach its full potential.
            </p>
            <ul className="space-y-3">
              {VALUES.map((v) => (
                <li
                  key={v}
                  className="flex items-center gap-3 text-sm text-gray-700"
                >
                  <MdCheckCircle
                    size={20}
                    style={{ color: "var(--color-brand-500)", flexShrink: 0 }}
                  />
                  {v}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map(({ Icon, label, bg }) => (
              <div
                key={label}
                className="rounded-3xl p-8 flex flex-col items-center justify-center text-white text-center aspect-square transition-transform duration-300 hover:-translate-y-1"
                style={{ backgroundColor: bg }}
              >
                <Icon size={42} className="mb-3 opacity-85" />
                <p className="font-heading font-bold text-sm leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Our Team
            </span>
            <h2
              className="font-heading text-4xl font-black mt-3"
              style={{ color: "var(--color-dark)" }}
            >
              Meet the Leadership
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">
              The people behind Nexora — passionate professionals dedicated to
              your success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {TEAM.map(({ name, role, initial }) => (
              <div
                key={name}
                className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold font-heading mx-auto mb-5"
                  style={{ backgroundColor: "var(--color-brand-500)" }}
                >
                  {initial}
                </div>
                <h3
                  className="font-heading font-bold text-lg"
                  style={{ color: "var(--color-dark)" }}
                >
                  {name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-brand-500)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl font-black text-white mb-5">
            Our Mission
          </h2>
          <p className="text-orange-100 text-lg leading-relaxed">
            To empower businesses of all sizes with the tools, strategies, and
            creative solutions they need to thrive in an ever-changing digital
            world — delivered with integrity, passion, and measurable results.
          </p>
        </div>
      </section>
    </>
  );
}
