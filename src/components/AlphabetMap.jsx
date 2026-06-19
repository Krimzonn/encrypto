import { motion, AnimatePresence } from "framer-motion";
import { buildAlphabetMap } from "../ciphers/caesarCipher";

function AlphabetMap({ shift }) {
  const map = buildAlphabetMap(shift);

  return (
    <div className="bg-surface border border-rw/15 rounded-lg p-5">
      <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
        Alphabet Mapping
      </p>

      <div className="flex flex-wrap gap-2">
        {map.map(({ original, shifted }) => (
          <div key={original} className="flex flex-col items-center w-7">
            <span className="text-xs text-gray-400">{original}</span>
            <span className="text-xs text-rw/30">↓</span>
            <AnimatePresence mode="wait">
              <motion.span
                className="text-xs font-bold text-gold"
                intial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.12 }}
              >
                {shifted}
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlphabetMap;
