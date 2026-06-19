import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CipherSelect from "./pages/CipherSelect";
import Caesar from "./pages/Caesar";
import { AnimatePresence } from "framer-motion";
import AtBash from "./pages/AtBash";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ciphers" element={<CipherSelect />} />
          <Route path="/cipher/caesar" element={<Caesar />} />
          <Route path="/cipher/atbash" element={<AtBash />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
