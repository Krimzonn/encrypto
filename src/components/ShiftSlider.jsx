import { motion } from "framer-motion";

function ShiftSlider({ shift, setShift }) {
  return (
    <div className="bg-surface border border-rw/15 rounded-lg p-5 mb-6">
      <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
        Shift
      </p>
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={1}
          max={25}
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
          className="flex-1 accent-rw cursor-pointer"
        />
        <motion.span
          key={shift}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="text-xl font-bold text-rw min-w-[32px] text-center"
        >
          {shift}
        </motion.span>
        <span className="text-xs text-gold border border-gold/30 bg-gold-pale px-2 py-1 rounded">
          ROT-{shift}
        </span>
      </div>
    </div>
  );
}

export default ShiftSlider;
