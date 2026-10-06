"use client";

import { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({ endValue }: { endValue: string | number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    // Parse the numeric part from the string (e.g., "25+" -> 25)
    const strVal = endValue.toString();
    const end = parseInt(strVal.replace(/[^0-9.]/g, ""), 10);
    const suffix = strVal.replace(/[0-9.]/g, "");

    if (isNaN(end)) {
      setCount(0);
      return;
    }

    let observer: IntersectionObserver;
    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.ceil(start));
              }
            }, 16);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
    }
    
    return () => {
      if (observer) observer.disconnect();
    };
  }, [endValue]);

  // Extract the suffix if the original endValue had it, so it animates cleanly and appends the '+'
  const suffix = endValue.toString().replace(/[0-9.]/g, "");
  return <span ref={ref}>{count}{suffix}</span>;
}
