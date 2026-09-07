import { createFileRoute, Link } from "@tanstack/react-router";
import { candidatura, historia, links } from "@/data/candidatura";
import { AuroraLayer, WaveDivider } from "@/components/graphics";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/sobre-mim")({
  head: () => ({
    meta: [
      { title: "Sobre mim | Tatá Bracho 7720" },
      {
        name: "description",
        content:
          "A minha história é a luta do povo. Tatá Bracho conta, em primeira pessoa, a trajetória que a trouxe até a candidatura a Deputada Federal.",
      },
      { property: "og:title", content: "Sobre mim | Tatá Bracho 7720" },
      {
        property: "og:description",
        content: "A minha história é a luta do povo, contada em primeira pessoa por Tatá Bracho.",
      },
      { name: "twitter:title", content: "Sobre mim | Tatá Bracho 7720" },
      { name: "twitter:description", content: "A minha história é a luta do povo." },
    ],
  }),
  component: SobreMim,
});

function SobreMim() {
  return (
    <>
      <section className="surface-dawn relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <AuroraLayer className="text-electric opacity-60" />
        <div className="diagonal-veil pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow animate-reveal">Sobre mim</p>
          <h1 className="display-xl animate-reveal mt-6 max-w-4xl">
            A MINHA HISTÓRIA É A <span className="text-gradient-anim">LUTA DO POVO.</span>
          </h1>
          <p className="text-frost/70 animate-reveal mt-8 max-w-xl text-base leading-relaxed sm:text-lg">
            Texto escrito por mim, do jeito que eu vivi. Sem intermediário, sem enfeite.
          </p>
        </div>
        <WaveDivider className="text-navy absolute inset-x-0 bottom-0" />
      </section>

      <section className="surface-steel relative overflow-hidden py-16 sm:py-24">
        <div className="noise-veil pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="grid gap-8 border-b border-border pb-10 sm:grid-cols-3">
            <div>
              <p className="numeral text-gradient text-6xl leading-none">76</p>
              <p className="text-frost/60 mt-2 text-xs leading-relaxed font-semibold tracking-wide uppercase">
                quilos perdidos
              </p>
            </div>
            <div>
              <p className="numeral text-gradient text-6xl leading-none">4</p>
              <p className="text-frost/60 mt-2 text-xs leading-relaxed font-semibold tracking-wide uppercase">
                anos de disciplina
              </p>
            </div>
            <div>
              <p className="numeral text-gradient text-6xl leading-none">16</p>
              <p className="text-frost/60 mt-2 text-xs leading-relaxed font-semibold tracking-wide uppercase">
                propostas apresentadas
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14 max-w-3xl">
            <p className="eyebrow">Em primeira pessoa</p>
            <p className="text-frost/70 mt-4 text-lg leading-relaxed sm:text-xl">
              Da luta contra a balança à decisão de disputar um mandato: a trajetória que sustenta cada proposta desta
              candidatura.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-16 gap-y-0 lg:grid-cols-2">
              {historia.map((paragrafo, i) => (
                <Reveal key={i} delay={i * 60} className={i === 0 ? "relative pb-10 lg:col-span-2" : "relative pb-10"}>
                  {i === 0 ? (
                    <p className="text-xl leading-relaxed font-semibold sm:text-2xl sm:leading-relaxed">{paragrafo}</p>
                  ) : (
                    <p className="text-frost/75 text-base leading-loose sm:text-lg">{paragrafo}</p>
                  )}
                </Reveal>
              ))}

              <Reveal className="border-l-2 border-electric pl-6 lg:col-span-2">
                <p className="text-lg leading-relaxed font-bold sm:text-xl">
                  O Brasil só vai para frente quando quem rala tiver vez e voz.
                </p>
                <p className="eyebrow mt-4">
                  {candidatura.nomeUrna} | {candidatura.numero}
                </p>
              </Reveal>
          </div>
        </div>
      </section>

      <section className="surface-deep relative overflow-hidden py-20 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 border-t border-border pt-12 md:grid-cols-[1fr_1fr] md:gap-20">
            <Reveal>
              <p className="eyebrow">Registro eleitoral</p>
              <dl className="mt-6 space-y-4 text-sm">
                {[                  ["Nome na urna", candidatura.nomeUrna],
                  ["Cargo", candidatura.cargo],
                  ["Número", candidatura.numero],
                  ["Partido", candidatura.partido],
                  ["Federação", candidatura.federacao],
                  ["Estado", candidatura.estado],
                ].map(([rotulo, valor]) => (
                  <div key={rotulo} className="flex flex-wrap justify-between gap-3 border-b border-border/60 pb-3">
                    <dt className="text-frost/50 font-semibold tracking-wide">{rotulo}</dt>
                    <dd className="text-right font-bold">{valor}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <p className="eyebrow">Vínculo partidário</p>
              <p className="text-frost/70 mt-6 text-base leading-relaxed">
                A minha candidatura é registrada pelo Solidariedade, dentro da Federação Renovação Solidária.
              </p>
              <a
                href={links.solidariedade}
                target="_blank"
                rel="noopener noreferrer"
                className="text-solidario mt-6 inline-flex text-sm font-bold tracking-wide transition-opacity hover:opacity-80"
              >
                Conheça o Solidariedade ↗
              </a>
              <div className="rule-line my-10" />
              <p className="text-frost/70 text-base leading-relaxed">
                As propostas que eu apresento estão reunidas em Ideias & Projetos, com o problema, a proposta e quem eu
                quero beneficiar em cada uma delas.
              </p>
              <Link to="/ideias-e-projetos" className="btn-cta mt-7">
                Ver as propostas
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
