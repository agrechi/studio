
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"

// GeistSans and GeistMono are objects, not functions to be called.
// Their 'variable' property can be accessed directly.

export const metadata: Metadata = {
  title: '1001 Games',
  description: 'Seu guia completo para Minecraft, Five Nights at Freddy\'s, PC Gaming e os melhores equipamentos de PC.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased flex flex-col min-h-screen`}>
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
