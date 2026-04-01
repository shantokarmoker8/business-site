import { useState } from 'react'
import { MdLocationOn, MdPhone, MdEmail, MdSend, MdCheckCircle } from 'react-icons/md'
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'

const CONTACT_INFO = [
  { Icon: MdLocationOn, label: 'Address', value: '45 Business Avenue, New York, NY 10001' },
  { Icon: MdPhone,      label: 'Phone',   value: '+1 (555) 000-0000'                       },
  { Icon: MdEmail,      label: 'Email',   value: 'hello@nexora.com'                        },
]

const SOCIALS = [
  { Icon: FaFacebookF,  href: '#', label: 'Facebook'  },
  { Icon: FaXTwitter,   href: '#', label: 'X/Twitter' },
  { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn'  },
  { Icon: FaInstagram,  href: '#', label: 'Instagram' },
]

const FIELDS = [
  { name: 'name',    label: 'Full Name',     placeholder: 'John Doe',            type: 'text',  required: true  },
  { name: 'email',   label: 'Email Address', placeholder: 'john@example.com',    type: 'email', required: true  },
  { name: 'phone',   label: 'Phone Number',  placeholder: '+1 (555) 000-0000',   type: 'tel',   required: false },
  { name: 'subject', label: 'Subject',       placeholder: 'Web Design Project',  type: 'text',  required: false },
]

const INITIAL = { name: '', email: '', phone: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm]   = useState(INITIAL)
  const [sent, setSent]   = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setForm(INITIAL)
      }, 5000)
    }, 1200)
  }

  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-light)' }}
      >
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ backgroundColor: 'var(--color-brand-100)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'var(--color-brand-500)' }}
          >
            Get In Touch
          </span>
          <h1
            className="font-heading text-5xl lg:text-7xl font-black mt-3 mb-6"
            style={{ color: 'var(--color-dark)' }}
          >
            Let&apos;s{' '}
            <span style={{ color: 'var(--color-brand-500)' }}>Talk</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Have a question or ready to start a project? We would love to hear
            from you. Reach out anytime — we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* ── Info column ── */}
          <div>
            <h2
              className="font-heading text-3xl font-black mb-8"
              style={{ color: 'var(--color-dark)' }}
            >
              Contact Information
            </h2>

            <div className="space-y-6 mb-12">
              {CONTACT_INFO.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-brand-100)' }}
                  >
                    <Icon size={22} style={{ color: 'var(--color-brand-500)' }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: 'var(--color-dark)' }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mb-12">
              <p
                className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4"
              >
                Follow Us
              </p>
              <div className="flex gap-3">
                {SOCIALS.map(({ Icon, href, label }) => (
                  
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--color-brand-500)' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-700)')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-500)')}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-3xl overflow-hidden h-60 flex flex-col items-center justify-center gap-3 border border-gray-100"
              style={{ backgroundColor: 'var(--color-light)' }}
            >
              <MdLocationOn size={40} style={{ color: 'var(--color-brand-200)' }} />
              <p className="text-sm text-gray-400">Embed your Google Map here</p>
            </div>
          </div>

          {/* ── Form column ── */}
          <div
            className="rounded-3xl p-8 lg:p-10 border border-gray-100"
            style={{ backgroundColor: 'var(--color-light)' }}
          >
            {sent ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#dcfce7' }}
                >
                  <MdCheckCircle size={42} style={{ color: '#16a34a' }} />
                </div>
                <h3
                  className="font-heading text-2xl font-bold mb-2"
                  style={{ color: 'var(--color-dark)' }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm">
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2
                  className="font-heading text-2xl font-black mb-8"
                  style={{ color: 'var(--color-dark)' }}
                >
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Two-column fields */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {FIELDS.slice(0, 2).map(({ name, label, placeholder, type, required }) => (
                      <div key={name}>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          {label} {required && <span style={{ color: 'var(--color-brand-500)' }}>*</span>}
                        </label>
                        <input
                          type={type}
                          name={name}
                          value={form[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          required={required}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none transition-all duration-200"
                          style={{ color: 'var(--color-dark)' }}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-brand-500)')}
                          onBlur={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {FIELDS.slice(2).map(({ name, label, placeholder, type, required }) => (
                      <div key={name}>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          {label}
                        </label>
                        <input
                          type={type}
                          name={name}
                          value={form[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          required={required}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none transition-all duration-200"
                          style={{ color: 'var(--color-dark)' }}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-brand-500)')}
                          onBlur={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Message <span style={{ color: 'var(--color-brand-500)' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or question..."
                      required
                      rows={5}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none transition-all duration-200 resize-none"
                      style={{ color: 'var(--color-dark)' }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-brand-500)')}
                      onBlur={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ backgroundColor: loading ? 'var(--color-brand-400)' : 'var(--color-brand-500)' }}
                    onMouseEnter={e => !loading && (e.currentTarget.style.backgroundColor = 'var(--color-brand-600)')}
                    onMouseLeave={e => !loading && (e.currentTarget.style.backgroundColor = 'var(--color-brand-500)')}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <MdSend size={18} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}