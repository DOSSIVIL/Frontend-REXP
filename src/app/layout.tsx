import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "../components";
import Header from "../components/Header";
import { Orbitron } from "next/font/google";

// ✅ Import correct de la police Orbitron via Next/font (meilleure perf qu’un <link>)
const orbitron = Orbitron({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radar d'Exposition Publique",
  description: "Application Next.js avec Header et Footer globaux",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} 
                    h-screen w-screen overflow-x-hidden font-sans`}
      >
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Header sticky pour rester visible en haut sur mobile */}
          <Header/>

          {/* Contenu principal responsive */}
          <main className="flex-1 w-full flex flex-col items-center justify-start 
                           p-4 sm:p-6 md:p-8 lg:p-12">
            {children}
          </main>

          {/* Footer fixé en bas si peu de contenu */}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
