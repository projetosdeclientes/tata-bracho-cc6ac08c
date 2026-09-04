"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Efeito "lâmpada": dois cones cônicos de luz que se abrem ao entrar na tela,
 * com uma linha luminosa no centro. Adaptado à paleta oficial da campanha e
 * redimensionado no mobile para continuar parecendo um facho de luz.
 */
export const LampContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const abertura = {
    initial: { opacity: 0.4, scaleX: 0.45 },
    whileInView: { opacity: 1, scaleX: 1 },
    viewport: { once: true },
    transition: { delay: 0.3, duration: 0.8, ease: "easeInOut" },
  } as const;

  return (
    <div
      className={cn(
        "bg-navy-deep relative z-0 flex w-full flex-col items-center justify-center overflow-hidden",
        className,
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-110 items-center justify-center sm:scale-y-125">
        <motion.div
          {...abertura}
          style={{
            transformOrigin: "right top",
            backgroundImage: "conic-gradient(from 70deg at center top, var(--electric), transparent, transparent)",
          }}
          className="absolute inset-auto right-1/2 h-40 w-[17rem] overflow-visible sm:h-56 sm:w-[30rem]"
        >
          <div className="bg-navy-deep absolute bottom-0 left-0 z-20 h-28 w-full [mask-image:linear-gradient(to_top,white,transparent)] sm:h-40" />
          <div className="bg-navy-deep absolute bottom-0 left-0 z-20 h-full w-24 [mask-image:linear-gradient(to_right,white,transparent)] sm:w-40" />
        </motion.div>

        <motion.div
          {...abertura}
          style={{
            transformOrigin: "left top",
            backgroundImage: "conic-gradient(from 290deg at center top, transparent, transparent, var(--electric))",
          }}
          className="absolute inset-auto left-1/2 h-40 w-[17rem] sm:h-56 sm:w-[30rem]"
        >
          <div className="bg-navy-deep absolute right-0 bottom-0 z-20 h-full w-24 [mask-image:linear-gradient(to_left,white,transparent)] sm:w-40" />
          <div className="bg-navy-deep absolute right-0 bottom-0 z-20 h-28 w-full [mask-image:linear-gradient(to_top,white,transparent)] sm:h-40" />
        </motion.div>

        <div className="bg-navy-deep absolute top-1/2 h-40 w-full translate-y-10 scale-x-150 blur-2xl sm:h-48 sm:translate-y-12" />
        <div className="absolute top-1/2 z-50 h-40 w-full bg-transparent opacity-10 backdrop-blur-md sm:h-48" />
        <div className="bg-electric absolute inset-auto z-50 h-24 w-[15rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl sm:h-36 sm:w-[28rem]" />

        <motion.div
          {...abertura}
          className="bg-electric absolute inset-auto z-30 h-24 w-40 -translate-y-[4.5rem] rounded-full blur-2xl sm:h-36 sm:w-64 sm:-translate-y-[6rem]"
        />
        <motion.div
          {...abertura}
          className="bg-electric absolute inset-auto z-50 h-px w-[16rem] -translate-y-[5.25rem] sm:h-0.5 sm:w-[30rem] sm:-translate-y-[7rem]"
        />

        <div className="bg-navy-deep absolute inset-auto z-40 h-40 w-full -translate-y-[9.5rem] sm:h-44 sm:-translate-y-[12.5rem]" />
      </div>

      <div className="relative z-50 flex w-full -translate-y-40 flex-col items-center px-5 sm:-translate-y-64">
        {children}
      </div>
    </div>
  );
};
