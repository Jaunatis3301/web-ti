import type { Question, ScoreValue } from "@/types";

const scaleOptions: {
  value: ScoreValue;
  label: string;
  size: string;
  color: string;
}[] = [
  {
    value: 5,
    label: "完全符合",
    size: "size-10 sm:size-16",
    color: "border-[#67D391] text-[#67D391]",
  },
  {
    value: 4,
    label: "比较符合",
    size: "size-9 sm:size-14",
    color: "border-[#7DD3FC] text-[#7DD3FC]",
  },
  {
    value: 3,
    label: "一般",
    size: "size-7 sm:size-10",
    color: "border-slate-500 text-slate-400",
  },
  {
    value: 2,
    label: "不太符合",
    size: "size-9 sm:size-14",
    color: "border-[#C4B5FD] text-[#C4B5FD]",
  },
  {
    value: 1,
    label: "完全不符合",
    size: "size-10 sm:size-16",
    color: "border-[#A78BFA] text-[#A78BFA]",
  },
];

type QuestionCardProps = {
  question: Question;
  value?: ScoreValue;
  onChange: (questionId: number, value: ScoreValue) => void;
};

export function QuestionCard({ question, value, onChange }: QuestionCardProps) {
  return (
    <article className="border-b border-[#334155]/70 py-7 first:pt-3 last:border-b-0 sm:py-8">
      <div className="flex items-start gap-3 sm:gap-4">
        <span className="mt-1 rounded-md border border-[#334155] bg-[#0B1220] px-2 py-1 text-[11px] font-black text-[#7DD3FC]">
          {String(question.id).padStart(2, "0")}
        </span>
        <h2 className="text-balance text-base font-black leading-7 text-slate-100 sm:text-xl sm:leading-8">
          {question.text}
        </h2>
      </div>

      <div className="mt-7 grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-4">
        <span className="hidden text-base font-black text-[#67D391] sm:block">同意</span>
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {scaleOptions.map((option) => {
            const selected = value === option.value;

            return (
              <button
                key={option.value}
                type="button"
                aria-label={`${question.id} - ${option.label}`}
                title={option.label}
                onClick={() => onChange(question.id, option.value)}
                className={`${option.size} grid shrink-0 place-items-center rounded-full border-[2.5px] text-[10px] font-black transition duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#7DD3FC]/15 ${
                  selected
                    ? "border-transparent bg-gradient-to-br from-[#22C55E] to-[#00E5FF] text-transparent shadow-[0_0_26px_rgba(0,229,255,0.26)]"
                    : `bg-transparent ${option.color}`
                }`}
              >
                <span className="sr-only">{option.value}</span>
              </button>
            );
          })}
        </div>
        <span className="hidden text-base font-black text-[#C4B5FD] sm:block">不同意</span>
      </div>

      <div className="mt-4 flex justify-between text-xs font-bold text-slate-500 sm:hidden">
        <span>同意</span>
        <span>不同意</span>
      </div>
    </article>
  );
}
