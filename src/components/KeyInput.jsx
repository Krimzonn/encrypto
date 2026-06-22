function KeyInput({ keyword, setKeyWord }) {
  return (
    <div className="bg-surface border border-rw/15 rounded-lg o-5 mb-6">
      <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
        Keyword
      </p>
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyWord(e.target.value)}
          placeholder="Enter a keyword e.g KEY"
          className="flex-1 text-sm outline-none bg-transparent border-b border-rw/20 pb-1 focus:border-rw transition-colors"
        />
        {keyword && (
          <span className="text-xs text-gold border border-gold/30 bg-gold-pale px-2 py-1 rounded tracking-widest uppercase">
            {keyword.replace(/[^a-zA-Z]/g, "").toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
}

export default KeyInput;
