
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"

const geistSansFont = GeistSans({
  variable: '--font-geist-sans',
});

const geistMonoFont = GeistMono({
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Pixel Powerhouse',
  description: 'Seu guia completo para Minecraft, Five Nights at Freddy\'s, PC Gaming e os melhores equipamentos de PC.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geistSansFont.variable} ${geistMonoFont.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-20 md:pt-24"> {/* Adjusted padding for header height */}
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
