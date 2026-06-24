import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import PageWrapper from "../components/PageWrapper";
import ModesTab from "../components/ModesTab";
import CipherIO from "../components/CipherIO";
import KeyInput from "../components/KeyInput";
import {
  playfairEncrypt,
  playfairDecrypt,
  buildGrid,
} from "../ciphers/playfair";
import BackButton from "../components/BackButton";

const modes = ["Encrypt", "Decrypt"];

function Playfair() {
  const [mode, setMode] = useState("Encrypt");
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");

  const output = useMemo(() => {
    if (!input) {
      return "";
    }

    if (mode === "Encrypt") {
      return playfairEncrypt(input, keyword);
    }

    if (mode === "Decrypt") {
      return playfairDecrypt(input, keyword);
    }

    return "";
  }, [input, keyword, mode]);

  const grid = useMemo(() => {
    return buildGrid(keyword);
  }, [keyword]);

  return (
    <PageWrapper>
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 py-14">
        <BackButton to="/ciphers" />
        <FadeIn delay={0.1}>
          <p className="text-xs text-rw font-semibold tracking-widest uppercase mb-2">
            Playfair Cipher
          </p>
          <h1 className="text-3xl font-bold text-rw mb-2">
            Current Mode: <span className="text-gold">{mode}</span>
          </h1>
          <p className="text-xs text-gray-400 mb-10">
            Encrypts pairs of letters using a 5×5 keyword grid. I and J share
            the same cell. Much stronger than Caesar.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ModesTab mode={mode} setMode={setMode} modes={modes} />
        </FadeIn>

        <FadeIn delay={0.3}>
          <KeyInput keyword={keyword} setKeyWord={setKeyword} modes={modes} />
        </FadeIn>

        <FadeIn delay={0.4}>
          <CipherIO
            mode={mode}
            input={input}
            setInput={setInput}
            output={output}
          />
        </FadeIn>

        {keyword && (
          <FadeIn delay={0.5}>
            <div className="bg-surface border border-rw/15 rounded-lg p-5 mt-6">
              <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
                Keyword Grid
              </p>
              <div className="grid grid-cols-5 gap-2 max-w-[200px]">
                {grid.map((letter, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center w-8 h-8 rounded text-xs font-bold border ${keyword.toUpperCase().replace(/J/g, "I").includes(letter) ? "bg-rw text-white border-rw" : "bg-surface text-rw border-rw/20"}`}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Keyword letters are highlighted in redwood
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </PageWrapper>
  );
}

export default Playfair;
