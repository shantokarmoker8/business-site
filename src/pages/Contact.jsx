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

function InfoCard(props) {
  const IconComp = props.icon;
  return (
    <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-green-100 hover:border-green-300 transition-colors">
      <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <IconComp size={20} className="text-green-600" />
      </div>
      <div>
        <div className="text-xs text-green-600 font-bold uppercase tracking-widest mb-0.5">
          {props.label}
        </div>
        <div className="font-semibold text-gray-900 text-sm">{props.value}</div>
        <div className="text-gray-400 text-xs mt-0.5">{props.sub}</div>
      </div>
    </div>
  );
}

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
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Get In Touch
          </span>
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
          >
            Let's <span className="text-green-500">Talk</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear
            from you. We'll get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-14 px-6 border-b border-green-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {info.map(function (i) {
            return (
              <InfoCard
                key={i.label}
                icon={i.icon}
                label={i.label}
                value={i.value}
                sub={i.sub}
              />
            );
          })}
        </div>
      </section>

      {/* Form + Image */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Image Side */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=500&fit=crop"
              alt="Person working at desk"
              className="rounded-3xl w-full object-cover shadow-xl shadow-green-100 mb-6"
            />
            <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm">
              <p className="text-gray-600 text-sm italic leading-relaxed">
                "We're not just service providers — we're your long-term digital
                growth partners. Every conversation starts with listening to
                you."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=48&h=48&fit=crop&crop=face"
                  alt="Alex Turner"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    Alex Turner
                  </div>
                  <div className="text-green-600 text-xs">
                    CEO, business-site
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl border border-green-100 shadow-md p-8 md:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
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
                  Thank you for reaching out! We'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <div>
                <h2
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl font-black text-gray-900 mb-2"
                >
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the form and our team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-600 text-xs font-semibold uppercase tracking-widest mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-xs font-semibold uppercase tracking-widest mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs font-semibold uppercase tracking-widest mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs font-semibold uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-md shadow-green-200"
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
