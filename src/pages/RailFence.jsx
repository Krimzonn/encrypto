import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import ModesTab from "../components/ModesTab";
import CipherIO from "../components/CipherIO";
import RailCount from "../components/RailCount";
import FadeIn from "../components/FadeIn";
import PageWrapper from "../components/PageWrapper";
import {
  railFenceDecrypt,
  railFenceEncrypt,
  buildRailMap,
} from "../ciphers/railFenceCipher";
import BackButton from "../components/BackButton";
import { motion } from "framer-motion";

const modes = ["Encrypt", "Decrypt"];

const railColors = [
  "text-rw",
  "text-gold",
  "text-rw/50",
  "text-gold/50",
  "text-rw/30",
  "text-gold/30",
  "text-rw/20",
  "text-gold/20",
];

function RailFence() {
  const [mode, setMode] = useState("Encrypt");
  const [input, setInput] = useState("");
  const [numRails, setNumRails] = useState(3);

  const output = useMemo(() => {
    if (!input) {
      return;
    }

    if (mode === "Encrypt") {
      return railFenceEncrypt(input, numRails);
    }

    if (mode === "Decrypt") {
      return railFenceDecrypt(input, numRails);
    }

    return "";
  }, [input, numRails, mode]);

  const railMap = useMemo(() => {
    return buildRailMap(input, numRails);
  }, [input, numRails]);

  return (
    <PageWrapper>
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 py-14">
        <BackButton to="/ciphers" />
        <FadeIn delay={0.1}>
          <p className="text-xs text-rw font-semibold tracking-widest uppercase mb-2">
            Rail Fence Cipher
          </p>
          <h1 className="text-3xl font-bold text-rw mb-2">
            Current Mode: <span className="text-gold">{mode}</span>
          </h1>
          <p className="text-xs text-gray-400 mb-10">
            Writes your message in a zig zag pattern across rails then reads
            them off row by row. A classic transposition cipher.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ModesTab mode={mode} setMode={setMode} modes={modes} />
        </FadeIn>

        <FadeIn delay={0.3}>
          <CipherIO
            mode={mode}
            input={input}
            setInput={setInput}
            output={output}
          />
        </FadeIn>

        <FadeIn delay={0.4}>
          <RailCount numRails={numRails} setNumRails={setNumRails} />
        </FadeIn>

        {input && (
          <FadeIn delay={0.5}>
            <div className="bg-surface border border-rw/15 rounded-lg p-5">
              <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
                Zigzag Pattern
              </p>

              {Array.from({ length: numRails }, (_, railIndex) => (
                <div key={railIndex} className="flex gap-1 mb-1">
                  {railMap.map((item, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: item.rail === railIndex ? 1 : 0 }}
                      transition={{ duration: 0.2, delay: charIndex * 0.03 }}
                      className={`text-xs font-bold w-4 text-center ${item.rail === railIndex ? railColors[railIndex] : "invisible"}`}
                    >
                      {item.char}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </PageWrapper>
  );
}

export default RailFence;
