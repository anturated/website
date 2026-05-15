"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BackLink({ className = "" }: Readonly<{ className?: string }>) {
  // this is probably overkill and stupid
  // but i learned i how to do it and i'm gonna do it
  const pathName = usePathname();
  const up = pathName
    .split("/")
    .slice(0, -1) //remove last
    .join("/")
    || "/";

  return <Link
    href={up}
    className={"block text-outline italic hover:underline w-full py-3 " + ` ${className}`}
  >
    {"<- Go back"}
  </Link>
}
