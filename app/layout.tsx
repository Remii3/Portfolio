import type { Metadata } from "next";
import { Rubik as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Remigiusz Woźniak Portfolio",
  description:
    "Welcome to Remigiusz Woźniak's portfolio, where client satisfaction meets cutting-edge solutions. Browse through a variety of projects that showcase a commitment to meeting client needs with precision and creativity. Whether it's web development, design, or technology consulting, see how each solution is tailored to deliver exceptional results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontSans.variable
        )}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {children}
      </body>
    </html>
  );
}
