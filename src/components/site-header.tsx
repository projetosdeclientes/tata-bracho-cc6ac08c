import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { candidatura } from "@/data/candidatura";

const navegacao = [
  { to: "/", label: "Início" },
  { to: "/sobre-mim", label: "Sobre mim" },
  { to: "/ideias-e-projetos", label: "Ideias & Projetos" },
  { to: "/comunidade", label: "Comunidade" },
] as const;

export function SiteHeader() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        rolou || aberto ? "bg-navy-deep/92 border-b border-border backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link to="/" onClick={() => setAberto(false)} className="group flex items-baseline gap-2.5">
          <span className="text-base font-extrabold tracking-tight sm:text-lg">Tatá Bracho</span>
          <span className="numeral text-electric text-sm sm:text-base">{candidatura.numero}</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-9 md:flex">
          {navegacao.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-frost/70 hover:text-frost relative py-1 text-[0.8rem] font-semibold tracking-wide transition-colors"
              activeProps={{ className: "text-frost" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={cn(
                      "bg-electric absolute -bottom-1 left-0 h-px transition-all duration-300",
                      isActive ? "w-full" : "w-0",
                    )}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="border-border text-frost -mr-1 flex h-11 w-11 items-center justify-center rounded-sm border md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "bg-frost absolute left-0 block h-0.5 w-5 transition-transform duration-300",
                aberto ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "bg-frost absolute left-0 block h-0.5 w-5 transition-transform duration-300",
                aberto ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "bg-navy-deep/98 overflow-hidden border-t border-border backdrop-blur-xl transition-[max-height] duration-500 md:hidden",
          aberto ? "max-h-96" : "max-h-0",
        )}
      >
        <nav aria-label="Navegação mobile" className="flex flex-col px-5 py-3">
          {navegacao.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setAberto(false)}
              className="text-frost/80 border-b border-border/60 py-4 text-lg font-bold tracking-tight last:border-b-0"
              activeProps={{ className: "text-electric" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
