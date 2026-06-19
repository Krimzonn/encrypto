import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CipherSelect from "./pages/CipherSelect";
import Caesar from "./pages/Caesar";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ciphers" element={<CipherSelect />} />
          <Route path="/cipher/caesar" element={<Caesar />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
