import { motion } from "framer-motion";

function RailCount({ numRails, setNumRails }) {
  return (
    <div className="bg-surface border border-rw/15 rounded-lg p-5 mb-6">
      <p className="text-xs font-semibold tracking-widest uppercase text-rw mb-4">
        Number of Rails
      </p>

      <div className="flex items-center gap-4">
        <input
          type="range"
          min={2}
          max={8}
          value={numRails}
          onChange={(e) => {
            setNumRails(Number(e.target.value));
          }}
          className="flex-1 accent-rw cursor-pointer"
        />
        <motion.span
          key={numRails}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="text-xl font-bold text-rw min-w-[32px] text-center"
        >
          {numRails}
        </motion.span>
        <span className="text-xs text-gold border border-gold/30 bg-gold-pale px-2 py-1 rounded ">
          {numRails} rails
        </span>
      </div>
    </div>
  );
}

export default RailCount;
