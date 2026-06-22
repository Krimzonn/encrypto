import Navbar from "../components/Navbar";
import CipherCard from "../components/CipherCard";
import PageWrapper from "../components/PageWrapper";
import FadeIn from "../components/FadeIn";

const ciphers = [
  {
    name: "Caesar Cipher",
    description:
      "Shifts every letter by a fixed number. One of the oldest and simpler techniques known",
    difficulty: "Beginner",
    to: "/cipher/caesar",
  },
  {
    name: "Atbash Cipher",
    description:
      "A reverse cipher where the alphabet is reversed; A becomes Z, B becomes Y, and so on.",
    difficulty: "Beginner",
    to: "/cipher/atbash",
  },
  {
    name: "Vigenère Cipher",
    description:
      "A polyalphabetic substitution cipher using a keyword to shift letters in the plaintext.",
    difficulty: "Intermediate",
    to: "/cipher/vigenere",
  },
  {
    name: "Rail Fence",
    description:
      "Writes your message in a zigzag pattern across rails then reads off row by row. A classic transposition cipher.",
    difficulty: "Beginner",
    to: "/cipher/railfence",
  },
  {
    name: "XOR Cipher",
    description:
      "Applies a bitwise XOR operation between your message and a key. A building block of modern encryption.",
    difficulty: "Intermediate",
    to: "/cipher/xor",
  },
  {
    name: "Base64",
    description:
      "Encodes binary data as readable ASCII text. Not a cipher but seen everywhere e.g JWT tokens, image encoding, APIs.",
    difficulty: "Beginner",
    to: "/cipher/base64",
  },
];

function CipherSelect() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <div className="max-w-4xl mx-auto px-8 py-16">
          <FadeIn delay={0.1}>
            <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-2">
              Cipher Library
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-3xl font-bold text-rw mb-10">
              Choose a <span className="text-gold">cipher</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ciphers.map((cipher) => (
                <CipherCard key={cipher.name} {...cipher} />
              ))}
            </div>
          </FadeIn>
        </div>
      </PageWrapper>
    </>
  );
}

export default CipherSelect;
