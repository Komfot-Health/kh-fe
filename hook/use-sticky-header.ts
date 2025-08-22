'use client';

import { useEffect, useState } from "react";

export function useStickyHeader(threshold: number = 0) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const target = document.querySelector(".trust");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return isSticky;
}
