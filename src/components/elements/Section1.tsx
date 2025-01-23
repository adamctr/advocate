import { ReactNode } from "react";

export default function Section1({ className, children, id }: { children: ReactNode, className?:string, id?:string }) {
  return <div id={id} className={`max-w-[1024px]  relative mx-auto px-4 my-8 md:my-28 ${className}`}>{children}</div>;
}
