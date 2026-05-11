"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Binary,
  BookOpen,
  Coffee,
  Monitor,
  Wifi,
} from "lucide-react";

const characters = [
  {
    name: "灵感漫游者",
    src: "/avatars/场景04-cut.png",
    label: "今天晚上吃什么呢",
    className:
      "block left-[2%] bottom-[24%] w-[52%] max-w-[230px] md:left-[2.5%] md:bottom-[25.5%] md:w-[31%] md:max-w-[390px]",
    imageClassName: "object-contain object-bottom",
    shadowClassName: "bottom-[6%] w-[52%]",
    delay: 0.1,
  },
  {
    name: "赛博法医",
    src: "/avatars/场景02-cut.png",
    label: "[正在排查 404 错误...]",
    className:
      "block left-[43%] bottom-[2%] w-[54%] max-w-[240px] md:left-[31%] md:bottom-[3%] md:w-[25%] md:max-w-[310px]",
    imageClassName: "object-contain object-bottom",
    shadowClassName: "bottom-[2%] w-[60%]",
    delay: 0.22,
  },
  {
    name: "算法共生体",
    src: "/avatars/场景01-cut.png",
    label: "[推荐流正在重新校准...]",
    className:
      "hidden md:block md:right-[18%] md:bottom-[0%] md:w-[27%] md:max-w-[335px]",
    imageClassName: "object-contain object-bottom",
    shadowClassName: "bottom-[9%] w-[68%]",
    delay: 0.34,
  },
  {
    name: "协议审判官",
    src: "/avatars/场景03-cut.png",
    label: "[正在审理异常请求...]",
    className:
      "hidden md:block md:right-[-2%] md:bottom-[-3%] md:w-[18%] md:max-w-[230px]",
    imageClassName: "object-contain object-bottom",
    shadowClassName: "bottom-[3%] w-[56%]",
    delay: 0.46,
  },
];

function PaperTexture() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:7px_7px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(135deg,transparent_0_48%,#fff_49%_51%,transparent_52%)] [background-size:38px_38px]" />
    </>
  );
}

function WallInterfaces() {
  return (
    <div className="absolute left-[36%] top-[16%] z-10 hidden h-[30%] w-[32%] md:block">
      <div className="absolute left-0 top-2 h-24 w-44 rounded-md border border-[#7DD3FC]/25 bg-[#172033]/35">
        <div className="m-4 h-2 w-20 rounded-full bg-[#A78BFA]/35" />
        <div className="mx-4 mt-5 h-px w-32 bg-[#7DD3FC]/30" />
        <div className="mx-4 mt-4 h-px w-24 bg-[#7DD3FC]/20" />
      </div>
      <div className="absolute left-36 top-16 h-28 w-56 rounded-md border border-[#A78BFA]/20 bg-[#111827]/35">
        <div className="m-4 grid grid-cols-3 gap-2">
          <span className="h-6 rounded border border-[#7DD3FC]/20" />
          <span className="h-6 rounded border border-[#7DD3FC]/20" />
          <span className="h-6 rounded border border-[#7DD3FC]/20" />
        </div>
        <div className="mx-4 mt-4 h-px bg-[#A78BFA]/25" />
      </div>
      <div className="absolute left-16 top-40 h-20 w-36 rounded-md border border-[#7DD3FC]/20 bg-[#0F172A]/40">
        <div className="m-4 h-2 w-20 bg-[#7DD3FC]/25" />
        <div className="mx-4 mt-4 h-px bg-[#A78BFA]/20" />
      </div>
    </div>
  );
}

