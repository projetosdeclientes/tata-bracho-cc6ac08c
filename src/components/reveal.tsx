import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface RevealProps {
  children: ReactNode;
  /** Atraso da entrada, em milissegundos. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}

/**
 * Entrada suave por interseção. Respeita prefers-reduced-motion pelo CSS global.
 */
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(visible ? "animate-reveal" : "opacity-0", className)}
    >
      {children}
    </Tag>
  );
}
