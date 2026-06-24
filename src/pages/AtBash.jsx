import { useState } from "react";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import FadeIn from "../components/FadeIn";
import atbashEncrypt, {
  atbashDecrypt,
  buildAtbashMap,
} from "../ciphers/atbashCipher";
import ModesTab from "../components/ModesTab";
import CipherIO from "../components/CipherIO";
import BackButton from "../components/BackButton";
import { motion, AnimatePresence } from "framer-motion";

const modes = ["Encrypt", "Decrypt"];

const buildMap = buildAtbashMap();

function AtBash() {
  const [mode, setMode] = useState("Encrypt");
  const [input, setInput] = useState("");

  const output = input
    ? mode === "Encrypt"
      ? atbashEncrypt(input)
      : atbashDecrypt(input)
    : "";

  return (
    <PageWrapper>
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 py-14">
        <BackButton to="/ciphers" />
        <FadeIn delay={0.1}>
          <p className="text-xs text-rw font-semibold tracking-widest uppercase mb-2">
            Atbash Cipher
          </p>
          <h1 className="text-3xl font-bold text-rw mb-2">
            Current Mode: <span className="text-gold">{mode}</span>
          </h1>
          <p className="text-xs text-gray-400 mb-10">
            Mirrors the alphabet --- A becomes Z, B becomes Y. Encrypting twice
            gives back the original.
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
          <div className="bg-surface border border-rw/15 rounded-lg p-5 mt-6">
            <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
              Alphabet Mapping
            </p>

            <div className="flex flex-wrap gap-2">
              {buildMap.map(({ original, shifted }) => (
                <div key={original} className="flex flex-col items-center w-7">
                  <span className="text-xs text-gray-400">{original}</span>
                  <span className="text-xs text-rw/30">↓</span>
                  <span className="text-xs text-gold font-bold">{shifted}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </PageWrapper>
  );
}

export default AtBash;
