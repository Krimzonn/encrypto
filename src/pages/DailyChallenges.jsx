import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import FadeIn from "../components/FadeIn";
import BackButton from "../components/BackButton";
import { useDailyChallenge } from "../hooks/useDailyChallenge";
import { motion, AnimatePresence } from "framer-motion";

function DailyChallenges() {
  const {
    challenge,
    solved,
    streak,
    userInput,
    setUserInput,
    attempts,
    showHint,
    isWrong,
    checkAnswer,
  } = useDailyChallenge();

  function handleSubmit(e) {
    e.preventDefault();
    checkAnswer();
  }

  return (
    <PageWrapper>
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <BackButton to="/" />

        <FadeIn delay={0.1}>
          <p className="text-xs text-rw font-semibold tracking-widest uppercase mb-2">
            Daily Challenge
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-rw mb-2">
            {challenge.date}
          </h1>
          <p className="text-xs text-gray-400 mb-8">
            A new Cipher Challenge everyday. Crack the code to keep your streak
            alive.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gold-pale border border-gold/30 rounded-lg px-4 py-2 items-center gap-2">
              <span className="text-lg font-bold text-gold">🔥 {streak}</span>
              <span className="text-xs text-gold/70"> day streak</span>
            </div>
          </div>
        </FadeIn>

        {solved ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-surface border border-rw/15 rounded-lg p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 300,
              }}
              className="text-4xl mb-4"
            >
              ✓
            </motion.div>
            <p className="text-lg font-bold text-rw mb-2">Challenge solved!</p>
            <p className="text-sm text-gray-500 mb-1">
              You decoded:
              <span className="text-gold font-semibold">
                {challenge.answer}
              </span>
            </p>
            <p className="text-xs text-gray-400">
              Cipher used: {challenge.cipher}
              {challenge.key ? ` (key: ${challenge.key})` : ""}
            </p>
            <p className="text-xs text-gray-400 mt-4">
              Come back tomorrow for a new challenge.
            </p>
          </motion.div>
        ) : (
          <FadeIn delay={0.3}>
            <div className="bg-surface border border-rw/15 rounded-lg p-6 mb-6">
              <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-3">
                Ciphertext
              </p>
              <p className="text-lg text-gold font-semibold break-all">
                {challenge.ciphertext}
              </p>
            </div>

            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gold-pale border border-gold/30 rounded-lg p-4 mb-6 overflow-hidden"
                >
                  <p className="text-xs text-gold/80">
                    💡 Hint: {challenge.hint} ({challenge.cipher})
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit}>
              <motion.input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type the decoded message..."
                animate={isWrong ? { x: [0, -8, 8, -8, 8, 0] } : {}}
                transition={{ duration: 0.4 }}
                className={`w-full text-sm bg-surface border rounded-lg px-4 py-3 outline-none transition-colors mb-3
                  ${isWrong ? "border-red-400" : "border-rw/15 focus:border-rw/40"}
                  dark:text-gray-600 dark:placeholder:text-gray-300`}
              />
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-rw text-white text-xs font-semibold tracking-widest uppercase px-6 py-2.5 rounded-md cursor-pointer hover:bg-rw/90 transition-colors"
                >
                  Submit
                </button>
                {attempts > 0 && !showHint && (
                  <p className="text-xs text-gray-400">
                    {attempts} attempt{attempts > 1 ? "s" : ""} — hint unlocks
                    at 2
                  </p>
                )}
              </div>
            </form>
          </FadeIn>
        )}
      </div>
    </PageWrapper>
  );
}

export default DailyChallenges;
