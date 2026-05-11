import type { Dimension } from "@/types";

type StepProgressProps = {
  dimensions: Dimension[];
  currentIndex: number;
  answeredCount: number;
  totalQuestions: number;
};

export function StepProgress({
  dimensions,
  currentIndex,
  answeredCount,
  totalQuestions,
}: StepProgressProps) {
  const percent = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="rounded-2xl border border-[#334155] bg-[#111827]/75 p-3 backdrop-blur sm:p-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-400 sm:gap-4 sm:text-xs sm:tracking-[0.18em]">
        <span>
          STEP {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(dimensions.length).padStart(2, "0")}
        </span>
        <span>
          {answeredCount} / {totalQuestions} answered
        </span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#0B1220]">
        <div
          className="h-full rounded-full bg-[#A78BFA] transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="mt-4 grid grid-cols-5 gap-1.5 sm:gap-2">
        {dimensions.map((dimension, index) => {
          const active = index === currentIndex;
          const completed = index < currentIndex;

          return (
            <div
              key={dimension.id}
              className={`rounded-md border px-1.5 py-2 text-center text-[10px] font-black uppercase tracking-[0.12em] transition sm:px-2 sm:tracking-[0.16em] ${
                active
                  ? "border-[#7DD3FC]/50 bg-[#7DD3FC]/12 text-[#BAE6FD]"
                  : completed
                    ? "border-[#A78BFA]/45 bg-[#A78BFA]/10 text-[#C4B5FD]"
                    : "border-[#334155] bg-[#0B1220]/50 text-slate-500"
              }`}
            >
              {dimension.id}
            </div>
          );
        })}
      </div>
    </div>
  );
}
