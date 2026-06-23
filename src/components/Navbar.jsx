import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-rw px-8 py-4 flex items-center justify-between">
      <div className="text-white font-bold text-sm tracking-widest uppercase">
        Encrypto <span className="text-gold">.</span>
      </div>
      <div className="flex gap-6">
        <a className="text-white tracking-widest text-xs cursor-pointer hover:text-gold transition-colors">
          Home
        </a>
        <a className="text-white tracking-widest text-xs cursor-pointer hover:text-gold transition-colors">
          About
        </a>
        <button
          onClick={toggleTheme}
          className="text-white text-xs tracking-wide cursor-pointer hover:text-gold transition-colors"
        >
          {isDark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
