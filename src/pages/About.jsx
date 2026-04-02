import { Link } from "react-router-dom";
import { RiCheckboxCircleLine, RiArrowRightLine } from "react-icons/ri";

const values = [
  "Client-first approach in every project",
  "Transparent communication at every step",
  "Cutting-edge technology and modern design",
  "Data-driven decisions for better results",
  "Continuous improvement and innovation",
  "Long-term partnerships, not one-time jobs",
];

const team = [
  {
    name: "Alex Turner",
    role: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "Visionary leader with 15 years in digital business strategy.",
  },
  {
    name: "Maria Chen",
    role: "Head of Design",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Award-winning designer passionate about user experience.",
  },
  {
    name: "David Osei",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack engineer building scalable, modern web applications.",
  },
  {
    name: "Nina Patel",
    role: "Marketing Director",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Data-driven marketer helping brands reach their true potential.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 h-screen flex items-center justify-center px-6">
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-200 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-200 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            About Us
          </span>
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            We Are <span className="text-green-500">business-site</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A passionate team of designers, developers, and strategists helping
            businesses grow through smart digital solutions since 2012.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-green-100 h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop"
                alt="Our team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-green-500 text-white rounded-2xl p-5 shadow-lg text-center">
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl font-black"
              >
                500+
              </div>
              <div className="text-green-100 text-xs mt-1">Happy Clients</div>
            </div>
          </div>
          <div>
            <span className="text-green-600 text-xs font-bold tracking-widest uppercase">
              Our Story
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5"
            >
              Built on Passion, Driven by Results
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-sm">
              Founded in 2012, business-site started as a small web agency with
              big ambitions. Over a decade, we've grown into a full-service
              digital company trusted by startups and enterprises alike.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              We believe every business deserves a powerful digital presence.
              Our mission is to make that possible — affordably, beautifully,
              and effectively.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-green-600 transition-colors shadow-md shadow-green-200"
            >
              Work With Us <RiArrowRightLine size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 h-screen flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <span className="text-green-600 text-xs font-bold tracking-widest uppercase">
              What We Stand For
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-black text-gray-900 mt-3"
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {values.map(function (v) {
              return (
                <div
                  key={v}
                  className="flex items-center gap-4 bg-white rounded-xl p-5 border border-green-100 hover:border-green-300 transition-colors"
                >
                  <RiCheckboxCircleLine
                    size={22}
                    className="text-green-500 flex-shrink-0"
                  />
                  <span className="text-gray-700 text-sm font-medium">{v}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <span className="text-green-600 text-xs font-bold tracking-widest uppercase">
              The People
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-black text-gray-900 mt-3"
            >
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(function (m) {
              return (
                <div
                  key={m.name}
                  className="bg-white rounded-2xl overflow-hidden border border-green-100 hover:shadow-xl hover:shadow-green-50 transition-all duration-300 group"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-bold text-gray-900">{m.name}</div>
                    <div className="text-green-600 text-sm font-medium mt-1 mb-2">
                      {m.role}
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {m.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
