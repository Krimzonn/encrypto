import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CipherSelect from "./pages/CipherSelect";
import Caesar from "./pages/Caesar";
import { AnimatePresence } from "framer-motion";
import AtBash from "./pages/AtBash";
import Vigenere from "./pages/Vigenere";
import RailFence from "./pages/RailFence";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ciphers" element={<CipherSelect />} />
          <Route path="/cipher/caesar" element={<Caesar />} />
          <Route path="/cipher/atbash" element={<AtBash />} />
          <Route path="/cipher/vigenere" element={<Vigenere />} />
          <Route path="/cipher/railfence" element={<RailFence />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
