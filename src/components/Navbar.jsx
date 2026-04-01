import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdBusiness, MdMenu, MdClose } from "react-icons/md";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navBase = "fixed top-0 inset-x-0 z-50 transition-all duration-500";
  const navScrolled =
    "bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100";
  const navTop = "bg-transparent";

  return (
    <header className={`${navBase} ${scrolled ? navScrolled : navTop}`}>
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2 group">
          <span
            className="flex items-center justify-center w-9 h-9 rounded-xl text-white transition-transform duration-300 group-hover:rotate-6"
            style={{ backgroundColor: "var(--color-brand-500)" }}
          >
            <MdBusiness size={20} />
          </span>
          <span
            className="font-heading font-bold text-xl"
            style={{ color: "var(--color-dark)" }}
          >
            Nexora<span style={{ color: "var(--color-brand-500)" }}>.</span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                [
                  "relative text-sm font-medium tracking-wide transition-colors duration-200 group",
                  isActive
                    ? "text-[var(--color-brand-500)]"
                    : "text-gray-600 hover:text-[var(--color-brand-500)]",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 rounded-full"
                    style={{
                      backgroundColor: "var(--color-brand-500)",
                      width: isActive ? "100%" : "0%",
                    }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ── CTA Button ── */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          style={{
            backgroundColor: "var(--color-brand-500)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--color-brand-600)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--color-brand-500)")
          }
        >
          Get Started
        </Link>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
          style={{ color: "var(--color-dark)" }}
          aria-label="Toggle menu"
        >
          {open ? <MdClose size={26} /> : <MdMenu size={26} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-white border-t border-orange-100 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5 gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                [
                  "py-3 px-4 rounded-xl text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "bg-brand-50 text-[var(--color-brand-500)]"
                    : "text-gray-700 hover:bg-gray-50",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 py-3 text-center text-white text-sm font-semibold rounded-full transition-all duration-300"
            style={{ backgroundColor: "var(--color-brand-500)" }}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
