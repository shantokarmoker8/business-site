import { Link } from "react-router-dom";
import { RiArrowLeftLine, RiLeafLine } from "react-icons/ri";

export default function NotFound() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center min-h-[75vh] px-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <RiLeafLine size={44} className="text-green-500" />
        </div>
        <div
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-8xl font-black text-green-500 mb-4"
        >
          404
        </div>
        <h1
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-3xl font-black text-gray-900 mb-4"
        >
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-10 max-w-sm mx-auto">
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
