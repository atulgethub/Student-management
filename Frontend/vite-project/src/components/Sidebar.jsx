import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-full w-64 bg-slate-900 text-white p-6 flex flex-col gap-4">
      <Link
        to="/"
        className="hover:text-sky-400 transition"
      >
        Add Student
      </Link>

      <Link
        to="/view"
        className="hover:text-sky-400 transition"
      >
        View Students
      </Link>
    </div>
  );
}
