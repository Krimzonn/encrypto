import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import caesarEncrypt, { caesarDecrypt } from "../ciphers/caesarCipher";
import ModesTab from "../components/ModesTab";
import CipherIO from "../components/CipherIO";
import BruteForce from "../components/BruteForce";
import PageWrapper from "../components/PageWrapper";
import FadeIn from "../components/FadeIn";
import ShiftSlider from "../components/ShiftSlider";
import AlphabetMap from "../components/AlphabetMap";
import BackButton from "../components/BackButton";

function Caesar() {
  const [mode, setMode] = useState("Encrypt");
  const [input, setInput] = useState("");
  const [shift, setShift] = useState(3);

  const output = useMemo(() => {
    if (!input) {
      return "";
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
      <PageWrapper>
        <Navbar />
        <div className="max-w-3xl mx-auto px-8 py-14">
          <BackButton to="/ciphers" />
          <FadeIn delay={0.1}>
            <p className="text-xs text-rw font-semibold tracking-widest uppercase mb-2">
              Caesar Cipher
            </p>

            <h1 className="text-3xl font-bold text-rw mb-10">
              Current Mode: <span className="text-gold">{mode}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ModesTab
              mode={mode}
              setMode={setMode}
              modes={["Encrypt", "Decrypt", "Brute Force"]}
            />
          </FadeIn>

          <FadeIn delay={0.3}>
            {mode !== "Brute Force" && (
              <CipherIO
                input={input}
                mode={mode}
                setInput={setInput}
                output={output}
              />
            )}

            {mode === "Brute Force" && (
              <>
                <div className="bg-surface border border-rw/15 rounded-lg p-5 m-6">
                  <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-3">
                    Ciphertext to crack
                  </p>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Paste your ciphertext here..."
                    rows={3}
                    className="w-full text-sm outline-none resize-none bg-transparent"
                  ></textarea>
                </div>
                <BruteForce input={input} />
              </>
            )}
          </FadeIn>

          {mode !== "Brute Force" && (
            <>
              <FadeIn delay={0.4}>
                <ShiftSlider shift={shift} setShift={setShift} />
              </FadeIn>
              <FadeIn delay={0.5}>
                <AlphabetMap shift={shift} />
              </FadeIn>
            </>
          )}
        </div>
      </PageWrapper>
    </>
  );
}

export default Caesar;
