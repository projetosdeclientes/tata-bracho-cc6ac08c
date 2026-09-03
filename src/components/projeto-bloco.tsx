import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import type { Projeto } from "@/data/projetos";

export interface ProjetoBlocoProps {
  projeto: Projeto;
  /** Alterna a composição para quebrar a repetição visual entre blocos. */
  invertido?: boolean;
}

export function ProjetoBloco({ projeto, invertido = false }: ProjetoBlocoProps) {
  return (
    <Reveal as="article" className="scroll-mt-28 border-t border-border py-14 sm:py-20">
      <div id={projeto.slug} className="sr-only" aria-hidden="true" />
      <div
        className={cn(
          "grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
          invertido && "lg:grid-cols-[1.1fr_0.9fr]",
        )}
      >
        <header className={cn(invertido && "lg:order-2")}>
          <div className="flex items-start gap-5">
            <span className="numeral text-electric/35 text-5xl leading-none sm:text-6xl">{projeto.numero}</span>
            <div className="bg-border mt-3 h-px flex-1" />
          </div>
          <h3 className="mt-6 text-2xl leading-tight font-extrabold tracking-tight sm:text-3xl">{projeto.titulo}</h3>
          <p className="text-electric mt-5 text-base leading-relaxed font-semibold sm:text-lg">{projeto.frase}</p>
          <p className="text-frost/60 mt-5 text-sm leading-relaxed">{projeto.resumo}</p>
        </header>

        <div className={cn("space-y-8", invertido && "lg:order-1")}>
          <div>
            <p className="eyebrow">O problema</p>
            <p className="text-frost/75 mt-3 text-sm leading-loose sm:text-base">{projeto.problema}</p>
          </div>
          <div>
            <p className="eyebrow">A proposta</p>
            <p className="mt-3 text-sm leading-loose font-medium sm:text-base">{projeto.proposta}</p>
          </div>

          <details className="group border border-border">
            <summary className="hover:bg-royal/25 flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-bold tracking-wide transition-colors">
              Ver o detalhamento da proposta
              <span aria-hidden="true" className="text-electric transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="space-y-8 border-t border-border px-5 py-7">
              <div>
                <p className="eyebrow">Como funcionaria</p>
                <div className="mt-3 space-y-4">
                  {projeto.funcionamento.map((paragrafo, i) => (
                    <p key={i} className="text-frost/70 text-sm leading-loose">
                      {paragrafo}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">Principais pilares</p>
                <ul className="mt-3 space-y-2.5">
                  {projeto.pilares.map((pilar) => (
                    <li key={pilar} className="text-frost/70 flex gap-3 text-sm leading-relaxed">
                      <span aria-hidden="true" className="text-electric mt-px">
                        ✦
                      </span>
                      {pilar}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="eyebrow">Quem seria beneficiado</p>
                  <p className="text-frost/70 mt-3 text-sm leading-loose">{projeto.beneficiados}</p>
                </div>
                <div>
                  <p className="eyebrow">Resultado esperado</p>
                  <p className="text-frost/70 mt-3 text-sm leading-loose">{projeto.resultado}</p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </Reveal>
  );
}
