import { RiCheckboxCircleLine } from "react-icons/ri";

const values = [
  "Client-first approach in every project",
  "Transparent communication at every step",
  "Cutting-edge technology and modern design",
  "Data-driven decisions for better results",
  "Continuous improvement and innovation",
  "Long-term partnerships, not one-time jobs",
];

const team = [
  { name: "Alex Turner", role: "CEO & Founder", bg: "bg-amber-400" },
  { name: "Maria Chen", role: "Head of Design", bg: "bg-zinc-600" },
  { name: "David Osei", role: "Lead Developer", bg: "bg-zinc-700" },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-zinc-950 py-24 px-6 text-center border-b border-zinc-800">
        <span className="inline-block bg-amber-400/10 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-amber-400/20">
          About Us
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          We Are <span className="text-amber-400">business-site</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
          A passionate team of designers, developers, and strategists helping
          businesses grow through smart digital solutions since 2012.
        </p>
      </section>

      {/* Story */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Our Story</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Founded in 2012, business-site started as a small web agency with
              big ambitions. Over a decade, we've grown into a full-service
              digital company trusted by startups and enterprises alike.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              We believe every business deserves a powerful digital presence.
              Our mission is to make that possible — affordably, beautifully,
              and effectively.
            </p>
          </div>
          <div className="bg-zinc-800 rounded-2xl border border-zinc-700 p-10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl font-black text-amber-400">12+</div>
              <div className="text-zinc-300 mt-2 font-semibold">
                Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v}
                className="flex items-start gap-4 bg-zinc-900 rounded-xl p-5 border border-zinc-800"
              >
                <RiCheckboxCircleLine
                  size={22}
                  className="text-amber-400 flex-shrink-0 mt-0.5"
                />
                <span className="text-zinc-300 text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div
                  className={`w-24 h-24 rounded-full mx-auto mb-4 ${m.bg} flex items-center justify-center text-3xl font-black text-white`}
                >
                  {m.name[0]}
                </div>
                <div className="font-bold text-white">{m.name}</div>
                <div className="text-amber-400 text-sm mt-1">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
