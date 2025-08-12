import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WikiTech - Enciclopédia de Tecnologias",
  description: "Projeto acadêmico sobre frameworks, bibliotecas e tecnologias web",
  icons: {
    icon: '/favicon.ico',
  },
  title: "wiki-tech",
  description: "Projeto de estudo e desenvolvimento de uma wiki sobre tecnologia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
