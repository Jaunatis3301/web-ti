import Link from "next/link";
import { ArrowLeft, Binary } from "lucide-react";
import { QuizEngine } from "@/components/quiz/QuizEngine";

export default function QuizPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#0F172A] text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:7px_7px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(135deg,transparent_0_48%,#fff_49%_51%,transparent_52%)] [background-size:38px_38px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_20%_0%,rgba(125,211,252,0.14),transparent_36%),radial-gradient(circle_at_76%_8%,rgba(167,139,250,0.16),transparent_34%)]" />

      <header className="relative z-30 flex min-h-24 flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-10 lg:px-14">
        <Link href="/" className="flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-md border border-[#334155] bg-[#111827]/80">
            <Binary className="size-5 text-[#A78BFA]" strokeWidth={2} />
          </span>
          <span
            className="text-2xl font-black tracking-[0.16em] text-slate-100"
            style={{
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            }}
          >
            WebTI
          </span>
        </Link>

        <Link
          href="/"
          className="inline-flex h-11 items-center gap-2 rounded-md border border-[#334155] bg-[#111827]/70 px-4 text-sm font-black text-slate-300 transition hover:bg-[#0B1220]"
        >
          <ArrowLeft className="size-4" />
          返回开始页
        </Link>
      </header>

      <section className="relative z-20 mx-auto max-w-5xl px-5 pt-8 text-center">
        <p className="mx-auto inline-flex rounded-md border border-[#334155] bg-[#111827]/70 px-3 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#7DD3FC]">
          web behavior scale
        </p>
        <h1
          className="mt-5 text-balance text-[clamp(2.2rem,5vw,5.2rem)] font-black leading-tight tracking-[0.05em]"
          style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
        >
          check your webti！
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-balance text-base font-semibold leading-8 text-slate-300 sm:text-lg">
          根据真实上网习惯作答，没有标准答案，在二进制的深处，遇见你的数字镜像。
        </p>
      </section>

      <QuizEngine />
    </main>
  );
}
