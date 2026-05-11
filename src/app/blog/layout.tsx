import Header from "@/components/Header";
import { ReactNode } from "react";


export default function SiteLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return <>
    <Header />
    <main className="min-h-screen max-w-2xl mx-auto">
      {children}
    </main>
  </>
}

// max-w-[80wv] md:max-w-[75ch] lg:max-w-[85ch]
