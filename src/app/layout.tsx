import '@fontsource/maple-mono'
import '@fontsource/maple-mono/400-italic'
import "@/styles/globals.css";
import type { Metadata } from "next";

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
