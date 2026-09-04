import { createFileRoute, Link } from "@tanstack/react-router";
import { conceitosCentrais } from "@/data/candidatura";
import { eixos, notaConformidade, projetosOrdenados } from "@/data/projetos";
import { AuroraLayer, WaveDivider } from "@/components/graphics";
import { Reveal } from "@/components/reveal";
import { ProjetoBloco } from "@/components/projeto-bloco";

export const Route = createFileRoute("/ideias-e-projetos")({
  head: () => ({
    meta: [
      { title: "Ideias & Projetos | Tatá Bracho 7720" },
      {
        name: "description",
        content:
          "As dezesseis propostas de atuação parlamentar de Tatá Bracho, 7720: saúde real, trabalho digno, educação prática e igualdade de regras.",
      },
      { property: "og:title", content: "Ideias & Projetos | Tatá Bracho 7720" },
      {
        property: "og:description",
        content: "Dezesseis propostas de atuação parlamentar apresentadas por Tatá Bracho, 7720.",
      },
      { name: "twitter:title", content: "Ideias & Projetos | Tatá Bracho 7720" },
      { name: "twitter:description", content: "Dezesseis propostas de atuação parlamentar." },
    ],
  }),
  component: IdeiasEProjetos,
});

function IdeiasEProjetos() {
  return (
    <>
      <section className="surface-deep relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <AuroraLayer className="text-electric" />
        <div className="hairline-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow animate-reveal">Ideias & Projetos</p>
          <h1 className="display-xl animate-reveal mt-6 max-w-4xl">
            DEZESSEIS PROPOSTAS PARA <span className="text-gradient">MUDAR PELA RAIZ.</span>
          </h1>
          <div className="animate-reveal mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[1.2fr_0.8fr]">
            <p className="text-frost/70 max-w-2xl text-base leading-relaxed sm:text-lg">
              Cada proposta nasce da mesma história: a de quem carregou um peso enorme, literal e figurado, e decidiu
              mudar pela raiz, não pela superfície. Tudo aqui é proposta e compromisso de atuação caso eleita.
            </p>
            <p className="numeral text-electric/25 text-right text-7xl leading-none sm:text-8xl">16</p>
          </div>
        </div>
        <WaveDivider className="text-navy absolute inset-x-0 bottom-0" />
      </section>

      <section className="bg-navy py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow">Eixos temáticos</p>
            <nav aria-label="Eixos temáticos" className="mt-6 grid gap-px sm:grid-cols-2 lg:grid-cols-5">
              {eixos.map((eixo, i) => (
                <a
                  key={eixo.id}
                  href={`#${eixo.id}`}
                  className="hover:bg-royal/30 group border-t border-border py-6 pr-4 transition-colors"
                >
                  <span className="numeral text-electric/40 group-hover:text-electric text-xl transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block text-sm leading-snug font-extrabold tracking-tight">{eixo.nome}</span>
                  <span className="text-frost/55 mt-2 block text-xs leading-relaxed">{eixo.descricao}</span>
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {eixos.map((eixo, index) => {
        const doEixo = projetosOrdenados.filter((p) => p.eixo === eixo.id);
        const escuro = index % 2 === 0;
        return (
          <section
            key={eixo.id}
            id={eixo.id}
            className={`${escuro ? "surface-deep" : "bg-navy"} relative scroll-mt-20 overflow-hidden py-16 sm:py-24`}
          >
            {escuro ? <AuroraLayer className="text-electric opacity-50" /> : null}
            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
              <Reveal className="max-w-3xl">
                <p className="eyebrow">Eixo {String(index + 1).padStart(2, "0")}</p>
                <h2 className="display-lg mt-4">{eixo.nome}</h2>
                <p className="text-frost/65 mt-5 text-base leading-relaxed">{eixo.descricao}</p>
              </Reveal>

              <div className="mt-6">
                {doEixo.map((projeto, i) => (
                  <ProjetoBloco key={projeto.slug} projeto={projeto} invertido={i % 2 === 1} />
                ))}
                <div className="rule-line" />
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-navy relative overflow-hidden py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow">Conceitos que atravessam as propostas</p>
            <h2 className="display-lg mt-5 max-w-2xl">Quatro ideias sustentam todo o resto.</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {conceitosCentrais.map((conceito, i) => (
              <Reveal key={conceito.titulo} delay={i * 80} className="border-t border-border pt-6">
                <h3 className="text-lg font-extrabold tracking-tight">{conceito.titulo}</h3>
                <p className="text-frost/65 mt-3 text-sm leading-relaxed">{conceito.texto}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 border-l-2 border-electric pl-6">
            <p className="text-frost/55 max-w-3xl text-xs leading-loose">{notaConformidade}</p>
          </Reveal>

          <Reveal className="mt-14">
            <Link
              to="/comunidade"
              className="bg-vivid text-frost hover:bg-electric inline-flex rounded-sm px-8 py-4 text-sm font-bold tracking-wide transition-colors"
            >
              Participe da comunidade
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
