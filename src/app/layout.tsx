import localFont from 'next/font/local'
import "@/styles/globals.css";
import type { Metadata } from "next";

const mapleMono = localFont({
  src: [
    {
      path: '../../node_modules/@fontsource/maple-mono/files/maple-mono-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../node_modules/@fontsource/maple-mono/files/maple-mono-latin-400-italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
})

export const metadata: Metadata = {
  title: "anturated",
  description: "websiteb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
