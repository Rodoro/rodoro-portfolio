import type { Metadata } from "next";
import { Anonymous_Pro, Bungee_Outline } from "next/font/google";
import "./globals.css";
import Header from "@/containers/layout/Header";
import StairTransition from "@/containers/transition/StairTransition";
import PageTransition from "@/containers/transition/PageTransition";

const anonymous = Anonymous_Pro({
  subsets: ["latin"],
  weight: "700",
  variable: '--font-anonymous'
})

const bungee = Bungee_Outline({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-bungee'
})

export const metadata: Metadata = {
  title: "Danya | Porfolio",
  description: "Придумаю позже...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${anonymous.variable} ${bungee.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
