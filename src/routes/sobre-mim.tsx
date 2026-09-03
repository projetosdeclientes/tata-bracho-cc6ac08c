import { createFileRoute, Link } from "@tanstack/react-router";
import { candidatura, historia, links } from "@/data/candidatura";
import { AuroraLayer, WaveDivider } from "@/components/graphics";
import { Reveal } from "@/components/reveal";
import foto from "@/assets/tata-bracho.png.asset.json";

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
      <section className="surface-deep relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <AuroraLayer className="text-electric" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow animate-reveal">Sobre mim</p>
          <h1 className="display-xl animate-reveal mt-6 max-w-4xl">
            A MINHA HISTÓRIA É A <span className="text-gradient">LUTA DO POVO.</span>
          </h1>
          <p className="text-frost/70 animate-reveal mt-8 max-w-xl text-base leading-relaxed sm:text-lg">
            Texto escrito por mim, do jeito que eu vivi. Sem intermediário, sem enfeite.
          </p>
        </div>
        <WaveDivider className="text-navy absolute inset-x-0 bottom-0" />
      </section>

      <section className="bg-navy relative py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="surface-vivid/0 relative">
                <div
                  aria-hidden="true"
                  className="surface-vivid absolute inset-x-6 bottom-0 top-16 rounded-t-[999px] opacity-30 blur-[2px]"
                />
                <img
                  src={foto.url}
                  alt="Retrato oficial de Tatá Bracho"
                  width={860}
                  height={1100}
                  loading="lazy"
                  className="relative w-full max-w-sm object-contain drop-shadow-[0_30px_50px_rgba(1,21,85,0.55)]"
                />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
                <div>
                  <p className="numeral text-gradient text-5xl leading-none">76</p>
                  <p className="text-frost/60 mt-2 text-xs leading-relaxed font-semibold tracking-wide uppercase">
                    quilos perdidos
                  </p>
                </div>
                <div>
                  <p className="numeral text-gradient text-5xl leading-none">4</p>
                  <p className="text-frost/60 mt-2 text-xs leading-relaxed font-semibold tracking-wide uppercase">
                    anos de disciplina
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            {historia.map((paragrafo, i) => (
              <Reveal key={i} delay={i * 60} className="relative pb-10">
                {i === 0 ? (
                  <p className="text-xl leading-relaxed font-semibold sm:text-2xl sm:leading-relaxed">{paragrafo}</p>
                ) : (
                  <p className="text-frost/75 text-base leading-loose sm:text-lg">{paragrafo}</p>
                )}
              </Reveal>
            ))}

            <Reveal className="border-l-2 border-electric pl-6">
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
                {[
                  ["Nome completo", candidatura.nomeCompleto],
                  ["Nome na urna", candidatura.nomeUrna],
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
                className="text-electric hover:text-frost mt-6 inline-flex text-sm font-bold tracking-wide transition-colors"
              >
                Conheça o Solidariedade ↗
              </a>
              <div className="rule-line my-10" />
              <p className="text-frost/70 text-base leading-relaxed">
                As propostas que eu apresento estão reunidas em Ideias & Projetos, com o problema, a proposta e quem eu
                quero beneficiar em cada uma delas.
              </p>
              <Link
                to="/ideias-e-projetos"
                className="bg-vivid text-frost hover:bg-electric mt-7 inline-flex rounded-sm px-7 py-4 text-sm font-bold tracking-wide transition-colors"
              >
                Ver as propostas
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
