import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import FadeIn from "../components/FadeIn";
import CipherIO from "../components/CipherIO";
import ModesTab from "../components/ModesTab";
import {
  affineEncrypt,
  affineDecrypt,
  buildAffineMap,
  valid_a_values,
} from "../ciphers/affineCipher";
import BackButton from "../components/BackButton";
import { AnimatePresence, motion } from "framer-motion";

const modes = ["Encrypt", "Decrypt"];

function Affine() {
  const [mode, setMode] = useState("Encrypt");
  const [input, setInput] = useState("");
  const [a, setA] = useState(5);
  const [b, setB] = useState(8);

  const output = useMemo(() => {
    if (!input) {
      return "";
    }

    if (mode === "Encrypt") {
      return affineEncrypt(input, a, b);
    }

    if (mode === "Decrypt") {
      return affineDecrypt(input, a, b);
    }

    return "";
  }, [input, a, b, mode]);

  const affineMap = useMemo(() => {
    return buildAffineMap(a, b);
  }, [a, b]);

  return (
    <PageWrapper>
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 py-14">
        <BackButton to="/ciphers" />
        <FadeIn delay={0.1}>
          <p className="text-xs text-rw font-semibold tracking-widest uppercase mb-2">
            Affine Cipher
          </p>
          <h1 className="text-3xl font-bold text-rw mb-2">
            Current Mode: <span className="text-gold">{mode}</span>
          </h1>
          <p className="text-xs text-gray-400 mb-10">
            Encrypts using the formula (a × x + b) mod 26. Key 'a' must be
            coprime to 26. When a=1 it reduces to a Caesar cipher.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ModesTab mode={mode} setMode={setMode} modes={modes} />
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-surface border border-rw/15 rounded-lg p-5 mb-6">
            <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
              Keys
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400 w-24">
                  Key a (coprime)
                </span>
                <select
                  value={a}
                  onChange={(e) => setA(Number(e.target.value))}
                  className="flex-1 text-sm bg-surface border-b border-rw/20 outline-none pb-1 text-rw cursor-pointer"
                >
                  {valid_a_values.map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
                <span className="text-xs text-gold border border-gold/30 bg-gold-pale px-2 py-1 rounded">
                  a = {a}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400 w-24">
                  Key b (shift)
                </span>
                <input
                  type="range"
                  min={0}
                  max={25}
                  value={b}
                  onChange={(e) => setB(Number(e.target.value))}
                  className="flex-1 accent-rw cursor-pointer"
                />
                <motion.span
                  key={b}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-xs text-gold border border-gold/30 bg-gold-pale px-2 py-1 rounded min-w-[48px] text-center"
                >
                  b = {b}
                </motion.span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <CipherIO
            mode={mode}
            input={input}
            setInput={setInput}
            output={output}
          />
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="bg-surface border border-rw/15 rounded-lg p-5 mt-6">
            <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-2">
              Alphabet Mapping
            </p>
            <p className="text-xs text-gray-400 mb-4">
              Formula: ({a} × x + {b}) mod 26
            </p>

            <div className="flex flex-wrap gap-2">
              {affineMap.map(({ original, encrypted }) => (
                <AnimatePresence key={original} mode="wait">
                  <motion.div
                    key={encrypted + a + b}
                    className="flex flex-col items-center w-7"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.12 }}
                  >
                    <span className="text-xs text-gray-400">{original}</span>
                    <span className="text-xs text-rw/30">↓</span>
                    <span className="text-xs font-bold text-gold">
                      {encrypted}
                    </span>
                  </motion.div>
                </AnimatePresence>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </PageWrapper>
  );
}

export default Affine;
