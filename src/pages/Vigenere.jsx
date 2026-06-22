import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import FadeIn from "../components/FadeIn";
import ModesTab from "../components/ModesTab";
import CipherIO from "../components/CipherIO";
import KeyInput from "../components/KeyInput";
import {
  vigenereDecrypt,
  vigenereEncrypt,
  buildVigenereMap,
} from "../ciphers/vigenereCipher";
import { motion, AnimatePresence } from "framer-motion";

const modes = ["Encrypt", "Decrypt"];

function Vigenere() {
  const [mode, setMode] = useState("Encrypt");
  const [input, setInput] = useState("");
  const [keyWord, setKeyWord] = useState("");

  const output = useMemo(() => {
    if (!input || !keyWord) {
      return "";
    }
    if (mode === "Encrypt") {
      return vigenereEncrypt(input, keyWord);
    }
    if (mode === "Decrypt") {
      return vigenereDecrypt(input, keyWord);
    }
    return "";
  }, [input, keyWord, mode]);

  const map = useMemo(() => {
    return buildVigenereMap(input, keyWord, mode);
  }, [input, keyWord, mode]);

  return (
    <PageWrapper>
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 py-14">
        <FadeIn delay={0.1}>
          <p className="text-xs text-rw font-semibold tracking-widest uppercase mb-2">
            Vigenère Cipher
          </p>
          <h1 className="text-3xl font-bold text-rw mb-2">
            Current Mode: <span className="text-gold">{mode}</span>
          </h1>
          <p className="text-xs text-gray-400 mb-10">
            Uses a keyword to shift each letter by a different amount. Far
            harder to crack than Caesar as each letter has it's own shift.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ModesTab mode={mode} setMode={setMode} modes={modes} />
        </FadeIn>

        <FadeIn delay={0.3}>
          <KeyInput keyword={keyWord} setKeyWord={setKeyWord} />
        </FadeIn>

        <FadeIn delay={0.4}>
          <CipherIO
            mode={mode}
            input={input}
            setInput={setInput}
            output={output}
          />
        </FadeIn>

        {input && keyWord && (
          <FadeIn delay={0.5}>
            <div className="bg-surface border border-rw/15 rounded-lg p-5 mt-6">
              <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
                Letter Mapping
              </p>
              <div className="flex flex-wrap gap-3">
                {map.map((item, index) => (
                  <AnimatePresence key={index} mode="wait">
                    <motion.div
                      key={item.original + item.keyLetter + index}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.12, delay: index * 0.03 }}
                      className="flex flex-col items-center"
                    >
                      <span className="text-xs text-gray-400">
                        {item.original}
                      </span>
                      <span className="text-xs text-rw/30">
                        {item.keyLetter}
                      </span>
                      <span className="text-xs font-bold text-gold">
                        {item.shifted}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </PageWrapper>
  );
}

export default Vigenere;
