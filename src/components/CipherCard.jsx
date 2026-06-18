import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CipherCard({ name, description, difficulty, to }) {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(to)}
      className="bg-surface border border-rw/15 rounded-lg p-6 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h2 className="text-sm font-bold text-rw uppercase tracking-widest mb-2">
        {name}
      </h2>
      <span className="text-xs text-gold border border-rw/30 bg-gold-pale px-2 py-1 rounded mb-3">
        {difficulty}
      </span>
      <p className="mt-4 text-xs text-gray-500 leading-relaxed">
        {description}
      </p>
      <div className="mt-4 text-xs text-rw/50 tracking-widest uppercase">
        Open
      </div>
    </motion.div>
  );
}

export default CipherCard;
