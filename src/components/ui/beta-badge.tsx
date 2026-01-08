import React from "react";

interface BetaBadgeProps {
  text?: string;
}

export function BetaBadge({ text = "Beta" }: BetaBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-sm bg-[#EFEFFF]">
      <img src="/icons/Vector.svg" alt="" className="w-3 h-3" />
      <span className="text-xs font-medium text-[#625AFA]">{text}</span>
    </div>
  );
}