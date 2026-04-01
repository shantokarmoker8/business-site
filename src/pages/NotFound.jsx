import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";

export default function NotFound() {
  return (
    <section className="bg-zinc-950 flex items-center justify-center min-h-[70vh] px-6 text-center">
      <div>
        <div className="text-9xl font-black text-amber-400 mb-4">404</div>
        <h1 className="text-3xl font-black text-white mb-4">Page Not Found</h1>
        <p className="text-zinc-400 mb-10">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-amber-400 text-zinc-950 font-bold px-8 py-4 rounded-full hover:bg-amber-300 transition-colors"
        >
          <RiArrowLeftLine size={18} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
