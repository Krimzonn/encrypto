import Navbar from "../components/Navbar";
import CipherCard from "../components/CipherCard";

const ciphers = [
  {
    name: "Caesar Cipher",
    desc: "Shifts every letter by a fixed number. One of the oldest and simpler techniques known",
    difficulty: "Beginner",
    to: "/cipher/caesar",
  },
];

function CipherSelect() {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 py-16">
        <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-2">
          Cipher Library
        </p>
        <h1 className="text-3xl font-bold text-rw mb-10">
          Choose a <span className="text-gold">cipher</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ciphers.map((cipher) => (
            <CipherCard key={cipher.name} {...cipher} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CipherSelect;
