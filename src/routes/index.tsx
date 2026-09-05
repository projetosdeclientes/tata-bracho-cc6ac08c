import { createFileRoute, Link } from "@tanstack/react-router";
import { candidatura, valores } from "@/data/candidatura";
import { eixos, projetosOrdenados } from "@/data/projetos";
import { AuroraLayer, WaveDivider } from "@/components/graphics";
import { Reveal } from "@/components/reveal";
import { VelocityMarquee } from "@/components/velocity-marquee";
import { useParallax, useScrollProgress } from "@/hooks/use-parallax";
import foto from "@/assets/tata-bracho.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tatá Bracho 7720 | Deputada Federal por Minas Gerais" },
      {
        name: "description",
        content:
          "O Brasil precisa de verdade, não de promessas vazias. Conheça a candidatura de Tatá Bracho, 7720, a Deputada Federal por Minas Gerais.",
      },
      { property: "og:title", content: "Tatá Bracho 7720 | Deputada Federal por Minas Gerais" },
      {
        property: "og:description",
        content:
          "O Brasil precisa de verdade, não de promessas vazias. Conheça a candidatura de Tatá Bracho, 7720.",
      },
      { name: "twitter:title", content: "Tatá Bracho 7720 | Deputada Federal" },
      {
        name: "twitter:description",
        content: "O Brasil precisa de verdade, não de promessas vazias.",
      },
    ],
  }),
  component: Inicio,
});

/**
 * Eixos na ordem oficial, com a faixa contínua de propostas de cada um.
 * A numeração das propostas segue a mesma ordem usada em Ideias & Projetos.
 */
const eixosDestacados = eixos
  .map((eixo) => {
    const numeros = projetosOrdenados.filter((p) => p.eixo === eixo.id).map((p) => p.numero);
    return { ...eixo, primeira: numeros[0] ?? "", ultima: numeros[numeros.length - 1] ?? "" };
  })
  .filter((eixo) => eixo.primeira !== "");


const faixaCampanha = ["VOTE JÁ", "TATÁ BRACHO 7720"];

