import { useState, useEffect, useRef } from 'react';

interface UseAnimatedCounterOptions {
  end: number;
  duration?: number;
  start?: number;
  easing?: (t: number) => number;
}

export const useAnimatedCounter = ({
  end,
  duration = 2000,
  start = 0,
  easing = (t) => t * (2 - t), // easeOutQuad
}: UseAnimatedCounterOptions) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
    const easedProgress = easing(progress);
    const currentCount = Math.floor(start + (end - start) * easedProgress);

    setCount(currentCount);

    if (progress < 1) {
      frameRef.current = requestAnimationFrame(animate);
    } else {
      setCount(end);
      setIsAnimating(false);
    }
  };

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    startTimeRef.current = 0;
    frameRef.current = requestAnimationFrame(animate);
  };

  const reset = () => {
    cancelAnimationFrame(frameRef.current);
    setCount(start);
    setIsAnimating(false);
    startTimeRef.current = 0;
  };

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return { count, isAnimating, startAnimation, reset };
};
