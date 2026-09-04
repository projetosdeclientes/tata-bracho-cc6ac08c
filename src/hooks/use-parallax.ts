import { useEffect, useRef, useState } from "react";

/**
 * Parallax natural, dirigido apenas pela posição real de rolagem.
 * Não sequestra o scroll, não trava nem cria etapas fixas: apenas traduz
 * o progresso do elemento na viewport em um deslocamento vertical suave.
 *
 * @param velocidade Deslocamento máximo em pixels (positivo desce, negativo sobe).
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(velocidade = 60) {
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === "undefined") return;
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduzido.matches) return;

    let frame = 0;

    const calcular = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const alturaViewport = window.innerHeight || 1;
      // Progresso de -1 (abaixo da viewport) a 1 (acima da viewport).
      const progresso = (rect.top + rect.height / 2 - alturaViewport / 2) / (alturaViewport / 2 + rect.height / 2);
      const limitado = Math.max(-1, Math.min(1, progresso));
      setOffset(limitado * velocidade);
    };

    const agendar = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(calcular);
    };

    calcular();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
    };
  }, [velocidade]);

  return {
    ref,
    style: { transform: `translate3d(0, ${offset.toFixed(2)}px, 0)`, willChange: "transform" } as const,
  };
}

/**
 * Progresso de rolagem de um container no estilo 21st.dev ("start end" -> "end start"):
 * 0 quando o topo do container encosta na base da viewport, 1 quando a base
 * do container sai pelo topo. Dirigido apenas pelo scroll real, via rAF.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === "undefined") return;
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduzido.matches) return;

    let frame = 0;

    const calcular = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const alturaViewport = window.innerHeight || 1;
      const bruto = (alturaViewport - rect.top) / (alturaViewport + rect.height);
      setProgress(Math.max(0, Math.min(1, bruto)));
    };

    const agendar = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(calcular);
    };

    calcular();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
    };
  }, []);

  return { ref, progress };
}
