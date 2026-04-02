import { Link } from "react-router-dom";
import { RiArrowLeftLine, RiLeafLine } from "react-icons/ri";

export default function NotFound() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-200 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-200 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2" />
      <div className="text-center relative z-10">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <RiLeafLine size={44} className="text-green-500" />
        </div>
        <div
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-9xl font-black text-green-500 mb-4 leading-none"
        >
          404
        </div>
        <h1
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-3xl font-black text-gray-900 mb-4"
        >
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-10 max-w-sm mx-auto text-sm leading-relaxed">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-colors shadow-md shadow-green-200"
        >
          <RiArrowLeftLine size={18} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
