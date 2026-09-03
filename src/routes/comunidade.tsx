import { createFileRoute, Link } from "@tanstack/react-router";
import { candidatura, links } from "@/data/candidatura";
import { AuroraLayer, WaveDivider } from "@/components/graphics";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/comunidade")({
  head: () => ({
    meta: [
      { title: "Comunidade | Tatá Bracho 7720" },
      {
        name: "description",
        content:
          "Espaço de conversa direta com quem acompanha a candidatura de Tatá Bracho, 7720, a Deputada Federal por Minas Gerais.",
      },
      { property: "og:title", content: "Comunidade | Tatá Bracho 7720" },
      {
        property: "og:description",
        content: "Participe da comunidade oficial da candidatura de Tatá Bracho, 7720.",
      },
      { name: "twitter:title", content: "Comunidade | Tatá Bracho 7720" },
      { name: "twitter:description", content: "Participe da comunidade oficial da candidatura." },
    ],
  }),
  component: Comunidade,
});

const comoFunciona = [
  {
    titulo: "Conversa direta",
    texto: "Um canal para acompanhar de perto o que eu penso, o que eu defendo e o que eu proponho.",
  },
  {
    titulo: "Sem disparo em massa",
    texto:
      "Nada de mensagem automática sem o seu consentimento. A comunidade existe para conversar, não para encher o seu celular.",
  },
  {
    titulo: "Quem quiser, participa",
    texto: "A entrada é voluntária e você pode sair quando quiser, sem precisar justificar nada a ninguém.",
  },
];

function Comunidade() {
  const linkComunidade = links.comunidadeWhatsapp;

  return (
    <>
      <section className="surface-deep relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <AuroraLayer className="text-electric" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow animate-reveal">Comunidade</p>
          <h1 className="display-xl animate-reveal mt-6 max-w-4xl">
            QUEM RALA PRECISA TER <span className="text-gradient">VEZ E VOZ.</span>
          </h1>
          <p className="text-frost/70 animate-reveal mt-8 max-w-xl text-base leading-relaxed sm:text-lg">
            Este é o espaço de aproximação com quem acredita que dá para mudar as coisas pela raiz.
          </p>
        </div>
        <WaveDivider className="text-navy absolute inset-x-0 bottom-0" />
      </section>

      <section className="bg-navy py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <Reveal>
                <h2 className="display-lg max-w-xl">Entre no grupo oficial da campanha.</h2>
                <p className="text-frost/70 mt-6 max-w-lg text-base leading-relaxed">
                  O grupo oficial é o ponto de encontro de quem quer acompanhar a candidatura e participar da conversa
                  no dia a dia.
                </p>
              </Reveal>

              <Reveal delay={100} className="mt-10">
                {linkComunidade ? (
                  <a
                    href={linkComunidade}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-vivid text-frost hover:bg-electric inline-flex rounded-sm px-8 py-4 text-sm font-bold tracking-wide transition-colors"
                  >
                    Entrar no grupo oficial
                  </a>
                ) : (
                  <div className="border border-border bg-royal/20 p-6">
                    <p className="eyebrow">Link em preparação</p>
                    <p className="text-frost/70 mt-3 text-sm leading-relaxed">
                      O endereço oficial do grupo ainda não foi divulgado pela campanha. Assim que for liberado, ele
                      passa a aparecer aqui.
                    </p>
                    {/* PLACEHOLDER_LINK_WHATSAPP_COMUNIDADE: substituir o valor de links.comunidadeWhatsapp
                        em src/data/candidatura.ts pelo endereço oficial fornecido pela campanha. */}
                    <p className="text-frost/40 mt-4 font-mono text-[0.7rem] tracking-wide">
                      PLACEHOLDER_LINK_WHATSAPP_COMUNIDADE
                    </p>
                  </div>
                )}
              </Reveal>

              <div className="mt-14 space-y-px">
                {comoFunciona.map((item, i) => (
                  <Reveal key={item.titulo} delay={i * 80} className="border-t border-border py-7">
                    <div className="flex gap-6">
                      <span className="numeral text-electric/40 text-3xl">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="text-lg font-extrabold tracking-tight">{item.titulo}</h3>
                        <p className="text-frost/65 mt-2 max-w-lg text-sm leading-relaxed">{item.texto}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
                <div className="rule-line" />
              </div>
            </div>

            <Reveal delay={140} className="lg:sticky lg:top-28 lg:self-start">
              <div className="surface-deep border border-border p-8">
                <p className="eyebrow">Privacidade</p>
                <p className="text-frost/70 mt-5 text-sm leading-relaxed">
                  Este site não coleta os seus dados pessoais. Não há formulário de cadastro, não há lista de contatos e
                  não há envio automático de mensagens.
                </p>
                <p className="text-frost/70 mt-4 text-sm leading-relaxed">
                  Ao entrar em um grupo oficial da campanha, valem as regras de privacidade da plataforma escolhida e as
                  normas eleitorais vigentes.
                </p>
                <div className="rule-line my-8" />
                <p className="eyebrow">Candidatura</p>
                <p className="mt-5 text-sm leading-relaxed font-bold">
                  {candidatura.nomeUrna} | {candidatura.cargo} {candidatura.numero}
                </p>
                <p className="text-frost/55 mt-2 text-sm leading-relaxed">{candidatura.federacao}</p>
                <a
                  href={links.solidariedade}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric hover:text-frost mt-6 inline-flex text-sm font-bold tracking-wide transition-colors"
                >
                  Solidariedade ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="surface-deep relative overflow-hidden py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="display-lg">Antes de entrar, conheça as propostas.</h2>
            <p className="text-frost/70 mx-auto mt-6 max-w-xl text-base leading-relaxed">
              São dezesseis propostas de atuação, cada uma com o problema que ela enfrenta e quem ela pretende
              beneficiar.
            </p>
            <Link
              to="/ideias-e-projetos"
              className="bg-vivid text-frost hover:bg-electric mt-9 inline-flex rounded-sm px-8 py-4 text-sm font-bold tracking-wide transition-colors"
            >
              Ideias & Projetos
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
