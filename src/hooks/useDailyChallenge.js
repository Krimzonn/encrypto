import { useState, useEffect } from "react";
import { getTodaysChallenge } from "../utils/challengeData";

export function useDailyChallenge() {
  const challenge = getTodaysChallenge();

  const [solved, setSolved] = useState(() => {
    const saved = localStorage.getItem("daily_solved_date");
    return saved === challenge.date;
  });

  const [streak, setStreak] = useState(() => {
    return parseInt(localStorage.getItem("daily_streak") || "0");
  });

  const [userInput, setUserInput] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    const lastSolved = localStorage.getItem("daily_solved_date");
    if (!lastSolved) {
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (
      lastSolved !== yesterday.toDateString() &&
      lastSolved !== challenge.date
    ) {
      setStreak(0);
      localStorage.setItem("daily_streak", "0");
    }
  }, []);

  function checkAnswer() {
    const clean = userInput.trim().toUpperCase();
    const answer = challenge.answer.trim().toUpperCase();

    if (clean === answer) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setIsWrong(false);
      setSolved(true);
      localStorage.setItem("daily_solved_date", challenge.date);
      localStorage.setItem("daily_streak", String(newStreak));
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setIsWrong(true);

      if (newAttempts >= 2) {
        setShowHint(true);
      }

      setTimeout(() => setIsWrong(false), 1000);
    }
  }

  return {
    challenge,
    solved,
    streak,
    userInput,
    attempts,
    showHint,
    isWrong,
    checkAnswer,
    setUserInput,
  };
}
