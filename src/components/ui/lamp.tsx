"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Efeito "lâmpada": dois cones cônicos de luz que se abrem ao entrar na tela,
 * com uma linha luminosa no centro. Adaptado à paleta oficial da campanha.
 */
export const LampContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        "bg-navy-deep relative z-0 flex w-full flex-col items-center justify-center overflow-hidden [--lamp-core:10rem] [--lamp-w:18rem] sm:[--lamp-core:16rem] sm:[--lamp-w:30rem]",
        className,
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
        <motion.div
          initial={{ opacity: 0.5, width: "9rem" }}
          whileInView={{ opacity: 1, width: "var(--lamp-w)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, var(--electric), transparent, transparent)",
          }}
          className="absolute inset-auto right-1/2 h-44 w-[18rem] overflow-visible sm:h-56 sm:w-[30rem]"
        >
          <div className="bg-navy-deep absolute bottom-0 left-0 z-20 h-32 w-full sm:h-40 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="bg-navy-deep absolute bottom-0 left-0 z-20 h-full w-24 sm:w-40 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "9rem" }}
          whileInView={{ opacity: 1, width: "var(--lamp-w)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, var(--electric))",
          }}
          className="absolute inset-auto left-1/2 h-44 w-[18rem] sm:h-56 sm:w-[30rem]"
        >
          <div className="bg-navy-deep absolute right-0 bottom-0 z-20 h-full w-24 sm:w-40 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="bg-navy-deep absolute right-0 bottom-0 z-20 h-32 w-full sm:h-40 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="bg-navy-deep absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="bg-electric absolute inset-auto z-50 h-24 w-[16rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl sm:h-36 sm:w-[28rem]" />

        <motion.div
          initial={{ width: "5rem" }}
          whileInView={{ width: "var(--lamp-core)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="bg-electric absolute inset-auto z-30 h-24 w-40 -translate-y-[4.5rem] rounded-full blur-2xl sm:h-36 sm:w-64 sm:-translate-y-[6rem]"
        />
        <motion.div
          initial={{ width: "9rem" }}
          whileInView={{ width: "var(--lamp-w)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="bg-electric absolute inset-auto z-50 h-0.5 w-[18rem] -translate-y-[5.5rem] sm:w-[30rem] sm:-translate-y-[7rem]"
        />

        <div className="bg-navy-deep absolute inset-auto z-40 h-44 w-full -translate-y-[10.5rem] sm:-translate-y-[12.5rem]" />
      </div>

      <div className="relative z-50 flex w-full -translate-y-72 flex-col items-center px-5 sm:-translate-y-80">
        {children}
      </div>
    </div>
  );
};
