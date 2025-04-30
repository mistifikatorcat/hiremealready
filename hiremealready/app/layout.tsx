import type { Metadata } from "next";
import { Hubot_Sans, IBM_Plex_Mono } from "next/font/google";
import "../styles/globals.css";

const hubotSans = Hubot_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',      // ← you need this
})

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '600'],
  variable: '--font-body',         // ← and this
})

export const metadata: Metadata = {
  title: "Just hire me already",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body>

        {children}
      </body>
    </html>
  );
}
