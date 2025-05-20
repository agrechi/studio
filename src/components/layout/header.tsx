"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gamepad2, Menu, Home, Ghost, PcCase, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Início', icon: Home },
  { href: '/minecraft', label: 'Minecraft', icon: Gamepad2 },
  { href: '/fnaf', label: 'Five Nights at Freddy\'s', icon: Ghost },
  { href: '/pc-gaming', label: 'PC Gaming', icon: PcCase },
  { href: '/contact', label: 'Contato', icon: Mail },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const NavLink = ({ href, label, icon: Icon, mobile = false }: { href: string; label: string; icon: React.ElementType; mobile?: boolean }) => (
    <Link href={href} passHref legacyBehavior>
      <a
        className={cn(
          'flex items-center gap-2 transition-colors duration-300 ease-in-out',
          mobile ? 'p-3 rounded-md hover:bg-accent/20 text-lg' : 'nav-link text-sm md:text-base',
          pathname === href ? (mobile ? 'bg-accent/30 text-accent-foreground' : 'active-nav-link') : (mobile ? 'hover:text-accent-foreground' : 'hover:text-accent')
        )}
        onClick={() => mobile && setIsMobileMenuOpen(false)}
      >
        <Icon className={cn("h-5 w-5", mobile ? "mr-3" : "")} />
        {label}
      </a>
    </Link>
  );

  if (!isMounted) {
    return ( // Render a placeholder or simplified header during SSR/hydration mismatch phase
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" passHref legacyBehavior>
            <a className="text-2xl md:text-3xl font-bold font-mono text-primary hover:text-primary/80 transition-colors">
              Pixel Powerhouse
            </a>
          </Link>
          <div className="h-8 w-8 bg-muted rounded-md animate-pulse md:hidden"></div>
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4"></nav>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" passHref legacyBehavior>
          <a className="text-2xl md:text-3xl font-bold font-mono text-primary hover:text-primary/80 transition-colors">
            Pixel Powerhouse
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-0">
              <SheetHeader className="p-4 border-b border-border">
                <div className="flex justify-between items-center">
                   <SheetTitle className="text-xl font-mono text-primary">Navegação</SheetTitle>
                   <SheetClose asChild>
                     <Button variant="ghost" size="icon" aria-label="Fechar menu">
                       <X className="h-5 w-5" />
                     </Button>
                   </SheetClose>
                </div>
              </SheetHeader>
              <nav className="flex flex-col space-y-2 p-4">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} mobile />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
