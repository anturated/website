export function Divider({ fill = false }: { fill?: Boolean }) {
  return <div className={`border-t-2 border-outline-variant w-[1ch] ${fill ? "grow" : ""}`} />
}

export function Dot() {
  return <span className="text-outline-variant">•</span>
}
