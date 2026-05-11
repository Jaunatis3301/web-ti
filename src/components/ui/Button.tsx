import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-black transition disabled:cursor-not-allowed disabled:opacity-35",
        variant === "primary"
          ? "border border-[#7DD3FC]/35 bg-[#164E63]/70 text-white hover:bg-[#111827]"
          : "border border-[#334155] bg-[#0B1220]/70 text-slate-300 hover:bg-[#111827]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
