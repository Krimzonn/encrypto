import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import ModesTab from "../components/ModesTab";
import FadeIn from "../components/FadeIn";
import PageWrapper from "../components/PageWrapper";
import {
  columnarEncrypt,
  columnarDecrypt,
  buildColumnarGrid,
} from "../ciphers/columnarCipher";
import CipherIO from "../components/CipherIO";
import KeyInput from "../components/KeyInput";
import BackButton from "../components/BackButton";
import { motion } from "framer-motion";

const modes = ["Encrypt", "Decrypt"];

function ColumnarCipher() {
  const [mode, setMode] = useState("Encrypt");
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");

  const output = useMemo(() => {
    if (!input) {
      return "";
    }

    if (mode === "Encrypt") {
      return columnarEncrypt(input, keyword);
    }

    if (mode === "Decrypt") {
      return columnarDecrypt(input, keyword);
    }

    return "";
  }, [input, keyword, mode]);

  const { grid, order, key } = useMemo(() => {
    return buildColumnarGrid(input, keyword);
  }, [input, keyword]);

  return (
    <PageWrapper>
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 py-14">
        <BackButton to="/ciphers" />
        <FadeIn delay={0.1}>
          <p className="text-xs text-rw font-semibold tracking-widest uppercase mb-2">
            Columnar Transposition
          </p>
          <h1 className="text-3xl font-bold text-rw mb-2">
            Current Mode: <span className="text-gold">{mode}</span>
          </h1>
          <p className="text-xs text-gray-400 mb-10">
            Arranges your message in rows under a keyword then reads off columns
            in alphabetical order of the keyword letters.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ModesTab mode={mode} setMode={setMode} modes={modes} />
        </FadeIn>

        <FadeIn delay={0.3}>
          <KeyInput keyword={keyword} setKeyWord={setKeyword} />
        </FadeIn>

        <FadeIn delay={0.4}>
          <CipherIO
            mode={mode}
            input={input}
            setInput={setInput}
            output={output}
          />
        </FadeIn>

        {input && keyword && grid.length > 0 && (
          <FadeIn delay={0.5}>
            <div className="bg-surface border border-rw/15 rounded-lg p-5 mt-6 overflow-x-auto">
              <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
                Grid
              </p>

              <div className="flex gap-1 mb-2">
                {key.map((letter, colIndex) => (
                  <motion.div
                    key={colIndex}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: colIndex * 0.05 }}
                    className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded ${order[0] === colIndex || order.indexOf(colIndex) === 0 ? "bg-rw text-white" : "bg-gold-pale text-gold border border-gold/30"}`}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>

              {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1 mb-1">
                  {row.map((char, colIndex) => (
                    <div
                      key={colIndex}
                      className="w-8 h-8 flex items-center justify-center text-xs text-rw border border-rw/10 rounded"
                    >
                      {char}
                    </div>
                  ))}
                </div>
              ))}

              <p className="text-xs text-gray-400 mt-3">
                Columns are read in aplhabetical order of keyword letters
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </PageWrapper>
  );
}

export default ColumnarCipher;
