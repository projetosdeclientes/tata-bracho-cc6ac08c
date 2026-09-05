import { cn } from "@/lib/utils";

/**
 * Fundos visuais proprietários, feitos em SVG + CSS (sem imagens, sem canvas).
 * Todos usam exclusivamente a paleta oficial e movimento muito lento.
 */

/** Silhueta abstrata de Minas Gerais, simplificada e integrada às curvas. */
const MINAS_PATH =
  "M262 96 L318 82 L372 96 L404 78 L452 96 L486 132 L520 150 L536 196 L512 236 L520 276 L486 300 L470 344 L426 366 L398 404 L352 420 L308 402 L268 420 L236 392 L196 384 L166 350 L128 336 L104 300 L118 258 L96 220 L124 178 L164 158 L196 120 L228 112 Z";

/**
 * Hero: campo topográfico com curvas de nível, nós, partículas e a forma
 * abstrata de Minas Gerais embutida no relevo. Centro mantido limpo.
 */
export function TopographicField({ className }: { className?: string }) {
  const curvas = Array.from({ length: 16 }, (_, i) => i);

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="topo-svg absolute inset-0 h-full w-full [mask-image:radial-gradient(circle_at_50%_46%,transparent_0%,rgba(0,0,0,0.6)_24%,#000_54%)]"
      >
        <defs>
          <linearGradient id="topo-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#012EA0" />
            <stop offset="55%" stopColor="#0443CA" />
            <stop offset="100%" stopColor="#1880EE" />
          </linearGradient>
          <filter id="topo-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path
            id="topo-flow"
            d="M-60 620 C 240 520 420 700 720 560 C 980 440 1160 560 1500 430"
            fill="none"
          />
        </defs>

        <g>
          {/* Curvas de nível: espessuras e opacidades variadas, deriva lenta. */}
          <g className="topo-drift" stroke="url(#topo-line)" fill="none">
            {curvas.map((i) => {
              const y = 120 + i * 48;
              const amp = 34 + (i % 5) * 16;
              return (
                <path
                  key={i}
                  d={`M-80 ${y} C ${220} ${y - amp} ${420} ${y + amp} ${720} ${y - amp / 2} S ${1180} ${y + amp} ${1520} ${y - amp / 3}`}
                  strokeWidth={i % 4 === 0 ? 2.2 : i % 3 === 0 ? 1.4 : 0.9}
                  opacity={0.3 + ((i * 37) % 9) * 0.07}
                />
              );
            })}
          </g>

          {/* Relevo denso à esquerda e à direita (alta densidade). */}
          <g stroke="#0443CA" fill="none" opacity="0.9" className="topo-drift-slow">
            {Array.from({ length: 9 }, (_, i) => (
              <ellipse
                key={i}
                cx={170}
                cy={470}
                rx={70 + i * 34}
                ry={40 + i * 20}
                strokeWidth={i % 3 === 0 ? 1.8 : 0.8}
                opacity={0.7 - i * 0.05}
              />
            ))}
            {Array.from({ length: 8 }, (_, i) => (
              <ellipse
                key={`d-${i}`}
                cx={1290}
                cy={300}
                rx={60 + i * 40}
                ry={34 + i * 24}
                strokeWidth={i % 3 === 0 ? 1.8 : 0.8}
                opacity={0.65 - i * 0.05}
              />
            ))}
          </g>

          {/* Minas Gerais, integrada como mais uma camada de relevo. */}
          <g transform="translate(520 210) scale(0.86)"><g className="topo-minas">
            <path d={MINAS_PATH} fill="#021E70" opacity="0.55" />
            <path d={MINAS_PATH} fill="none" stroke="#1880EE" strokeWidth="2" opacity="0.75" />
            <path d={MINAS_PATH} fill="none" stroke="#0443CA" strokeWidth="0.7" opacity="0.5" transform="scale(0.92) translate(28 22)" />
            <path d={MINAS_PATH} fill="none" stroke="#012EA0" strokeWidth="0.7" opacity="0.45" transform="scale(1.08) translate(-24 -20)" />
          </g></g>

          {/* Nós conectando regiões. */}
          <g stroke="#1880EE" strokeWidth="1" opacity="0.55">
            <path d="M210 470 L560 350 L900 430 L1250 300" fill="none" />
            <path d="M560 350 L640 620 L980 660" fill="none" />
          </g>
          <g fill="#1880EE" filter="url(#topo-glow)">
            {[
              [210, 470],
              [560, 350],
              [900, 430],
              [1250, 300],
              [640, 620],
              [980, 660],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={i % 2 ? 2.6 : 3.4} className="topo-pulse" style={{ animationDelay: `${i * 1.3}s` }} />
            ))}
          </g>

          {/* Pontos luminosos discretos. */}
          <g fill="#EFEFF3">
            {Array.from({ length: 26 }, (_, i) => {
              const cx = (i * 137) % 1400 + 20;
              const cy = (i * 311) % 860 + 20;
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={i % 5 === 0 ? 1.6 : 1}
                  opacity={0.18 + (i % 4) * 0.08}
                  className="topo-pulse"
                  style={{ animationDelay: `${(i % 7) * 1.1}s` }}
                />
              );
            })}
          </g>

          {/* Partículas percorrendo uma linha. */}
          <g fill="#1880EE">
            {[0, 1, 2].map((i) => (
              <circle key={i} r={2.4} opacity="0.85">
                <animateMotion dur="26s" begin={`${i * 8}s`} repeatCount="indefinite" rotate="auto">
                  <mpath href="#topo-flow" />
                </animateMotion>
              </circle>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}

/** Eixo Saúde: linha de pulso contínua, círculos translúcidos e ondas. */
export function PulseField({ className }: { className?: string }) {
  const pulso =
    "M-40 300 H 240 l 26 -66 l 30 132 l 26 -96 l 24 30 H 640 l 30 -80 l 28 150 l 26 -70 H 1040 l 24 -54 l 28 108 l 26 -54 H 1500";

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(120%_80%_at_50%_50%,rgba(0,0,0,0.35)_0%,#000_60%)]"
      >
        <defs>
          <filter id="pulse-glow" x="-30%" y="-60%" width="160%" height="220%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="pulse-fade" x1="0" x2="1">
            <stop offset="0%" stopColor="#011555" />
            <stop offset="12%" stopColor="#EFEFF3" />
            <stop offset="88%" stopColor="#EFEFF3" />
            <stop offset="100%" stopColor="#011555" />
          </linearGradient>
          <mask id="pulse-mask">
            <rect width="1440" height="600" fill="url(#pulse-fade)" />
          </mask>
        </defs>

        {/* Círculos translúcidos, expansão quase imperceptível. */}
        <g fill="none" stroke="#012EA0">
          {[
            [250, 210, 150],
            [1130, 380, 190],
            [720, 120, 110],
          ].map((coords, i) => {
            const [cx, cy, r] = coords as [number, number, number];
            return (
            <g key={i} className="pulse-breathe" style={{ animationDelay: `${i * 3}s`, transformOrigin: `${cx}px ${cy}px` }}>
              <circle cx={cx} cy={cy} r={r} strokeWidth="1" opacity="0.35" />
              <circle cx={cx} cy={cy} r={r * 0.62} strokeWidth="0.6" opacity="0.28" />
              <circle cx={cx} cy={cy} r={r * 1.35} strokeWidth="0.5" opacity="0.18" />
            </g>
            );
          })}
        </g>

        {/* Ondas auxiliares. */}
        <g fill="none" stroke="#0443CA" opacity="0.28" className="topo-drift-slow">
          <path d="M-40 430 C 260 360 480 490 760 420 C 1020 356 1220 470 1520 400" strokeWidth="0.8" />
          <path d="M-40 480 C 280 410 500 540 780 470 C 1040 406 1240 520 1540 450" strokeWidth="0.5" />
        </g>

        {/* Camada que engole parte da linha (a linha some atrás dela). */}
        <g mask="url(#pulse-mask)">
          <path d={pulso} fill="none" stroke="#1880EE" strokeWidth="2" filter="url(#pulse-glow)" className="pulse-trace" />
          <path d={pulso} fill="none" stroke="#0443CA" strokeWidth="0.8" opacity="0.5" />
        </g>
        {/* Camadas que engolem trechos da linha, criando profundidade. */}
        <ellipse cx="470" cy="300" rx="200" ry="260" fill="#011555" opacity="0.5" />
        <ellipse cx="980" cy="330" rx="180" ry="240" fill="#021E70" opacity="0.4" />
      </svg>
    </div>
  );
}

/** Eixo Bolso: fluxos que convergem e se dividem, com nós e partículas. */
export function FlowField({ className }: { className?: string }) {
  const fluxos = [
    "M-60 120 C 320 160 460 300 760 300 C 1020 300 1180 200 1520 230",
    "M-60 300 C 300 300 480 300 760 300 C 1040 300 1220 400 1520 380",
    "M-60 480 C 340 460 500 320 760 300 C 1020 280 1200 120 1520 90",
    "M-60 560 C 380 520 620 480 900 420 C 1140 370 1300 420 1520 470",
    "M-60 40 C 260 60 520 120 780 180 C 1060 244 1260 300 1520 300",
  ];

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(120%_80%_at_50%_50%,rgba(0,0,0,0.4)_0%,#000_60%)]"
      >
        <defs>
          <linearGradient id="flow-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#012EA0" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#0443CA" />
            <stop offset="100%" stopColor="#012EA0" stopOpacity="0.15" />
          </linearGradient>
          <filter id="flow-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {fluxos.map((d, i) => (
            <path key={i} id={`flow-${i}`} d={d} fill="none" />
          ))}
        </defs>

        <g className="topo-drift-slow">
          {fluxos.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="url(#flow-line)"
              strokeWidth={i % 2 === 0 ? 1.4 : 0.7}
              opacity={0.55 - i * 0.05}
            />
          ))}
        </g>

        {/* Baixa densidade atrás do conteúdo. */}
        <ellipse cx="720" cy="300" rx="470" ry="200" fill="#011555" opacity="0.45" />

        <g fill="#1880EE" filter="url(#flow-glow)">
          {[
            [760, 300],
            [240, 250],
            [1180, 210],
            [980, 400],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i === 0 ? 4 : 2.6} className="topo-pulse" style={{ animationDelay: `${i * 1.7}s` }} />
          ))}
        </g>

        <g>
          {fluxos.map((_, i) => (
            <circle key={i} r={i % 2 ? 1.8 : 2.6} fill={i === 2 ? "#EFEFF3" : "#1880EE"} opacity="0.9">
              <animateMotion dur={`${22 + i * 5}s`} begin={`${i * 4}s`} repeatCount="indefinite">
                <mpath href={`#flow-${i}`} />
              </animateMotion>
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
}
