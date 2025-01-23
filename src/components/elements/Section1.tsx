import { ReactNode } from "react";

export default function Section1({ className, children, id }: { children: ReactNode, className?:string, id?:string }) {
  return <div id={id} className={`max-w-[1024px]  relative mx-auto px-8 my-16 md:my-16 ${className}`}>{children}</div>;
}
