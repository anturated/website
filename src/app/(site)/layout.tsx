import { ReactNode } from "react";


export default function SiteLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return <main className="flex flex-col max-w-2xl min-h-screen min-mx-[2ch] mx-auto px-4">
    {children}
  </main>
}