function NightWindow() {
  return (
    <div className="absolute left-[5%] top-[14%] z-10 h-[46%] w-[26%] rounded-t-[34px] border border-[#334155] bg-[#08111f]">
      <div className="absolute inset-4 rounded-t-[24px] border border-[#64748B]/35 bg-[#0B1324]" />
      <div className="absolute left-1/2 top-4 h-[calc(100%-2rem)] w-px bg-[#334155]" />
      <div className="absolute left-4 right-4 top-1/2 h-px bg-[#334155]" />
      <span className="absolute left-[22%] top-[22%] size-1.5 rounded-full bg-[#C4B5FD]" />
      <span className="absolute left-[70%] top-[17%] size-1 rounded-full bg-[#67E8F9]" />
      <span className="absolute left-[54%] top-[36%] size-1.5 rounded-full bg-[#94A3B8]" />
      <span className="absolute left-[31%] top-[62%] size-1 rounded-full bg-[#C4B5FD]" />
      <div className="absolute -bottom-6 left-1/2 h-9 w-[86%] -translate-x-1/2 rounded-md bg-[#1E293B]" />
      <div className="absolute -bottom-9 left-[9%] h-3 w-[72%] skew-x-[-24deg] bg-[#293548]" />
    </div>
  );
}

function Bookshelf() {
  const books = [
    "h-14 bg-[#334155]",
    "h-20 bg-[#475569]",
    "h-12 bg-[#64748B]",
    "h-16 bg-[#312E81]",
    "h-10 bg-[#1F2937]",
  ];

  return (
    <div className="absolute right-[4%] top-[22%] z-10 hidden h-[42%] w-[18%] rounded-t-md border border-[#334155] bg-[#111827] md:block">
      {[0, 1, 2].map((row) => (
        <div
          key={row}
          className="absolute left-4 right-4 h-px bg-[#334155]"
          style={{ top: `${28 + row * 25}%` }}
        />
      ))}
      <div className="absolute inset-x-5 top-8 flex items-end gap-2">
        {books.map((book, index) => (
          <span key={index} className={`w-5 rounded-sm ${book}`} />
        ))}
      </div>
      <div className="absolute inset-x-5 top-[38%] flex items-end gap-2">
        {books
          .slice()
          .reverse()
          .map((book, index) => (
            <span key={index} className={`w-5 rounded-sm ${book}`} />
          ))}
      </div>
      <div className="absolute inset-x-5 bottom-8 flex items-center gap-3 text-[#64748B]">
        <BookOpen className="size-8" strokeWidth={1.6} />
        <Coffee className="size-7" strokeWidth={1.6} />
      </div>
    </div>
  );
}

function StudioCharacter({
  character,
  index,
}: {
  character: (typeof characters)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: character.delay }}
      className={`group absolute z-30 aspect-square ${character.className}`}
    >
      <div
        className={`absolute left-1/2 h-7 -translate-x-1/2 rounded-full bg-black/24 blur-[1px] ${character.shadowClassName}`}
      />
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 4.2 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-full w-full drop-shadow-[0_18px_22px_rgba(0,0,0,0.22)]"
      >
        <Image
          src={character.src}
          alt={character.name}
          width={1254}
          height={1254}
          className={`h-full w-full ${character.imageClassName}`}
          style={{
            filter: "brightness(0.9) contrast(1.1) saturate(0.86)",
          }}
          sizes="(min-width: 1024px) 34vw, 44vw"
          priority={index < 2}
        />
      </motion.div>
      <div className="pointer-events-none absolute -top-5 left-1/2 hidden min-w-52 -translate-x-1/2 -translate-y-3 rounded-md border border-[#7DD3FC]/25 bg-[#0B1220]/86 px-3 py-2 text-center text-[11px] font-bold tracking-[0.08em] text-[#BAE6FD] opacity-0 backdrop-blur transition duration-300 group-hover:-translate-y-5 group-hover:opacity-100 md:block">
        {character.label}
      </div>
    </motion.div>
  );
}

