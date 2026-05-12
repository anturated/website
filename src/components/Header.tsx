"use client"

import Link from "next/link"
import { ReactNode } from "react"
import { Divider, Dot } from "./Dividers"

export default function Header() {
  return (
    <div className="flex flex-row justify-between gap-[1ch] items-center max-w-3xl h-15 mx-auto font-semibold select-none">
      <Dot />
      <Divider />

      <Link href="/" className="text-primary" >
        anturated
      </Link>

      <Divider fill={true} />

      <nav className="flex flex-row items-center justify-between gap-[1ch]">
        <StyledLink href="/blog">blog</StyledLink>
        <Divider />
        <StyledLink href="/projects">projects</StyledLink>
        <Divider />
        <StyledLink href="/contact">contact</StyledLink>
      </nav>

      <Divider />
      <Dot />
    </div>
  )
}

function StyledLink({ href, children }: { href: string, children: ReactNode }) {
  return <Link href={href} className="text-secondary" >
    {children}
  </Link>
}
