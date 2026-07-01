import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Collab Notes for OSS",
  description: "Collaborative note-taking for open source teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
