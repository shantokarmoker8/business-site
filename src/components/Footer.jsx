import { NavLink } from 'react-router-dom'
import { RiBriefcaseLine, RiTwitterXLine, RiLinkedinBoxLine, RiFacebookBoxLine } from 'react-icons/ri'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <RiBriefcaseLine size={22} className="text-amber-400" />
            <span className="text-lg font-black text-white">
              business<span className="text-amber-400">-site</span>
            </span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            We craft bold digital experiences for forward-thinking businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-3">
            {['/', '/about', '/services', '/contact'].map((path, i) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className="text-zinc-400 hover:text-amber-400 text-sm transition-colors"
                >
                  {['Home', 'About', 'Services', 'Contact'][i]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">Follow Us</h4>
          <div className="flex items-center gap-4">
            {[RiTwitterXLine, RiLinkedinBoxLine, RiFacebookBoxLine].map((Icon, i) => (
              
                key={i}
                href="#"
                className="text-zinc-400 hover:text-amber-400 transition-colors"
                aria-label="social"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 text-center py-5 text-zinc-600 text-xs">
        © {new Date().getFullYear()} business-site. All rights reserved.
      </div>
    </footer>
  )
}