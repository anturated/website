import { ReactNode } from "react"

export function Divider({ fill = false }: { fill?: Boolean }) {
  return <div className={`border-t-2 border-outline-variant w-[1ch] ${fill ? "grow" : ""}`} />
}

export function Dot() {
  return <span className="text-outline-variant">•</span>
}

export function SepWithText({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="flex flex-row items-center gap-[1ch] italic text-outline" >
    <Dot />
    <Divider fill={true} />
    {children}
    <Divider fill={true} />
    <Dot />
  </div>
}

export function Sep() {

  return <div className="flex flex-row items-center gap-[1ch] italic text-outline" >
    <Dot />
    <Divider fill={true} />
    <Dot />
  </div>
}
