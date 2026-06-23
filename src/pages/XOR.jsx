import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import ModesTab from "../components/ModesTab";
import FadeIn from "../components/FadeIn";
import PageWrapper from "../components/PageWrapper";
import { xorDecrypt, xorEncrypt, buildXorMap } from "../ciphers/xorCipher";
import CipherIO from "../components/CipherIO";
import KeyInput from "../components/KeyInput";
import { motion } from "framer-motion";

const modes = ["Encrypt", "Decrypt"];

function XOR() {
  const [mode, setMode] = useState("Encrypt");
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");

  const output = useMemo(() => {
    if (!input) {
      return "";
    }

    if (mode === "Encrypt") {
      return xorEncrypt(input, key);
    }

    if (mode === "Decrypt") {
      return xorDecrypt(input, key);
    }

    return "";
  }, [input, key, mode]);

  const xorMap = useMemo(() => {
    return buildXorMap(input, key);
  }, [input, key]);

  return (
    <PageWrapper>
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 py-14">
        <FadeIn delay={0.1}>
          <p className="text-xs text-rw font-semibold tracking-widest uppercase mb-2">
            XOR Cipher
          </p>
          <h1 className="text-3xl font-bold text-rw mb-2">
            Current Mode: <span className="text-gold">{mode}</span>
          </h1>
          <p className="text-xs text-gray-400 mb-10">
            Applies a bitwise XOR between each character and a repeating key. A
            fundamental building block of modern encryption.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ModesTab mode={mode} setMode={setMode} modes={modes} />
        </FadeIn>

        <FadeIn delay={0.3}>
          <KeyInput keyword={key} setKeyWord={setKey} />
        </FadeIn>

        <FadeIn delay={0.4}>
          <CipherIO
            mode={mode}
            input={input}
            setInput={setInput}
            output={output}
          />
        </FadeIn>

        {input && key && (
          <FadeIn delay={0.5}>
            <div className="bg-surface border border-rw/15 rounded-lg p-5 mt-6">
              <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
                Binary XOR
              </p>
              <div className="flex flex-col gap-4 overflow-x-auto">
                {xorMap.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="flex flex-col gap-1"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-rw font-semibold w-4">
                        {item.original}
                      </span>
                      <span className="text-xs text-gray-400">XOR</span>
                      <span className="text-xs text-gold font-semibold w-4">
                        {item.keyChar}
                      </span>
                      <span className="text-xs text-gray-400">→</span>
                      <span className="text-xs text-rw font-semibold">
                        {item.result}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-rw/60 tracking-widest">
                      {item.originalBits}
                    </div>
                    <div className="font-mono text-xs text-gold/60 tracking-widest">
                      {item.keyBits}
                    </div>
                    <div className="font-mono text-xs text-rw font-bold tracking-widest border-t border-rw/20 pt-1">
                      {item.xorBits}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </PageWrapper>
  );
}

export default XOR;
