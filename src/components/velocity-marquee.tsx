import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface VelocityMarqueeProps {
  /** Itens repetidos na faixa. */
  itens: string[];
  /** Velocidade base em pixels por segundo. Negativa inverte a direção. */
  velocidade?: number;
  className?: string;
  itemClassName?: string;
}

/**
 * Marquee em perspectiva 3D (adaptação do PerspectiveMarquee do 21st.dev,
 * originalmente feito para Remotion/vídeo, portado para requestAnimationFrame).
 * Rotação rotateY/rotateX, desfoque e opacidade por distância do centro,
 * fades nas bordas e leve reação à rolagem, sem travar o scroll.
 */
export function VelocityMarquee({ itens, velocidade = 60, className, itemClassName }: VelocityMarqueeProps) {
  const trilhoRef = useRef<HTMLDivElement | null>(null);
  const itensRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const trilho = trilhoRef.current;
    if (!trilho || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let deslocamento = 0;
    let ultimoTempo = performance.now();
    let frame = 0;

    const passo = (tempo: number) => {
      const dt = Math.min(0.05, (tempo - ultimoTempo) / 1000);
      ultimoTempo = tempo;

      const largura = trilho.scrollWidth / 3 || 1;
      deslocamento -= velocidade * dt;
      if (deslocamento <= -largura) deslocamento += largura;
      if (deslocamento > 0) deslocamento -= largura;

      trilho.style.transform = `translate3d(${deslocamento.toFixed(2)}px, 0, 0)`;

      // Desfoque e opacidade conforme a distância do centro da viewport.
      const centro = window.innerWidth / 2;
      for (const el of itensRef.current) {
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const distancia = Math.min(1, Math.abs(rect.left + rect.width / 2 - centro) / centro);
        el.style.filter = `blur(${(distancia * 5).toFixed(2)}px)`;
        el.style.opacity = String(1 - distancia * 0.45);
      }

      frame = window.requestAnimationFrame(passo);
    };

    frame = window.requestAnimationFrame(passo);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [velocidade]);

  const sequencia = [...itens, ...itens, ...itens];
  itensRef.current = [];

  return (
    <div
      aria-hidden="true"
      className={cn("relative w-full overflow-hidden", className)}
      style={{ perspective: "1200px" }}
    >
      <div
        className="flex w-full items-center"
        style={{ transform: "rotateX(8deg) rotateY(-16deg)", transformStyle: "preserve-3d" }}
      >
        <div ref={trilhoRef} className="flex w-max items-center whitespace-nowrap will-change-transform">
          {sequencia.map((item, i) => (
            <span
              key={`${item}-${i}`}
              ref={(el) => {
                if (el) itensRef.current.push(el);
              }}
              className={cn(
                "flex shrink-0 items-center gap-10 pr-10 font-bold tracking-tight",
                itemClassName,
              )}
            >
              <span>{item}</span>
              <span className="text-[0.5em] leading-none opacity-50">◆</span>
            </span>
          ))}
        </div>
      </div>
      {/* Fades nas bordas horizontais e verticais, como no componente original. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--fade-color) 0%, transparent 18%, transparent 82%, var(--fade-color) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--fade-color) 0%, transparent 25%, transparent 75%, var(--fade-color) 100%)",
        }}
      />
    </div>
  );
}
