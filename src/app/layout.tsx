import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { MeteorBackground } from "@/components/ui/MeteorBackground";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  fallback: ["Fira Code", "Menlo", "Consolas", "monospace"],
});

export const metadata: Metadata = {
  title: "WebTI 网络人格自检",
  description: "一次关于数字人格、信息习惯与上网方式的轻量探索。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={jetBrainsMono.variable}>
      <body>
        <MeteorBackground />
        {children}
      </body>
    </html>
  );
}
