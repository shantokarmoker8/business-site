import { useState } from "react";
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiSendPlaneLine,
  RiTimeLine,
} from "react-icons/ri";

const info = [
  {
    icon: RiMailLine,
    label: "Email Us",
    value: "hello@business-site.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: RiPhoneLine,
    label: "Call Us",
    value: "+1 (555) 000-1234",
    sub: "Mon–Fri, 9am–6pm EST",
  },
  {
    icon: RiMapPinLine,
    label: "Visit Us",
    value: "123 Business Ave, New York",
    sub: "NY 10001, United States",
  },
  {
    icon: RiTimeLine,
    label: "Working Hours",
    value: "Mon – Fri: 9am – 6pm",
    sub: "Weekend: By appointment",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 h-screen flex items-center justify-center px-6">
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-200 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-200 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Get In Touch
          </span>
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            Let's <span className="text-green-500">Talk</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? We'd love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-gray-50 h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Info */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-green-600 text-xs font-bold tracking-widest uppercase">
                Contact Info
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-6"
              >
                We'd Love to Hear From You
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {info.map(function (item) {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 bg-white rounded-xl p-4 border border-green-100 hover:border-green-300 transition-colors"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComp size={18} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-green-600 font-bold uppercase tracking-widest mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {item.value}
                      </div>
                      <div className="text-gray-400 text-xs mt-0.5">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="hidden md:block rounded-2xl overflow-hidden border border-green-100 shadow-sm h-40">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700&h=200&fit=crop"
                alt="Working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl border border-green-100 shadow-md p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <RiSendPlaneLine size={36} className="text-green-500" />
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl font-black text-gray-900 mb-3"
                >
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thank you! We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div>
                <h2
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl font-black text-gray-900 mb-1"
                >
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Fill out the form and our team will get back to you shortly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 text-xs font-semibold uppercase tracking-widest mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-400 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-xs font-semibold uppercase tracking-widest mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-400 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs font-semibold uppercase tracking-widest mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-400 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs font-semibold uppercase tracking-widest mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-400 transition-all text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-md shadow-green-200"
                  >
                    Send Message <RiSendPlaneLine size={18} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
