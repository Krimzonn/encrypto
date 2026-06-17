function Navbar() {
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
      </div>
    </nav>
  );
}

export default Navbar;
