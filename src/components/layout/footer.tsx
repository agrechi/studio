import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-background border-t border-border shadow-sm mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social) => (
            <Link href={social.href} key={social.label} passHref legacyBehavior>
              <a
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <social.icon className="h-6 w-6" />
              </a>
            </Link>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} Pixel Powerhouse. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-1">
          Um paraíso digital para gamers e entusiastas de PC.
        </p>
      </div>
    </footer>
  );
}
