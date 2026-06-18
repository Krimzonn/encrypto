import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import caesarEncrypt, { caesarDecrypt } from "../ciphers/caesarCipher";
import ModesTab from "../components/ModesTab";
import CipherIO from "../components/CipherIO";

function Caesar() {
  const [mode, setMode] = useState("Encrypt");
  const [input, setInput] = useState("");
  const [shift, seShift] = useState(3);

  const output = useMemo(() => {
    if (!input) {
      return;
    }

    if (mode === "Encrypt") {
      return caesarEncrypt(input, shift);
    }

    if (mode === "Decrypt") {
      return caesarDecrypt(input, shift);
    }

    return "";
  }, [input, shift, mode]);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 py-14">
        <p className="text-xs text-rw font-semibold tracking-widest uppercase mb-2">
          Caesar Cipher
        </p>

        <h1 className="text-3xl font-bold text-rw mb-10">
          Current Mode: <span className="text-gold">{mode}</span>
        </h1>

        <ModesTab mode={mode} setMode={setMode} />
        <CipherIO
          input={input}
          mode={mode}
          setInput={setInput}
          output={output}
        />
      </div>
    </>
  );
}

export default Caesar;
