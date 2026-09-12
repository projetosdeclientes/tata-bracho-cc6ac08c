import { Link } from "@tanstack/react-router";
import { candidatura, links } from "@/data/candidatura";
import brasaoMinas from "@/assets/brasao-minas-gerais.png.asset.json";
import { WaveDivider } from "@/components/graphics";

const rotas = [
  { to: "/", label: "Início" },
  { to: "/sobre-mim", label: "Sobre mim" },
  { to: "/ideias-e-projetos", label: "Ideias & Projetos" },
  { to: "/comunidade", label: "Comunidade" },
] as const;

export function SiteFooter() {
  return (
    <footer className="surface-night relative">
      <WaveDivider className="text-ink -mt-px" />
      <div className="mx-auto max-w-7xl px-5 pt-2 pb-7 sm:px-8">
        <div className="grid gap-7 border-t border-border pt-7 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-black tracking-tight sm:text-3xl">Tatá Bracho</p>
            <p className="text-frost/70 mt-1 text-xs font-semibold">{candidatura.cargo}</p>
            <p className="numero-oficial mt-2 text-4xl leading-none sm:text-5xl">{candidatura.numero}</p>
            <p className="text-frost/55 mt-3 max-w-xs text-xs leading-relaxed">
              <span className="text-solidario font-bold">{candidatura.partido}</span> | {candidatura.federacao}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-3 space-y-1.5">
              {rotas.map((rota) => (
                <li key={rota.to}>
                  <Link to={rota.to} className="text-frost/75 hover:text-electric text-sm font-medium transition-colors">
                    {rota.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-start gap-5">
            <div className="flex-1">
              <p className="eyebrow">Institucional</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li>
                  <a
                    href={links.solidariedade}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-solidario font-bold transition-opacity hover:opacity-80"
                  >
                    Solidariedade
                  </a>
                </li>
                <li className="text-frost/55 text-xs leading-relaxed">{candidatura.nomeUrna}</li>
                <li className="text-frost/55 text-xs leading-relaxed">Candidatura em {candidatura.estado}</li>
              </ul>
            </div>
            <img
              src={brasaoMinas.url}
              alt="Brasão do Estado de Minas Gerais"
              width={112}
              height={108}
              loading="lazy"
              className="h-24 w-auto shrink-0 opacity-95 sm:h-28"
            />
          </div>
        </div>

        <div className="rule-line mt-6" />

        <p className="text-frost/50 mt-4 text-[0.68rem] leading-relaxed font-medium tracking-wide">
          {candidatura.identificacaoEleitoral}
        </p>
        <p className="text-frost/35 mt-2 text-[0.66rem] leading-relaxed">
          As propostas apresentadas neste site representam compromissos de atuação parlamentar caso eleita. Nenhuma
          delas descreve política pública já implementada ou resultado alcançado.
        </p>
        <p className="text-frost/30 mt-2 text-[0.62rem] leading-relaxed">
          Foto ilustrativa: Kaboompics, via Pexels.
        </p>
      </div>
    </footer>
  );
}
=======
              src={brasaoMinas.url}
const rotas = [
  { to: "/", label: "Início" },
  { to: "/sobre-mim", label: "Sobre mim" },
  { to: "/ideias-e-projetos", label: "Ideias & Projetos" },
  { to: "/comunidade", label: "Comunidade" },
] as const;

export function SiteFooter() {
  return (
    <footer className="surface-night relative">
      <WaveDivider className="text-ink -mt-px" />
      <div className="mx-auto max-w-7xl px-5 pt-2 pb-7 sm:px-8">
        <div className="grid gap-7 border-t border-border pt-7 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-black tracking-tight sm:text-3xl">Tatá Bracho</p>
            <p className="text-frost/70 mt-1 text-xs font-semibold">{candidatura.cargo}</p>
            <p className="numero-oficial mt-2 text-4xl leading-none sm:text-5xl">{candidatura.numero}</p>
            <p className="text-frost/55 mt-3 max-w-xs text-xs leading-relaxed">
              <span className="text-solidario font-bold">{candidatura.partido}</span> | {candidatura.federacao}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-3 space-y-1.5">
              {rotas.map((rota) => (
                <li key={rota.to}>
                  <Link to={rota.to} className="text-frost/75 hover:text-electric text-sm font-medium transition-colors">
                    {rota.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-start gap-5">
            <div className="flex-1">
              <p className="eyebrow">Institucional</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li>
                  <a
                    href={links.solidariedade}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-solidario font-bold transition-opacity hover:opacity-80"
                  >
                    Solidariedade
                  </a>
                </li>
                <li className="text-frost/55 text-xs leading-relaxed">{candidatura.nomeUrna}</li>
                <li className="text-frost/55 text-xs leading-relaxed">Candidatura em {candidatura.estado}</li>
              </ul>
            </div>
            <img
              src={brasaoMinasUrl}
              alt="Brasão do Estado de Minas Gerais"
              width={112}
              height={108}
              loading="lazy"
              className="h-24 w-auto shrink-0 opacity-95 sm:h-28"
            />
          </div>
        </div>

        <div className="rule-line mt-6" />

        <p className="text-frost/50 mt-4 text-[0.68rem] leading-relaxed font-medium tracking-wide">
          {candidatura.identificacaoEleitoral}
        </p>
        <p className="text-frost/35 mt-2 text-[0.66rem] leading-relaxed">
          As propostas apresentadas neste site representam compromissos de atuação parlamentar caso eleita. Nenhuma
          delas descreve política pública já implementada ou resultado alcançado.
        </p>
        <p className="text-frost/30 mt-2 text-[0.62rem] leading-relaxed">
          Foto ilustrativa: Kaboompics, via Pexels.
        </p>
      </div>
    </footer>
  );
}
=======
import { Link } from "@tanstack/react-router";
import { candidatura, links } from "@/data/candidatura";
import brasaoMinas from "@/assets/brasao-minas-gerais.png.asset.json";
import { WaveDivider } from "@/components/graphics";

const rotas = [
  { to: "/", label: "Início" },
  { to: "/sobre-mim", label: "Sobre mim" },
  { to: "/ideias-e-projetos", label: "Ideias & Projetos" },
  { to: "/comunidade", label: "Comunidade" },
] as const;

export function SiteFooter() {
  return (
    <footer className="surface-night relative">
      <WaveDivider className="text-ink -mt-px" />
      <div className="mx-auto max-w-7xl px-5 pt-2 pb-7 sm:px-8">
        <div className="grid gap-7 border-t border-border pt-7 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-black tracking-tight sm:text-3xl">Tatá Bracho</p>
            <p className="text-frost/70 mt-1 text-xs font-semibold">{candidatura.cargo}</p>
            <p className="numero-oficial mt-2 text-4xl leading-none sm:text-5xl">{candidatura.numero}</p>
            <p className="text-frost/55 mt-3 max-w-xs text-xs leading-relaxed">
              <span className="text-solidario font-bold">{candidatura.partido}</span> | {candidatura.federacao}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-3 space-y-1.5">
              {rotas.map((rota) => (
                <li key={rota.to}>
                  <Link to={rota.to} className="text-frost/75 hover:text-electric text-sm font-medium transition-colors">
                    {rota.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-start gap-5">
            <div className="flex-1">
              <p className="eyebrow">Institucional</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li>
                  <a
                    href={links.solidariedade}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-solidario font-bold transition-opacity hover:opacity-80"
                  >
                    Solidariedade
                  </a>
                </li>
                <li className="text-frost/55 text-xs leading-relaxed">{candidatura.nomeUrna}</li>
                <li className="text-frost/55 text-xs leading-relaxed">Candidatura em {candidatura.estado}</li>
              </ul>
            </div>
            <img
              src={brasaoMinas.url}
              alt="Brasão do Estado de Minas Gerais"
              width={112}
              height={108}
              loading="lazy"
              className="h-24 w-auto shrink-0 opacity-95 sm:h-28"
            />
          </div>
        </div>

        <div className="rule-line mt-6" />

        <p className="text-frost/50 mt-4 text-[0.68rem] leading-relaxed font-medium tracking-wide">
          {candidatura.identificacaoEleitoral}
        </p>
        <p className="text-frost/35 mt-2 text-[0.66rem] leading-relaxed">
          As propostas apresentadas neste site representam compromissos de atuação parlamentar caso eleita. Nenhuma
          delas descreve política pública já implementada ou resultado alcançado.
        </p>
        <p className="text-frost/30 mt-2 text-[0.62rem] leading-relaxed">
          Foto ilustrativa: Kaboompics, via Pexels.
        </p>
      </div>
    </footer>
  );
}
=======
import { Link } from "@tanstack/react-router";
import { candidatura, links } from "@/data/candidatura";
import brasaoMinas from "@/assets/brasao-minas-gerais.png.asset.json";
import { WaveDivider } from "@/components/graphics";

const rotas = [
  { to: "/", label: "Início" },
  { to: "/sobre-mim", label: "Sobre mim" },
  { to: "/ideias-e-projetos", label: "Ideias & Projetos" },
  { to: "/comunidade", label: "Comunidade" },
] as const;

export function SiteFooter() {
  return (
    <footer className="surface-night relative">
      <WaveDivider className="text-ink -mt-px" />
      <div className="mx-auto max-w-7xl px-5 pt-2 pb-7 sm:px-8">
        <div className="grid gap-7 border-t border-border pt-7 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-black tracking-tight sm:text-3xl">Tatá Bracho</p>
            <p className="text-frost/70 mt-1 text-xs font-semibold">{candidatura.cargo}</p>
            <p className="numero-oficial mt-2 text-4xl leading-none sm:text-5xl">{candidatura.numero}</p>
            <p className="text-frost/55 mt-3 max-w-xs text-xs leading-relaxed">
              <span className="text-solidario font-bold">{candidatura.partido}</span> | {candidatura.federacao}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-3 space-y-1.5">
              {rotas.map((rota) => (
                <li key={rota.to}>
                  <Link to={rota.to} className="text-frost/75 hover:text-electric text-sm font-medium transition-colors">
                    {rota.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-start gap-5">
            <div className="flex-1">
              <p className="eyebrow">Institucional</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li>
                  <a
                    href={links.solidariedade}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-solidario font-bold transition-opacity hover:opacity-80"
                  >
                    Solidariedade
                  </a>
                </li>
                <li className="text-frost/55 text-xs leading-relaxed">{candidatura.nomeUrna}</li>
                <li className="text-frost/55 text-xs leading-relaxed">Candidatura em {candidatura.estado}</li>
              </ul>
            </div>
            <img
              src={brasaoMinas.url}
              alt="Brasão do Estado de Minas Gerais"
              width={112}
              height={108}
              loading="lazy"
              className="h-24 w-auto shrink-0 opacity-95 sm:h-28"
            />
          </div>
        </div>

        <div className="rule-line mt-6" />

        <p className="text-frost/50 mt-4 text-[0.68rem] leading-relaxed font-medium tracking-wide">
          {candidatura.identificacaoEleitoral}
        </p>
        <p className="text-frost/35 mt-2 text-[0.66rem] leading-relaxed">
          As propostas apresentadas neste site representam compromissos de atuação parlamentar caso eleita. Nenhuma
          delas descreve política pública já implementada ou resultado alcançado.
        </p>
        <p className="text-frost/30 mt-2 text-[0.62rem] leading-relaxed">
          Foto ilustrativa: Kaboompics, via Pexels.
        </p>
      </div>
    </footer>
  );
}
=======
              src={brasaoMinas.url}
const rotas = [
  { to: "/", label: "Início" },
  { to: "/sobre-mim", label: "Sobre mim" },
  { to: "/ideias-e-projetos", label: "Ideias & Projetos" },
  { to: "/comunidade", label: "Comunidade" },
] as const;

export function SiteFooter() {
  return (
    <footer className="surface-night relative">
      <WaveDivider className="text-ink -mt-px" />
      <div className="mx-auto max-w-7xl px-5 pt-2 pb-7 sm:px-8">
        <div className="grid gap-7 border-t border-border pt-7 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-black tracking-tight sm:text-3xl">Tatá Bracho</p>
            <p className="text-frost/70 mt-1 text-xs font-semibold">{candidatura.cargo}</p>
            <p className="numero-oficial mt-2 text-4xl leading-none sm:text-5xl">{candidatura.numero}</p>
            <p className="text-frost/55 mt-3 max-w-xs text-xs leading-relaxed">
              <span className="text-solidario font-bold">{candidatura.partido}</span> | {candidatura.federacao}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-3 space-y-1.5">
              {rotas.map((rota) => (
                <li key={rota.to}>
                  <Link to={rota.to} className="text-frost/75 hover:text-electric text-sm font-medium transition-colors">
                    {rota.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-start gap-5">
            <div className="flex-1">
              <p className="eyebrow">Institucional</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li>
                  <a
                    href={links.solidariedade}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-solidario font-bold transition-opacity hover:opacity-80"
                  >
                    Solidariedade
                  </a>
                </li>
                <li className="text-frost/55 text-xs leading-relaxed">{candidatura.nomeUrna}</li>
                <li className="text-frost/55 text-xs leading-relaxed">Candidatura em {candidatura.estado}</li>
              </ul>
            </div>
            <img
              src={brasaoMinasUrl}
              alt="Brasão do Estado de Minas Gerais"
              width={112}
              height={108}
              loading="lazy"
              className="h-24 w-auto shrink-0 opacity-95 sm:h-28"
            />
          </div>
        </div>

        <div className="rule-line mt-6" />

        <p className="text-frost/50 mt-4 text-[0.68rem] leading-relaxed font-medium tracking-wide">
          {candidatura.identificacaoEleitoral}
        </p>
        <p className="text-frost/35 mt-2 text-[0.66rem] leading-relaxed">
          As propostas apresentadas neste site representam compromissos de atuação parlamentar caso eleita. Nenhuma
          delas descreve política pública já implementada ou resultado alcançado.
        </p>
        <p className="text-frost/30 mt-2 text-[0.62rem] leading-relaxed">
          Foto ilustrativa: Kaboompics, via Pexels.
        </p>
      </div>
    </footer>
  );
}

