import { Link } from "@tanstack/react-router";
import { candidatura, links } from "@/data/candidatura";
import { WaveDivider } from "@/components/graphics";

const rotas = [
  { to: "/", label: "Início" },
  { to: "/sobre-mim", label: "Sobre mim" },
  { to: "/ideias-e-projetos", label: "Ideias & Projetos" },
  { to: "/comunidade", label: "Comunidade" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep relative">
      <WaveDivider className="text-navy-deep -mt-px" />
      <div className="mx-auto max-w-7xl px-5 pt-4 pb-12 sm:px-8">
        <div className="grid gap-12 border-t border-border pt-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-3xl font-black tracking-tight sm:text-4xl">Tatá Bracho</p>
            <p className="text-frost/70 mt-1 text-sm font-semibold">{candidatura.cargo}</p>
            <p className="numero-oficial mt-4 text-6xl leading-none sm:text-7xl">{candidatura.numero}</p>
            <p className="text-frost/55 mt-4 max-w-xs text-sm leading-relaxed">
              {candidatura.partido} | {candidatura.federacao}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-5 space-y-3">
              {rotas.map((rota) => (
                <li key={rota.to}>
                  <Link to={rota.to} className="text-frost/75 hover:text-electric text-sm font-medium transition-colors">
                    {rota.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Institucional</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={links.solidariedade}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-frost/75 hover:text-electric font-medium transition-colors"
                >
                  Solidariedade
                </a>
              </li>
              <li className="text-frost/55 leading-relaxed">{candidatura.nomeUrna}</li>
              <li className="text-frost/55 leading-relaxed">Candidatura em {candidatura.estado}</li>
            </ul>

            <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
              <img
                src={brasaoMinas.url}
                alt="Brasão do Estado de Minas Gerais"
                width={112}
                height={108}
                loading="lazy"
                className="h-14 w-auto opacity-90"
              />
              <p className="text-frost/50 text-[0.7rem] leading-relaxed font-semibold tracking-wide uppercase">
                Minas Gerais
                <br />
                Libertas quæ sera tamen
              </p>
            </div>
          </div>
        </div>

        <div className="rule-line mt-12" />

        <p className="text-frost/50 mt-6 text-[0.72rem] leading-relaxed font-medium tracking-wide">
          {candidatura.identificacaoEleitoral}
        </p>
        <p className="text-frost/35 mt-3 text-[0.7rem] leading-relaxed">
          As propostas apresentadas neste site representam compromissos de atuação parlamentar caso eleita. Nenhuma
          delas descreve política pública já implementada ou resultado alcançado.
        </p>
      </div>
    </footer>
  );
}
