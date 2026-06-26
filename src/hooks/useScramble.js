import { useState, useEffect } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export function useScramble(text, duration = 1500) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let frame = 0;
    const totalFrames = duration / 16;

    function animate() {
      frame++;
      const progress = frame / totalFrames;

      const result = text
        .split("")
        .map((char, i) => {
          if (char === " ") {
            return " ";
          }

          if (i < Math.floor(progress * text.length)) {
            return char;
          }

          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayed(result);

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        setDisplayed(text);
      }
    }

    requestAnimationFrame(animate);
  }, [text, duration]);

  return displayed;
}
