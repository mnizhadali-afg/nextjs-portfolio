import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ali Mousavi | 👩🏽‍💻 Full-Stack Developer | Munich",
  description: "Full-Stack Developer 👩🏽‍💻 Munich",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`spaceGrotesk.className bg-farbe-50`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
