import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CipherSelect from "./pages/CipherSelect";
import Caesar from "./pages/Caesar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ciphers" element={<CipherSelect />} />
        <Route path="/cipher/caesar" element={<Caesar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
