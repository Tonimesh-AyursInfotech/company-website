import { useEffect, useState } from "react";

export default function useCounter(target, duration = 1500, shouldStart) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const increment = target / (duration / 16); // approx 60fps

    const animate = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animate();
  }, [target, duration, shouldStart]);

  return count;
}
