import { cn } from "@/lib/utils";

/** Onda de separação entre seções. Puramente decorativa. */
export function WaveDivider({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none w-full leading-[0]", className)}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={cn("h-16 w-full sm:h-24", flip && "rotate-180")}
      >
        <path
          d="M0,64 C240,120 420,8 720,44 C1010,78 1200,120 1440,72 L1440,120 L0,120 Z"
          fill="currentColor"
          opacity="0.9"
        />
        <path
          d="M0,88 C260,132 460,36 760,68 C1040,98 1230,132 1440,96 L1440,120 L0,120 Z"
          fill="currentColor"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}

/** Camadas de luz e curvas usadas nos fundos profundos. */
export function AuroraLayer({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="animate-drift absolute -top-40 -left-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--electric)_38%,transparent),transparent_68%)] blur-2xl" />
      <div className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--vivid)_42%,transparent),transparent_70%)] blur-3xl" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.28]" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M-50,620 C260,470 520,700 820,520 C1010,405 1120,470 1260,400" />
          <path d="M-50,680 C280,540 540,760 840,580 C1030,465 1140,530 1280,460" />
          <path d="M-50,540 C240,410 500,630 800,450 C990,335 1100,400 1240,330" />
        </g>
      </svg>
    </div>
  );
}

/** Marcador numérico editorial. */
export function BigNumeral({ value, className }: { value: string; className?: string }) {
  return (
    <span aria-hidden="true" className={cn("numeral block text-electric/25 leading-none", className)}>
      {value}
    </span>
  );
}
