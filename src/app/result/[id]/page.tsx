"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Binary, MessageSquareQuote, Sparkles } from "lucide-react";
import { ActionButtons } from "@/components/result/ActionButtons";
import { PersonalityCard } from "@/components/result/PersonalityCard";
import { RadarChart } from "@/components/result/RadarChart";
import { dimensionTags, personalities } from "@/constants/personalities";
import type {
  CalculationResult,
  DimensionScores,
  PersonalityCode,
} from "@/types";

function fallbackResult(code: string): CalculationResult {
  const personality =
    personalities.find(
      (item) => item.code.toLowerCase() === code.toLowerCase(),
    ) ?? personalities[personalities.length - 1];
  const totalScore = Math.round(
    (personality.minScore + personality.maxScore) / 2,
  );
  const dimensionScores: DimensionScores = {
    A: 18,
    B: 18,
    C: 18,
    D: 18,
    E: 18,
  };

  return {
    totalScore,
    dimensionScores,
    topDimension: "C",
    dimensionTag: dimensionTags.C,
    personality,
  };
}

export default function ResultPage() {
  const params = useParams<{ id: string }>();
  const [storedResult, setStoredResult] = useState<CalculationResult | null>(
    null,
  );
  const id = params.id ?? "pure";

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const raw = sessionStorage.getItem("webti:last-result");

      if (!raw) {
        setStoredResult(null);
        return;
      }

      try {
        const parsed = JSON.parse(raw) as CalculationResult;
        setStoredResult(parsed);
      } catch {
        setStoredResult(null);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const result = useMemo(() => {
    if (storedResult?.personality.code.toLowerCase() === id.toLowerCase()) {
      return storedResult;
    }

    return fallbackResult(id);
  }, [id, storedResult]);

  const isFallback =
    storedResult?.personality.code.toLowerCase() !== id.toLowerCase();
  const code = result.personality.code as PersonalityCode;

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#0F172A] text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:7px_7px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(135deg,transparent_0_48%,#fff_49%_51%,transparent_52%)] [background-size:38px_38px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_22%_2%,rgba(34,197,94,0.14),transparent_36%),radial-gradient(circle_at_78%_8%,rgba(0,229,255,0.15),transparent_34%)]" />

      <header className="relative z-30 flex min-h-20 flex-wrap items-center justify-between gap-3 px-5 py-4 sm:min-h-24 sm:px-10 sm:py-5 lg:px-14">
        <Link href="/" className="flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-md border border-[#334155] bg-[#111827]/80">
            <Binary className="size-5 text-[#A78BFA]" strokeWidth={2} />
          </span>
          <span
            className="text-xl font-black tracking-[0.14em] text-slate-100 sm:text-2xl sm:tracking-[0.16em]"
            style={{
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            }}
          >
            WebTI
          </span>
        </Link>

        <Link
          href="/quiz"
          className="inline-flex h-10 items-center gap-2 rounded-md border border-[#334155] bg-[#111827]/70 px-3 text-xs font-black text-slate-300 transition hover:bg-[#0B1220] sm:h-11 sm:px-4 sm:text-sm"
        >
          <ArrowLeft className="size-4" />
          返回测试
        </Link>
      </header>

      <section className="relative z-20 mx-auto w-full max-w-7xl px-4 pb-14 pt-6 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="inline-flex rounded-md border border-[#334155] bg-[#111827]/70 px-3 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#22C55E]">
              generated persona / {code}
            </p>
            <h1 className="mt-4 text-balance text-[clamp(1.9rem,10vw,5.3rem)] font-black leading-tight tracking-[0.04em] text-slate-100 sm:mt-5 sm:tracking-[0.05em]">
              web人格侧写
            </h1>
          </div>
          <ActionButtons filename={`webti-${code.toLowerCase()}-result.png`} />
        </div>

        <div
          id="webti-result-capture"
          className="rounded-[32px] bg-[#0F172A] p-0 sm:p-2"
        >
          <PersonalityCard result={result} isFallback={isFallback} />

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
            <section className="rounded-[24px] border border-[#334155] bg-[#111827]/82 p-4 backdrop-blur sm:rounded-[28px] sm:p-7">
              <div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7DD3FC]">
                    dimension radar
                  </p>
                  <h2 className="mt-2 text-xl font-black text-slate-100 sm:text-2xl">
                    五维雷达图
                  </h2>
                </div>
              </div>

              <div className="mt-4">
                <RadarChart scores={result.dimensionScores} />
              </div>
            </section>

            <section className="grid gap-5">
              <div className="rounded-[24px] border border-[#334155] bg-[#111827]/82 p-4 backdrop-blur sm:rounded-[28px] sm:p-7">
                <div className="flex items-center gap-3 text-[#A78BFA]">
                  <MessageSquareQuote className="size-6" />
                  <p className="text-xs font-black uppercase tracking-[0.22em]">
                    roast comment
                  </p>
                </div>
                <p className="mt-4 text-pretty text-lg font-black leading-8 text-slate-100 sm:mt-5 sm:text-2xl sm:leading-10">
                  {result.personality.roast}
                </p>
              </div>

              <div className="rounded-[24px] border border-[#334155] bg-[#111827]/82 p-4 backdrop-blur sm:rounded-[28px] sm:p-7">
                <div className="flex items-center gap-3 text-[#22C55E]">
                  <Sparkles className="size-6" />
                  <p className="text-xs font-black uppercase tracking-[0.22em]">
                    upgrade advice
                  </p>
                </div>
                <p className="mt-4 text-pretty text-base font-bold leading-8 text-slate-300 sm:mt-5 sm:text-xl sm:leading-9">
                  {result.personality.advice}
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
