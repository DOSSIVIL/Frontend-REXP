import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { Footer } from "../components";
import Header from "../components/Header";

// ✅ Configuration optimisée des polices
const orbitron = Orbitron({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ Métadonnées SEO améliorées
export const metadata: Metadata = {
  title: {
    default: "REXP - Radar d'Exposition Publique",
    template: "%s | REXP"
  },
  description: "Plateforme intelligente de monitoring et d'analyse de votre exposition publique en temps réel",
  keywords: ["exposition publique", "monitoring", "analyse", "réputation", "surveillance", "IA"],
  authors: [{ name: "REXP Team" }],
  creator: "REXP",
  publisher: "REXP",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "REXP",
    title: "REXP - Radar d'Exposition Publique",
    description: "Plateforme intelligente de monitoring et d'analyse de votre exposition publique",
  },
  twitter: {
    card: "summary_large_image",
    title: "REXP - Radar d'Exposition Publique",
    description: "Plateforme intelligente de monitoring et d'analyse de votre exposition publique",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Script pour éviter le flash de thème (FOUC) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable}
                    antialiased font-sans transition-colors duration-300`}
      >
        {/* Wrapper principal avec gestion du thème */}
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50
                        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
                        transition-colors duration-300">

          {/* Header sticky avec z-index élevé */}
          <Header />

          {/* Contenu principal avec padding responsive et scroll fluide */}
          <main className="flex-1 w-full flex flex-col items-center justify-start
                           px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12
                           scroll-smooth">
            {/* Container pour limiter la largeur du contenu */}
            <div className="w-full max-w-7xl">
              {children}
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>

        {/* Script pour la gestion du scroll fluide */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.style.scrollBehavior = 'smooth';
            `,
          }}
        />
      </body>
    </html>
  );
}