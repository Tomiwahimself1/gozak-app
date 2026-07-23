import React, { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(node);
        }
      },
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export function Reveal({ children, delay = 0, scale = false, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`${scale ? "reveal-scale" : "reveal"} ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Counter({ target, suffix = "", duration = 1600 }) {
  const [ref, inView] = useInView(0.4);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setVal(target);
    }
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}
