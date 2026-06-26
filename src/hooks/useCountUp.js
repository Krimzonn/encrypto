import { useState, useEffect } from "react";

export function useCountUp(target, duration = 1500, startOnMount = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOnMount) {
      return;
    }

    let startTime = null;
    const start = 0;

    function animate(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (target - start) + start));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [target, duration, startOnMount]);

  return count;
}
