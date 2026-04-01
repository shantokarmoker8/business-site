import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenuLine, RiCloseLine, RiBriefcaseLine } from "react-icons/ri";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
      isActive ? "text-amber-400" : "text-zinc-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 text-amber-400">
          <RiBriefcaseLine size={26} />
          <span className="text-xl font-black tracking-tight text-white">
            business<span className="text-amber-400">-site</span>
          </span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={navLinkClass} end={l.to === "/"}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-amber-400 text-zinc-950 text-sm font-bold px-5 py-2.5 rounded-full hover:bg-amber-300 transition-colors duration-200"
        >
          Get Started
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <RiCloseLine size={26} /> : <RiMenuLine size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-amber-400 text-zinc-950 text-sm font-bold px-5 py-2.5 rounded-full text-center hover:bg-amber-300 transition-colors duration-200"
          >
            Get Started
          </NavLink>
        </div>
      )}
    </header>
  );
}
