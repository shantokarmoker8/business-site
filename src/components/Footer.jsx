import { Link } from 'react-router-dom'
import { MdBusiness }                               from 'react-icons/md'
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { MdLocationOn, MdPhone, MdEmail }           from 'react-icons/md'

const QUICK_LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact',  label: 'Contact'  },
]

const SERVICES = [
  'Web Design & Development',
  'Digital Marketing',
  'Branding & Identity',
  'Business Consulting',
  'Mobile App Development',
  'Business Analytics',
]

const SOCIALS = [
  { Icon: FaFacebookF, href: '#' },
  { Icon: FaXTwitter,  href: '#' },
  { Icon: FaLinkedinIn,href: '#' },
  { Icon: FaInstagram, href: '#' },
]

const CONTACT_INFO = [
  { Icon: MdLocationOn, text: '45 Business Avenue, New York, NY 10001' },
  { Icon: MdPhone,      text: '+1 (555) 000-0000'                       },
  { Icon: MdEmail,      text: 'hello@nexora.com'                        },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-dark)' }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-5">
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl text-white"
              style={{ backgroundColor: 'var(--color-brand-500)' }}
            >
              <MdBusiness size={20} />
            </span>
            <span className="font-heading font-bold text-xl text-white">
              Nexora<span style={{ color: 'var(--color-brand-500)' }}>.</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            We are committed to turning your business vision into reality through innovation, trust, and exceptional service.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map(({ Icon, href }, i) => (
              
                key={i}
                href={href}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-500)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-heading font-semibold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-gray-400 flex items-center gap-2 transition-colors duration-200 hover:text-[var(--color-brand-500)] group"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
                    style={{ backgroundColor: 'var(--color-brand-500)' }}
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-heading font-semibold text-lg mb-5">Our Services</h4>
          <ul className="space-y-3">
            {SERVICES.map(s => (
              <li key={s} className="flex items-center gap-2 text-sm text-gray-400">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-brand-500)' }}
                />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-heading font-semibold text-lg mb-5">Contact Us</h4>
          <ul className="space-y-4">
            {CONTACT_INFO.map(({ Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-gray-400">
                <Icon
                  className="mt-0.5 flex-shrink-0"
                  size={16}
                  style={{ color: 'var(--color-brand-500)' }}
                />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nexora. All rights reserved.</p>
          <p>Built with React + Tailwind CSS v4</p>
        </div>
      </div>
    </footer>
  )
}