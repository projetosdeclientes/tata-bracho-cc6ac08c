import { useEffect, useRef } from "react";

/**
 * Parallax em camadas no estilo 21st.dev/Osmo: cada elemento marcado com
 * `data-parallax-layer="1..4"` dentro do container recebe um deslocamento
 * diferente conforme o scroll real, criando profundidade visível.
 *
 * GSAP e ScrollTrigger são carregados apenas no navegador (SSR seguro) e
 * a animação é desligada quando o usuário pede menos movimento.
 */
export function useParallaxLayers<T extends HTMLElement = HTMLDivElement>(
  camadas: { layer: string; yPercent: number; mobileYPercent?: number }[],
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let cancelado = false;

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelado) return;

      gsap.registerPlugin(ScrollTrigger);

      const contexto = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: node,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        camadas.forEach((camada, idx) => {
          const alvos = node.querySelectorAll(`[data-parallax-layer="${camada.layer}"]`);
          if (!alvos.length) return;
          const deslocamento = window.matchMedia("(max-width: 767px)").matches
            ? (camada.mobileYPercent ?? camada.yPercent)
            : camada.yPercent;
          tl.fromTo(
            alvos,
            { yPercent: -deslocamento / 2 },
            { yPercent: deslocamento / 2, ease: "none" },
            idx === 0 ? undefined : "<",
          );
        });
      }, node);

      cleanup = () => contexto.revert();
    })();

    return () => {
      cancelado = true;
      cleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
