export default function Navbar() {
  return (
    <div className="h-14 bg-slate-900 text-white flex items-center justify-between px-6">

      {/* Logo */}
      <h1 className="font-bold text-lg">StudentApp</h1>

      {/* Menu */}
      <div className="flex items-center gap-6">
        <a href="/" className="hover:text-sky-400 transition">Home</a>
        <a href="/about" className="hover:text-sky-400 transition">About</a>
        <a href="/contact" className="hover:text-sky-400 transition">Contact</a>

        {/* Buttons */}
        <a
          href="/login"
          className="px-3 py-1 border border-sky-400 text-sky-400 rounded hover:bg-sky-400 hover:text-white transition"
        >
          Login
        </a>

        <a
          href="/signup"
          className="px-3 py-1 bg-sky-500 rounded hover:bg-sky-600 transition"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
