import { NavLink } from "react-router-dom";
import {
  RiLeafLine,
  RiTwitterXLine,
  RiLinkedinBoxLine,
  RiFacebookBoxLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

const socials = [
  { Icon: RiTwitterXLine, href: "#", label: "Twitter" },
  { Icon: RiLinkedinBoxLine, href: "#", label: "LinkedIn" },
  { Icon: RiFacebookBoxLine, href: "#", label: "Facebook" },
];

function SocialBtn({ Icon, href }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-all duration-200"
    >
      <Icon size={18} />
    </a>
  );
}

function FooterNavLink({ path, label }) {
  return (
    <li>
      <NavLink
        to={path}
        className="text-gray-500 hover:text-green-600 text-sm transition-colors"
      >
        {label}
      </NavLink>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-green-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center">
              <RiLeafLine size={20} className="text-white" />
            </div>
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-xl font-black text-gray-900"
            >
              business<span className="text-green-500">-site</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
            We craft professional digital experiences for forward-thinking
            businesses. Let's grow together.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(function (s) {
              return <SocialBtn key={s.label} Icon={s.Icon} href={s.href} />;
            })}
          </div>
        </div>

        <div>
          <h4 className="text-gray-900 font-semibold mb-5 text-sm uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {navLinks.map(function (link) {
              return (
                <FooterNavLink
                  key={link.path}
                  path={link.path}
                  label={link.label}
                />
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-semibold mb-5 text-sm uppercase tracking-widest">
            Contact
          </h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <RiMailLine className="text-green-500" size={16} />
              hello@business-site.com
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <RiPhoneLine className="text-green-500" size={16} />
              +1 (555) 000-1234
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-green-100 text-center py-5 text-gray-400 text-xs">
        © {new Date().getFullYear()} business-site. All rights reserved.
      </div>
    </footer>
  );
}
