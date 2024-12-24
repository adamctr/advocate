import { ReactNode } from "react";

export default function Section1({ children }: { children: ReactNode }) {
  return <div className="max-w-[1024px] mx-auto px-8 my-16">{children}</div>;
}
