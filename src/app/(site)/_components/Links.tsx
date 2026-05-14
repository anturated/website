import Link from "next/link";
import { ReactNode } from "react";

export default function Links() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <MyLink href="/projects">
        projects
      </MyLink>
      {/* <MyLink href="/blog"> */}
      {/*   blog */}
      {/* </MyLink> */}
    </div>
  )
}

function MyLink({ children, href }: Readonly<{ children: ReactNode, href: string }>) {
  return <Link
    className="flex flex-row justify-between w-full p-2 hover:bg-hovered rounded-xl"
    href={href}>
    <span>[</span>
    <span className="text-tertiary">
      {children}
    </span>
    <span>]</span>
  </Link>
}
