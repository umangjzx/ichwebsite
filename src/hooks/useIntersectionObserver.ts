import { useState, useEffect, useRef, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  _options: UseIntersectionObserverOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = _options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const callbackRef = useRef<IntersectionObserverCallback>((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce && elementRef.current) {
          observerRef.current?.unobserve(elementRef.current);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    });
  });

  const observerRef = useRef<IntersectionObserver>(
    new IntersectionObserver(callbackRef.current, {
      threshold,
      rootMargin,
    })
  );

  useEffect(() => {
    const currentElement = elementRef.current;
    const currentObserver = observerRef.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, []);

  return { isVisible, elementRef };
};

export const useInView = (_options?: UseIntersectionObserverOptions) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const visible = rect.top < window.innerHeight && rect.bottom > 0;
    setIsInView(visible);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { isInView, ref };
};