function StudioScene() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[52%] overflow-hidden md:h-[68%]">
      <div className="absolute inset-x-0 top-0 h-[58%] bg-[#111827]" />
      <div className="absolute inset-x-0 bottom-0 h-[56%] bg-[#0B1220] [clip-path:polygon(0_18%,100%_0,100%_100%,0_100%)]" />
      <div className="absolute left-[4%] top-[58%] h-[31%] w-[73%] skew-x-[-18deg] bg-[#162033]" />
      <div className="absolute right-[0%] bottom-[6%] h-[24%] w-[40%] -skew-x-12 bg-[#1F2937]" />
      <div className="absolute right-[7%] bottom-[10%] h-[16%] w-[30%] -skew-x-12 bg-[#273244]" />
      <div className="absolute left-[39%] top-[53%] h-px w-[34%] -rotate-3 bg-[#334155]" />
      <div className="absolute left-[45%] top-[56%] h-px w-[30%] -rotate-3 bg-[#334155]" />
      <svg
        className="absolute left-[37%] top-[38%] z-20 hidden h-[28%] w-[27%] md:block"
        viewBox="0 0 360 220"
        aria-hidden="true"
      >
        <path
          d="M20 34 C98 60 110 110 166 126 S258 120 332 178"
          fill="none"
          stroke="#7DD3FC"
          strokeWidth="2"
          strokeDasharray="8 12"
          opacity="0.32"
        />
        <path
          d="M44 78 C112 86 144 128 194 146 S260 154 326 198"
          fill="none"
          stroke="#A78BFA"
          strokeWidth="2"
          strokeDasharray="5 10"
          opacity="0.22"
        />
      </svg>
      <NightWindow />
      <WallInterfaces />
      <Bookshelf />

      <div className="absolute left-[46%] top-[41%] z-20 hidden items-center gap-2 rounded-md border border-[#7DD3FC]/20 bg-[#0B1220]/60 px-3 py-2 text-[#7DD3FC] md:flex">
        <Monitor className="size-5" strokeWidth={1.6} />
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">
          web window
        </span>
      </div>
      <div className="absolute left-[23%] top-[48%] z-20 hidden rounded-full border border-[#A78BFA]/20 bg-[#0B1220]/55 p-3 text-[#C4B5FD] md:block">
        <Wifi className="size-8" strokeWidth={1.7} />
      </div>

      {characters.map((character, index) => (
        <StudioCharacter
          key={character.name}
          character={character}
          index={index}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#0F172A] text-slate-100">
      <PaperTexture />
      <header className="relative z-40 flex min-h-20 items-center justify-between px-5 py-4 sm:px-10 lg:px-14">
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

        <div className="hidden rounded-md border border-[#334155] bg-[#111827]/70 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 sm:block">
          NIGHT STUDIO / SCENE 03
        </div>
      </header>

      <section className="relative min-h-[calc(100dvh-5rem)]">
        <div className="relative z-40 mx-auto flex max-w-5xl flex-col items-center px-5 pt-1 text-center sm:px-6 sm:pt-6 lg:pt-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 rounded-md border border-[#334155] bg-[#111827]/70 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#7DD3FC] sm:mb-5 sm:text-xs sm:tracking-[0.24em]"
          >
            digital midnight workspace
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="max-w-4xl text-balance text-[clamp(1.75rem,6vw,4.25rem)] font-black leading-tight tracking-[0.04em] text-slate-100 sm:tracking-[0.05em]"
            style={{
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            }}
          >
            现在，关掉多余的标签页，你的自检任务已就绪。
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-4 max-w-3xl text-balance text-sm font-semibold leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8"
          >
            这是你在赛博荒野中的一次“协议自检”。当噪音退去，深夜的工作台前，留下的只有最真实的数字人格。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
          >
            <Link
              href="/quiz"
              className="group mt-6 inline-flex h-12 items-center justify-center gap-3 rounded-full border border-[#A78BFA]/40 bg-[#312E81]/65 px-6 text-sm font-black text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-[#111827] focus:outline-none focus:ring-4 focus:ring-[#7DD3FC]/15 sm:mt-8 sm:h-14 sm:px-8 sm:text-base"
            >
              启动自检
              <ArrowRight className="size-5 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <StudioScene />
      </section>
    </main>
  );
}
