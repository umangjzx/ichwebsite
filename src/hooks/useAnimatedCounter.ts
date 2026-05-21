import { useState, useEffect, useRef, useCallback } from 'react';

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
  const isAnimatingRef = useRef(false);
  const hasAnimatedRef = useRef(false);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const startAnimation = useCallback(() => {
    // Prevent re-triggering if already animated or currently animating
    if (isAnimatingRef.current || hasAnimatedRef.current) return;
    isAnimatingRef.current = true;
    startTimeRef.current = 0;

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
        isAnimatingRef.current = false;
        hasAnimatedRef.current = true;
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  }, [end, duration, start, easing]);

  const reset = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    setCount(start);
    isAnimatingRef.current = false;
    hasAnimatedRef.current = false;
    startTimeRef.current = 0;
  }, [start]);

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return { count, startAnimation, reset };
};
