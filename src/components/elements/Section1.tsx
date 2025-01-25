import { ReactNode } from "react";

export default function Section1({ className, children, id }: { children: ReactNode, className?:string, id?:string }) {
  return <div id={id} className={`max-w-[1024px] z-10  py-4 w-full h-full relative mx-auto
   ${className}`}>{children}</div>;
}


