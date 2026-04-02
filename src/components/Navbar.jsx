import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiMenuLine, RiCloseLine, RiLeafLine } from "react-icons/ri";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="https://business-site-mu-sage.vercel.app/"
          className="flex items-center gap-2"
        >
          <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center">
            <RiLeafLine size={20} className="text-white" />
          </div>
          <span
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-xl font-black text-gray-900"
          >
            business<span className="text-green-500">-site</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(function (l) {
            return (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={function (p) {
                    return (
                      "text-sm font-medium transition-colors duration-200 " +
                      (p.isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-600")
                    );
                  }}
                >
                  {l.label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-green-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-green-600 transition-colors duration-200 shadow-md shadow-green-200"
        >
          Get Started
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={function () {
            setOpen(!open);
          }}
        >
          {open ? <RiCloseLine size={26} /> : <RiMenuLine size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-green-100 px-6 py-6 flex flex-col gap-5 shadow-lg">
          {links.map(function (l) {
            return (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={function () {
                  setOpen(false);
                }}
                className={function (p) {
                  return (
                    "text-sm font-medium " +
                    (p.isActive
                      ? "text-green-600 font-semibold"
                      : "text-gray-600")
                  );
                }}
              >
                {l.label}
              </NavLink>
            );
          })}
          <Link
            to="/contact"
            onClick={function () {
              setOpen(false);
            }}
            className="bg-green-500 text-white text-sm font-semibold px-6 py-3 rounded-full text-center hover:bg-green-600 transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
