import { ReactNode } from "react"

export function Divider({ fill = false }: { fill?: Boolean }) {
  return <div className={`border-t-2 border-outline-variant w-[1ch] ${fill ? "grow" : ""}`} />
}

export function Dot() {
  return <span className="text-outline-variant">•</span>
}

export function SepWithText({ children }: Readonly<{ children: ReactNode }>) {
  return <div
    className="flex flex-row w-full gap-[1ch] text-outline"
  >
    <Dot />
    <Divider />
    {children}
    <Divider />
    <Dot />
  </div>
}
