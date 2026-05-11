"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Users } from "lucide-react";
import { dimensionMedals } from "@/constants/personalities";
import type { CalculationResult } from "@/types";

type PersonalityCardProps = {
  result: CalculationResult;
  isFallback?: boolean;
};

export function PersonalityCard({ result, isFallback = false }: PersonalityCardProps) {
  const { personality } = result;
  const medalSrc = dimensionMedals[result.topDimension];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.62, ease: "easeOut" }}
      className="overflow-hidden rounded-[28px] border border-[#334155] bg-[#111827]/82 backdrop-blur"
    >
      <div className="grid gap-6 p-4 sm:p-7 lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
        <div className="relative overflow-hidden rounded-2xl border border-[#334155] bg-[#0B1220] p-4">
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(135deg,transparent_0_48%,#fff_49%_51%,transparent_52%)] [background-size:32px_32px]" />
          <Image
            src={personality.avatar}
            alt={personality.name}
            width={1254}
            height={1254}
            className="relative z-10 aspect-square w-full rounded-xl object-contain brightness-90 contrast-110"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-md border border-[#7DD3FC]/30 bg-[#0B1220]/80 px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#7DD3FC]">
              <Cpu className="size-4" />
              {personality.id} / {personality.code}
            </span>
            {isFallback ? (
              <span className="rounded-md border border-[#F59E0B]/35 bg-[#451A03]/30 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#FCD34D]">
                fallback data
              </span>
            ) : null}
          </div>

          <h1 className="mt-5 text-balance text-[clamp(2rem,12vw,5.2rem)] font-black leading-tight tracking-[0.03em] text-slate-100">
            {personality.name}
          </h1>

          <p className="mt-5 text-pretty text-base font-semibold leading-8 text-slate-300">
            {personality.description}
          </p>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-[#334155] bg-[#0B1220]/70 p-4 sm:p-5">
              <div className="flex flex-col items-center text-center text-[#22C55E]">
                <span className="grid size-28 shrink-0 place-items-center sm:size-32">
                  <Image
                    src={medalSrc}
                    alt={`${result.dimensionTag}勋章`}
                    width={180}
                    height={180}
                    className="size-full object-contain drop-shadow-[0_0_28px_rgba(34,197,94,0.18)]"
                  />
                </span>
                <span className="mt-3 text-xs font-black uppercase tracking-[0.2em]">
                  最高维度勋章
                </span>
              </div>
              <p className="mt-3 text-center text-2xl font-black text-slate-100">
                {result.dimensionTag}
              </p>
              <p className="mt-2 text-center text-sm font-semibold text-slate-500">
                {result.topDimension} 维度主导
              </p>
            </div>

            <div className="rounded-2xl border border-[#334155] bg-[#0B1220]/70 p-4">
              <div className="flex items-center gap-2 text-[#A78BFA]">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#A78BFA]/35 bg-[#A78BFA]/12">
                  <Users className="size-5" />
                </span>
                <span className="text-xs font-black uppercase tracking-[0.2em]">
                  最佳拍档
                </span>
              </div>
              <p className="mt-3 text-2xl font-black text-slate-100">
                {personality.partner}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
