"use client";

import { motion } from "framer-motion";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
} from "recharts";
import type { DimensionScores } from "@/types";

const dimensionLabels: Record<keyof DimensionScores, string> = {
  A: "A 信息驱动",
  B: "B 数字交互",
  C: "C 技术安全",
  D: "D 创作共享",
  E: "E 自我管理",
};

type RadarChartProps = {
  scores: DimensionScores;
};

export function RadarChart({ scores }: RadarChartProps) {
  const data = Object.entries(scores).map(([key, value]) => ({
    dimension: dimensionLabels[key as keyof DimensionScores],
    score: value,
    fullMark: 30,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="h-[240px] w-full sm:h-[360px] lg:h-[420px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data} outerRadius="72%">
          <PolarGrid gridType="polygon" stroke="#334155" strokeOpacity={0.72} />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{
              fill: "#CBD5E1",
              fontSize: 10,
              fontFamily:
                "var(--font-jetbrains-mono), JetBrains Mono, Fira Code, monospace",
              fontWeight: 800,
            }}
            tickLine={false}
          />
          <Radar
            dataKey="score"
            stroke="#00E5FF"
            strokeWidth={2.5}
            fill="#22C55E"
            fillOpacity={0.24}
            dot={{
              r: 3,
              fill: "#0F172A",
              stroke: "#00E5FF",
              strokeWidth: 2,
            }}
            isAnimationActive
            animationBegin={120}
            animationDuration={900}
            animationEasing="ease-out"
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
