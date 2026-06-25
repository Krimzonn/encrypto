import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CipherSelect from "./pages/CipherSelect";
import Caesar from "./pages/Caesar";
import { AnimatePresence } from "framer-motion";
import AtBash from "./pages/AtBash";
import Vigenere from "./pages/Vigenere";
import RailFence from "./pages/RailFence";
import { useTheme } from "./hooks/useTheme";
import XOR from "./pages/XOR";
import Base64 from "./pages/Base64";
import Playfair from "./pages/Playfair";
import ColumnarCipher from "./pages/ColumnarCipher";
import Affine from "./pages/AffineCipher";

function App() {
  useTheme();

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
          <Route path="/cipher/xor" element={<XOR />} />
          <Route path="/cipher/base64" element={<Base64 />} />
          <Route path="/cipher/playfair" element={<Playfair />} />
          <Route
            path="/daily"
            element={<div className="p-8 text-rw">Coming Soon!</div>}
          />
          <Route path="/cipher/columnar" element={<ColumnarCipher />} />
          <Route path="/cipher/affine" element={<Affine />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