function Inicio() {
  // Todos no mesmo sentido para evitar que blocos se cruzem/sobreponham.
  const valoresParallax = useParallax<HTMLDivElement>(110);
  const valoresFundo = useScrollProgress<HTMLElement>();
  const valoresCards = useParallax<HTMLDivElement>(190);

  return (
    <>
      <section className="surface-deep relative z-0 overflow-x-clip pt-24 pb-8 sm:pt-28">
        <AuroraLayer className="text-electric" />
        <div className="hairline-grid absolute inset-0 opacity-40" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl gap-4 px-5 pb-14 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:pb-0">
          <div className="order-2 lg:order-1 lg:min-h-[108vh] lg:pt-14 lg:pb-12">

            <p className="eyebrow line-mask">
              <span className="line-rise">
                Candidata a {candidatura.cargo} | {candidatura.estado}
              </span>
            </p>
            <h1 className="hero-title mt-5">
              <span className="line-mask">
                <span className="line-rise whitespace-nowrap" style={{ animationDelay: "120ms" }}>
                  O{" "}
                  <span className="flag-word">
                    BRASIL
                    <span className="flag-word__flag" aria-hidden="true">
                      BRASIL
                    </span>
                  </span>{" "}
                  PRECISA
                </span>
              </span>
              <span className="line-mask">
                <span className="line-rise whitespace-nowrap" style={{ animationDelay: "260ms" }}>
                  DE <span className="text-gradient">VERDADE,</span> NÃO DE
                </span>
              </span>
              <span className="line-mask">
                <span className="line-rise whitespace-nowrap" style={{ animationDelay: "400ms" }}>
                  PROMESSAS VAZIAS.
                </span>
              </span>
            </h1>

            <p className="text-frost/70 mt-7 max-w-lg text-base leading-relaxed sm:text-lg">
              Eu venci a minha maior batalha pessoal com muita luta. Agora, a nossa luta é para garantir que você também
              vença a sua.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/ideias-e-projetos"
                className="bg-vivid text-frost hover:bg-electric rounded-sm px-7 py-4 text-sm font-bold tracking-wide transition-colors"
              >
                Conheça as propostas
              </Link>
              <Link
                to="/sobre-mim"
                className="border-border text-frost hover:border-electric rounded-sm border px-7 py-4 text-sm font-bold tracking-wide transition-colors"
              >
                A minha história
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 border-t border-border pt-7 lg:mt-16">
              <div>
                <p className="eyebrow">Deputada Federal</p>
                <p className="numero-oficial numero-oficial-hero mt-1 text-5xl leading-none sm:text-6xl">
                  {candidatura.numero}
                </p>

              </div>
              <div className="bg-border h-14 w-px" />
              <p className="text-frost/60 max-w-[14rem] text-xs leading-relaxed font-medium">
                {candidatura.partido}
                <br />
                {candidatura.federacao}
              </p>
            </div>
          </div>

          <div className="relative order-1 flex justify-center lg:order-2 lg:sticky lg:top-28 lg:justify-end lg:self-start">
            <div
              aria-hidden="true"
              className="absolute bottom-[6%] left-1/2 h-[70%] w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--vivid)_65%,transparent),transparent_70%)] blur-2xl"
            />
            <div className="relative flex w-full justify-center lg:justify-end">
              <img
                src={foto.url}
                alt="Tatá Bracho, candidata a Deputada Federal por Minas Gerais, número 7720"
                width={860}
                height={1100}
                fetchPriority="high"
                className="relative w-full max-w-[19rem] object-contain drop-shadow-[0_40px_60px_rgba(1,21,85,0.6)] sm:max-w-[24rem] lg:max-w-[27rem]"
              />
            </div>
          </div>
        </div>

        <WaveDivider className="text-navy absolute inset-x-0 bottom-0" />
      </section>


      <section
        ref={valoresLayers}
        className="bg-navy relative z-10 -mt-8 overflow-hidden rounded-t-[2rem] py-20 shadow-[0_-40px_80px_-20px_rgba(1,21,85,0.95)] sm:py-28"
      >
        {/* Camadas de fundo, cada uma com velocidade própria (profundidade real). */}
        <div className="pointer-events-none absolute inset-x-0 -top-[25%] h-[150%]" aria-hidden="true">
          <div data-parallax-layer="1" className="absolute inset-0 will-change-transform">
            <div className="absolute top-[8%] right-[-10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--electric)_34%,transparent),transparent_70%)] blur-3xl" />
            <div className="absolute bottom-[6%] left-[-8%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--vivid)_32%,transparent),transparent_70%)] blur-3xl" />
          </div>
          <div data-parallax-layer="2" className="hairline-grid absolute inset-0 opacity-30 will-change-transform" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div data-parallax-layer="3" className="will-change-transform">
            <Reveal>
              <p className="eyebrow">Por que eu estou aqui</p>
              <h2 className="display-lg mt-5 max-w-3xl">
                Eu sei o que é carregar um peso insuportável <span className="text-electric">e não desistir.</span>
              </h2>
            </Reveal>
          </div>

          <div
            data-parallax-layer="4"
            className="mt-8 grid gap-x-12 gap-y-10 will-change-transform sm:mt-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {valores.map((valor, i) => (
              <Reveal key={valor.titulo} delay={i * 70} className="border-t border-border pt-6">
                <p className="numeral text-electric/40 text-2xl">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-extrabold tracking-tight">{valor.titulo}</h3>
                <p className="text-frost/65 mt-3 text-sm leading-relaxed">{valor.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>



      <section className="surface-deep relative z-20 -mt-6 overflow-hidden rounded-t-[2rem] py-20 shadow-[0_-40px_80px_-20px_rgba(1,21,85,0.95)] sm:py-28">
        <AuroraLayer className="text-electric opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Ideias & Projetos</p>
              <h2 className="display-lg mt-5 max-w-2xl">Dezesseis propostas, uma mesma lógica: mudar pela raiz.</h2>
            </div>
            <Link
              to="/ideias-e-projetos"
              className="text-electric hover:text-frost text-sm font-bold tracking-wide transition-colors"
            >
              Ver todas as propostas →
            </Link>
          </Reveal>

          <ul className="mt-14 space-y-px">
            {eixosDestacados.map((eixo, i) => (
              <Reveal as="li" key={eixo.id} delay={i * 80}>
                <Link
                  to="/ideias-e-projetos"
                  hash={eixo.id}
                  className="group hover:bg-royal/25 grid gap-4 border-t border-border py-8 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8"
                >
                  <span className="numeral text-electric/40 group-hover:text-electric text-4xl transition-colors sm:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-xl font-extrabold tracking-tight sm:text-2xl">{eixo.nome}</span>
                    <span className="text-frost/60 mt-2 block max-w-2xl text-sm leading-relaxed">
                      {eixo.descricao}
                    </span>
                    <span className="text-frost/45 mt-2 block text-xs font-semibold tracking-wide uppercase">
                      Propostas {eixo.primeira} a {eixo.ultima}
                    </span>
                  </span>
                  <span className="text-electric hidden text-sm font-bold sm:block">→</span>
                </Link>
              </Reveal>
            ))}
          </ul>
          <div className="rule-line mt-px" />

        </div>
      </section>

      <section
        className="bg-navy-deep relative z-30 overflow-hidden border-y border-border py-4"
        style={{ "--fade-color": "var(--navy-deep)" } as React.CSSProperties}
      >
        <VelocityMarquee
          itens={faixaCampanha}
          velocidade={70}
          itemClassName="numeral text-frost/80 text-xs sm:text-sm tracking-[0.28em]"
        />
        <p className="sr-only">Vote já. Tatá Bracho 7720, Deputada Federal.</p>
      </section>




      <section className="bg-navy relative z-40 overflow-hidden py-20 shadow-[0_-40px_80px_-20px_rgba(1,21,85,0.95)] sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow">Comunidade</p>
            <h2 className="display-lg mt-5">Quem rala precisa ter vez e voz.</h2>
            <p className="text-frost/70 mx-auto mt-6 max-w-xl text-base leading-relaxed">
              A comunidade é o espaço de conversa direta com quem acredita nessa mudança. Participe e acompanhe de
              perto.
            </p>
            <Link
              to="/comunidade"
              className="bg-vivid text-frost hover:bg-electric mt-9 inline-flex rounded-sm px-8 py-4 text-sm font-bold tracking-wide transition-colors"
            >
              Entrar na comunidade
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
