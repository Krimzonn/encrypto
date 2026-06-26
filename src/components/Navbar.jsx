import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState("false");

  function handleNav(path) {
    navigate(path);
    setMenuOpen(false);
  }

  return (
    <nav className="bg-rw px-6 md:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-sm tracking-widest uppercase">
          Encrypto <span className="text-gold">.</span>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <a
            onClick={() => handleNav("/")}
            className="text-white tracking-widest text-xs cursor-pointer hover:text-gold transition-colors"
          >
            Home
          </a>
          <a
            onClick={() => handleNav("/")}
            className="text-white tracking-widest text-xs cursor-pointer hover:text-gold transition-colors"
          >
            About
          </a>
          <a
            onClick={() => handleNav("/")}
            className="text-white tracking-widest text-xs cursor-pointer hover:text-gold transition-colors"
          >
            Daily Challenge
          </a>
          <button
            onClick={toggleTheme}
            className="text-white text-xs tracking-wide cursor-pointer hover:text-gold transition-colors"
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-white text-xs tracking-wide cursor-pointer hover:text-gold transition-colors"
          >
            {isDark ? "Light" : "Dark"}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-white textlg cursor-pointer"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-col gap-4 pt-4 mt-4 border-t border-white/20 overflow-hidden"
          >
            <a
              onClick={() => handleNav("/")}
              className="text-white tracking-widest text-xs cursor-pointer hover:text-gold transition-colors"
            >
              Home
            </a>
            <a
              onClick={() => handleNav("/")}
              className="text-white tracking-widest text-xs cursor-pointer hover:text-gold transition-colors"
            >
              About
            </a>
            <a
              onClick={() => handleNav("/")}
              className="text-white tracking-widest text-xs cursor-pointer hover:text-gold transition-colors"
            >
              Daily Challenge
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
