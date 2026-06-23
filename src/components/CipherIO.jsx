import { motion } from "framer-motion";

function CipherIO({ mode, input, setInput, output }) {
  const inputLabel = mode === "Decrypt" ? "Ciphertext" : "Plaintext";
  const outputLabel = mode === "Decrypt" ? "Plaintext" : "Ciphertext";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-surface border border-rw/15 rounded-lg p-5">
        <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-3">
          {inputLabel}
        </p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          rows={5}
          className="w-full text-sm outline-none resize-none bg-transparent dark:text-gray-400 dark:placeholder:text-gray-600"
        ></textarea>
      </div>

      <div className="bg-surface border border-rw/15 rounded-lg p-5">
        <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-3">
          {outputLabel}
        </p>

        <motion.p
          key={output}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-gold font-medium break-all min-h-[100px]"
        >
          {output || (
            <span className="text-gray-400">Output will appear here...</span>
          )}
        </motion.p>
      </div>
    </div>
  );
}

export default CipherIO;
