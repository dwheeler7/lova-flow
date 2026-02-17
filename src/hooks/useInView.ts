import { useEffect, useState, type RefObject } from "react";

interface UseInViewOptions {
  once?: boolean;
  threshold?: number;
}

export function useInView(
  ref: RefObject<Element | null>,
  { once = true, threshold = 0.2 }: UseInViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, once, threshold]);

  return isInView;
}
