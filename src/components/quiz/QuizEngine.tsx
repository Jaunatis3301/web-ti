"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";
import { calculateResult } from "@/lib/calculate";
import { useQuizStore } from "@/hooks/useQuizStore";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { StepProgress } from "@/components/quiz/StepProgress";

export function QuizEngine() {
  const router = useRouter();
  const {
    answers,
    answeredCount,
    answerQuestion,
    currentQuestions,
    currentStepAnswered,
    dimensions,
    goNext,
    goPrev,
    isFirstStep,
    isLastStep,
    stepIndex,
    totalQuestions,
  } = useQuizStore();

  function submit() {
    const result = calculateResult(answers);
    sessionStorage.setItem("webti:last-result", JSON.stringify(result));
    router.push(`/result/${result.personality.code.toLowerCase()}`);
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
      <StepProgress
        dimensions={dimensions}
        currentIndex={stepIndex}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
      />

      <motion.section
        key={stepIndex}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mt-8 overflow-hidden rounded-[28px] border border-[#334155] bg-[#111827]/82 backdrop-blur"
      >
        <div className="px-5 sm:px-8">
          {currentQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              value={answers[question.id]}
              onChange={answerQuestion}
            />
          ))}
        </div>
      </motion.section>

      <div className="sticky bottom-4 z-20 mt-8 rounded-2xl border border-[#334155] bg-[#0F172A]/88 p-4 backdrop-blur">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <button
            type="button"
            onClick={goPrev}
            disabled={isFirstStep}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-[#334155] px-5 text-sm font-black text-slate-300 transition hover:bg-[#111827] disabled:cursor-not-allowed disabled:opacity-35 sm:w-auto"
          >
            <ArrowLeft className="size-4" />
            上一步
          </button>

          <div className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            {currentStepAnswered ? "CURRENT STEP READY" : "SELECT ALL 6 ANSWERS"}
          </div>

          {isLastStep ? (
            <button
              type="button"
              onClick={submit}
              disabled={!currentStepAnswered}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-[#A78BFA]/45 bg-[#312E81]/70 px-5 text-sm font-black text-white transition hover:bg-[#111827] disabled:cursor-not-allowed disabled:opacity-35 sm:w-auto"
            >
              生成结果
              <Check className="size-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              disabled={!currentStepAnswered}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-[#7DD3FC]/35 bg-[#164E63]/70 px-5 text-sm font-black text-white transition hover:bg-[#111827] disabled:cursor-not-allowed disabled:opacity-35 sm:w-auto"
            >
              下一组
              <ArrowRight className="size-4" />
            </button>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.location.reload()}
        className="mx-auto mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-300"
      >
        <RotateCcw className="size-4" />
        reset session
      </button>
    </div>
  );
}
