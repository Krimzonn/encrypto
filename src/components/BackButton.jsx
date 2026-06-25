import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function BackButton({ to }) {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(to)}
      whileHover={{ x: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex items-center gap-2 bg-surface text-xs border border-rw border-1 text-rw font-bold hover:text-white hover:bg-rw tracking-widest uppercase mb-8 cursor-pointer transition-colors px-5 py-3 rounded-lg transition-all"
    >
      Back
    </motion.button>
  );
}

export default BackButton;
