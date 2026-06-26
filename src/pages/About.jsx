import { useState } from "react";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import ScrollFadeIn from "../components/ScrollFadeIn";
import { useScramble } from "../hooks/useScramble";
import { useCountUp } from "../hooks/useCountUp";
import { AnimatePresence, motion } from "framer-motion";

const ciphers = [
  {
    name: "Caesar",
    difficulty: "Beginner",
    history:
      "Used by Julius Caesar to protect military messages around 58 BC. One of the earliest known encryption techniques.",
  },
  {
    name: "Atbash",
    difficulty: "Beginner",
    history:
      "Originally used to encode Hebrew scripture. Mirrors the alphabet so A becomes Z and Z becomes A.",
  },
  {
    name: "Vigenère",
    difficulty: "Intermediate",
    history:
      'Called "le chiffre indéchiffrable" for 300 years. Uses a keyword to give each letter a different shift.',
  },
  {
    name: "Rail Fence",
    difficulty: "Beginner",
    history:
      "A transposition cipher used in the American Civil War. Writes text in a zigzag pattern across rails.",
  },
  {
    name: "XOR",
    difficulty: "Intermediate",
    history:
      "The foundation of modern symmetric encryption. Used inside AES, stream ciphers, and one-time pads.",
  },
  {
    name: "Base64",
    difficulty: "Beginner",
    history:
      "Not a cipher but seen everywhere — JWT tokens, image encoding, email attachments, API responses.",
  },
  {
    name: "Playfair",
    difficulty: "Intermediate",
    history:
      "Used by British forces in World War I and II. Encrypts pairs of letters using a 5×5 keyword grid.",
  },
  {
    name: "Columnar",
    difficulty: "Intermediate",
    history:
      "Used by the Germans in World War I. Rearranges text columns based on alphabetical keyword order.",
  },
  {
    name: "Affine",
    difficulty: "Intermediate",
    history:
      "A mathematical cipher combining multiplication and addition. Generalizes both Caesar and Atbash.",
  },
];

const tech = [
  {
    name: "React + Vite",
    desc: "Component-based UI with lightning fast dev server and build tooling.",
  },
  {
    name: "Tailwind CSS",
    desc: "Utility-first styling with custom design tokens for the redwood/gold theme.",
  },
  {
    name: "Framer Motion",
    desc: "Animations — page transitions, stagger effects, and scroll-triggered reveals.",
  },
  {
    name: "React Router",
    desc: "Client-side routing between pages with animated page transitions.",
  },
];

function StatCard({ target, label, isText }) {
  const count = useCountUp(isText ? 0 : target);

  return (
    <div className="bg-surface border border-rw/15 rounded-lg p-5 text-center">
      <div className="text-2xl font-bold text-gold mb-1">
        {isText ? target : count}
      </div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}

function CipherCard({ name, difficulty, history }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      onClick={() => setOpen((prev) => !prev)}
      className="bg-surface border border-rw/15 rounded-lg p-4 cursor-pointer"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="text-xs font-bold text-rw uppercase tracking-wide mb-1">
        {name}
      </div>
      <span className="text-xs text-gold border border-gold/30 bg-gold-pale px-2 py-0.5 rounded mb-2 inline-block">
        {difficulty}
      </span>
      <div className="text-xs text-rw/40">
        {open ? "▲ collapse" : "▼ expand"}
      </div>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="text-xs text-gray-500 leading-relaxed mt-3 pt-3 border-t border-rw/10 overflow-hidden"
          >
            {history}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function About() {
  const name = useScramble("Abdul Ahad");

  return (
    <PageWrapper>
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 py-14">
        <ScrollFadeIn>
          <p className="text-xs text-rw font-semibold tracking-widest uppercase mb-2">
            About
          </p>
          <h1 className="text-4xl font-bold text-rw mb-4">
            Hi, I'm <span className="text-gold">{name}</span>
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
            A Software Engineering student building Encrypto to explore
            cryptography, sharpen my React skills, and create something
            genuinely useful for the CTF community.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <div className="grid grid-cols-3 gap-4 mt-12 mb-12">
            <StatCard target={9} label="Ciphers" />
            <StatCard target={3} label="Weeks to build" />
            <StatCard target="Complete" label="Status" isText />
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="mb-12">
            <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
              Purpose
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Encrypto is an educational cipher playground built to make
              cryptography approachable. Whether you're a student, a CTF
              competitor, or just curious about how secret messages work then
              this is for you.
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="mb-12">
            <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
              The Ciphers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {ciphers.map((cipher, index) => (
                <motion.div
                  key={cipher.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <CipherCard {...cipher} />
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="mb-12">
            <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
              Built With
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-surface border border-rw/15 rounded-lg p-5"
                >
                  <p className="text-sm font-semibold text-rw mb-1">
                    {tech.name}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {tech.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="mb-12">
            <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-4">
              Who Built This
            </p>
            <div className="bg-surface border border-rw/15 rounded-lg p-6 flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-rw flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                AA
              </div>
              <div>
                <p className="text-sm font-semibold text-rw mb-1">Abdul Ahad</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  Software Engineering Student. Building projects to learn by
                  doing.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Krimzonn/encrypto"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gold hover:text-rw transition-colors"
                  >
                    Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abdul-ahad-0bbb94408/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gold hover:text-rw transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </PageWrapper>
  );
}

export default About;
