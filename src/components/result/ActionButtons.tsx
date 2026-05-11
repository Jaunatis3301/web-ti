"use client";

import Link from "next/link";
import { Download, RotateCcw } from "lucide-react";
import { toPng } from "html-to-image";

type ActionButtonsProps = {
  captureId?: string;
  filename?: string;
};

export function ActionButtons({
  captureId = "webti-result-capture",
  filename = "webti-result.png",
}: ActionButtonsProps) {
  async function downloadPoster() {
    const node = document.getElementById(captureId);

    if (!node) {
      return;
    }

    const dataUrl = await toPng(node, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: "#0F172A",
    });
    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
  }

  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      <Link
        href="/quiz"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#7DD3FC]/35 bg-[#164E63]/70 px-5 text-sm font-black text-white transition hover:bg-[#111827]"
      >
        <RotateCcw className="size-4" />
        重新测试
      </Link>
      <button
        type="button"
        onClick={downloadPoster}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#334155] bg-[#0B1220]/70 px-5 text-sm font-black text-slate-300 transition hover:text-slate-100"
      >
        <Download className="size-4" />
        下载海报
      </button>
    </div>
  );
}
