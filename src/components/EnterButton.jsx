import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function EnterButton({ to }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center pb-16">
      <motion.button
        onClick={() => navigate(to)}
        className="bg-rw text-white font-semibold tracking-widest uppercase px-8 py-3 rounded-md cursor-pointer flex items-center gap-3"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        translation={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        Explore Ciphers
      </motion.button>
    </div>
  );
}

export default EnterButton;
