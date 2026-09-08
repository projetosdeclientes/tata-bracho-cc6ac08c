import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <div className="max-w-md text-center">
        <p className="numeral text-electric/40 text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight">Página não encontrada</h1>
        <p className="text-frost/60 mt-3 text-sm leading-relaxed">
          O endereço que você acessou não existe neste site.
        </p>
        <Link
          to="/"
          className="btn-cta mt-8"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-extrabold tracking-tight">Esta página não carregou</h1>
        <p className="text-frost/60 mt-3 text-sm leading-relaxed">
          Algo falhou por aqui. Você pode tentar novamente ou voltar ao início.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-cta"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="border-border text-frost hover:border-electric rounded-sm border px-6 py-3 text-sm font-bold tracking-wide transition-colors"
          >
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tatá Bracho 7720 | Deputada Federal" },
      {
        name: "description",
        content:
          "Site institucional da candidatura de Tatá Bracho, 7720, a Deputada Federal por Minas Gerais pelo Solidariedade.",
      },
      { name: "author", content: "Taciany Pereira dos Santos" },
      { property: "og:site_name", content: "Tatá Bracho 7720" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "https://tata-bracho.lovable.app/__l5e/assets-v1/4cbf83f5-cb3d-4104-8e7c-c367e9f44f79/tata-bracho.png", type: "image/png" },
=======

Ops, corrigindo o bloco (duplicação acidental):

FILE: src/routes/__root.tsx
<<<<<<< SEARCH
      { rel: "icon", href: "https://tata-bracho.lovable.app/__l5e/assets-v1/4cbf83f5-cb3d-4104-8e7c-c367e9f44f79/tata-bracho.png", type: "image/png" },
=======
      { rel: "icon", href: "https://tata-bracho.lovable.app/__l5e/assets-v1/4cbf83f5-cb3d-4104-8e7c-c367e9f44f79/tata-bracho.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#conteudo"
        className="focus:bg-vivid focus:text-frost sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-sm focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
