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
 * Faixa infinita cuja velocidade reage à rolagem da página.
 * Movimento contínuo por requestAnimationFrame, sem travar o scroll do usuário.
 */
export function VelocityMarquee({ itens, velocidade = 70, className, itemClassName }: VelocityMarqueeProps) {
  const trilhoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const trilho = trilhoRef.current;
    if (!trilho || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let deslocamento = 0;
    let ultimoTempo = performance.now();
    let ultimoScroll = window.scrollY;
    let impulso = 0;
    let frame = 0;

    const aoRolar = () => {
      const atual = window.scrollY;
      const delta = atual - ultimoScroll;
      ultimoScroll = atual;
      // Acumula um impulso limitado para evitar saltos bruscos.
      impulso = Math.max(-40, Math.min(40, impulso + delta * 0.6));
    };

    const passo = (tempo: number) => {
      const dt = Math.min(0.05, (tempo - ultimoTempo) / 1000);
      ultimoTempo = tempo;
      impulso *= 0.92;

      const largura = trilho.scrollWidth / 2 || 1;
      deslocamento -= (velocidade + impulso * 8) * dt;
      // Mantém o deslocamento dentro de um ciclo da metade duplicada.
      if (deslocamento <= -largura) deslocamento += largura;
      if (deslocamento > 0) deslocamento -= largura;

      trilho.style.transform = `translate3d(${deslocamento.toFixed(2)}px, 0, 0)`;
      frame = window.requestAnimationFrame(passo);
    };

    frame = window.requestAnimationFrame(passo);
    window.addEventListener("scroll", aoRolar, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", aoRolar);
    };
  }, [velocidade]);

  const sequencia = [...itens, ...itens];

  return (
    <div aria-hidden="true" className={cn("w-full overflow-hidden", className)}>
      <div ref={trilhoRef} className="flex w-max items-center gap-10 will-change-transform">
        {sequencia.map((item, i) => (
          <span key={`${item}-${i}`} className={cn("flex shrink-0 items-center gap-10", itemClassName)}>
            <span>{item}</span>
            <span className="text-electric/50 text-2xl leading-none">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
