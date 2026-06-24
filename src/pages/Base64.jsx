import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import FadeIn from "../components/FadeIn";
import CipherIO from "../components/CipherIO";
import ModesTab from "../components/ModesTab";
import { base64Decode, base64Encode, buildBase64Map } from "../ciphers/base64";
import BackButton from "../components/BackButton";
import { motion } from "framer-motion";

const modes = ["Encode", "Decode"];

function Base64() {
  const [mode, setMode] = useState("Encode");
  const [input, setInput] = useState("");

  const output = useMemo(() => {
    if (!input) {
      return "";
    }

    if (mode === "Encode") {
      return base64Encode(input);
    }

    if (mode === "Decode") {
      return base64Decode(input);
    }

    return "";
  }, [input, mode]);

  const base64Map = useMemo(() => {
    return buildBase64Map(input);
  });

  return (
    <PageWrapper>
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 py-14">
        <BackButton to="/ciphers" />
        <FadeIn delay={0.1}>
          <p className="text-xs text-rw font-semibold tracking-widest uppercase mb-2">
            Base64
          </p>
          <h1 className="text-3xl font-bold text-rw mb-2">
            Current Mode: <span className="text-gold">{mode}</span>
          </h1>
          <p className="text-xs text-gray-400 mb-10">
            Encodes binary data as readable ASCII text. Not a cipher as the data
            is not hidden, just represented differently.
          </p>
          <p className="text-xs text-gold/70 mb-10">
            Seen everywhere: JWT tokens, image encoding, API responses.
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

        {input && mode && (
          <FadeIn delay={0.4}>
            <div className="bg-surface border border-rw/15 rounded-lg p-5 mt-6">
              <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-1">
                Chunk Mapping
              </p>
              <p className="text-xs text-gray-400 mb-4">
                Every 3 characters → 4 Base64 characters
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {base64Map.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.08 }}
                  className="flex flex-col items-center bg-rw-pale dark:bg-rw/10 rounded-lg px-4 py-3 gap-1"
                >
                  <span className="text-sm font-bold text-rw">
                    {item.original}
                  </span>
                  <span className="text-sm text-rw/70"> ↓ </span>
                  <span className="text-sm font-bold text-gold">
                    {item.encoded}
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </PageWrapper>
  );
}

export default Base64;
