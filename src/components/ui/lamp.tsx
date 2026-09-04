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
        "bg-navy-deep relative z-0 flex w-full flex-col items-center justify-center overflow-hidden",
        className,
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, var(--electric), transparent, transparent)",
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible"
        >
          <div className="bg-navy-deep absolute bottom-0 left-0 z-20 h-40 w-full [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="bg-navy-deep absolute bottom-0 left-0 z-20 h-full w-40 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, var(--electric))",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem]"
        >
          <div className="bg-navy-deep absolute right-0 bottom-0 z-20 h-full w-40 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="bg-navy-deep absolute right-0 bottom-0 z-20 h-40 w-full [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="bg-navy-deep absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="bg-electric absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl" />

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="bg-electric absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="bg-electric absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]"
        />

        <div className="bg-navy-deep absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]" />
      </div>

      <div className="relative z-50 flex w-full -translate-y-72 flex-col items-center px-5 sm:-translate-y-80">
        {children}
      </div>
    </div>
  );
};
