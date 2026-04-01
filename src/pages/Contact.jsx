import { useState } from "react";
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiSendPlaneLine,
} from "react-icons/ri";

const info = [
  { icon: RiMailLine, label: "Email", value: "hello@business-site.com" },
  { icon: RiPhoneLine, label: "Phone", value: "+1 (555) 000-1234" },
  {
    icon: RiMapPinLine,
    label: "Address",
    value: "123 Business Ave, New York, NY",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-zinc-950 py-24 px-6 text-center border-b border-zinc-800">
        <span className="inline-block bg-amber-400/10 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-amber-400/20">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          Let's <span className="text-amber-400">Talk</span>
        </h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">
          Have a project in mind or just want to say hello? We'd love to hear
          from you.
        </p>
      </section>

      {/* Content */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-black mb-8">Contact Information</h2>
            <div className="space-y-6">
              {info.map((i) => (
                <div key={i.label} className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i.icon size={22} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-zinc-500 text-xs uppercase tracking-widest mb-1">
                      {i.label}
                    </div>
                    <div className="text-white font-medium">{i.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-800 rounded-2xl border border-zinc-700 p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mb-4">
                  <RiSendPlaneLine size={32} className="text-amber-400" />
                </div>
                <h3 className="text-xl font-black mb-2">Message Sent!</h3>
                <p className="text-zinc-400 text-sm">
                  Thank you! We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-400 text-zinc-950 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors"
                >
                  Send Message <RiSendPlaneLine size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
