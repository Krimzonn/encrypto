import { motion } from "framer-motion";
import { bruteForce } from "../ciphers/caesarCipher";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

function BruteForce({ input }) {
  if (!input) {
    return (
      <div className="bg-surface border border-rw/15 rounded-lg p-6">
        <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-3">
          Brute Force
        </p>
        <p className="text-xs text-gray-400">
          Enter ciphertext above to try all 25 possible shifts
        </p>
      </div>
    );
  }

  const result = bruteForce(input);

  return (
    <div className="bg-surface border border-rw/15 rounded-lg p-6">
      <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
        Brute Force - all 25 shifts
      </p>
      <motion.div
        key={input}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-2 max-h-96 overflow-y-auto"
      >
        {result.map(({ shift, text }) => (
          <motion.div
            key={shift}
            variants={itemVariants}
            className="flex gap-3 items-baseline border-b border-rw/10 pb-1"
          >
            <span className="text-xs text-rw font-semibold min-w-[50px]">
              ROT-{shift}
            </span>
            <span className="text-sm text-gold break-all">{text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default BruteForce;
