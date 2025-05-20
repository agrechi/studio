'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, User, Bot } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from 'react';

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form is non-functional for now.
    // You would typically handle form submission here (e.g., send data to an API).
    toast({
      title: "Mensagem Enviada (Simulação)",
      description: "Seu formulário foi 'enviado'. Esta é uma demonstração estática.",
      variant: "default",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-primary font-mono">
        Entre em Contato
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center gap-2 font-mono text-primary-foreground">
              <MessageSquare className="h-6 w-6 text-accent" />
              Envie sua Mensagem
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Tem alguma dúvida, sugestão ou quer bater um papo? Preencha o formulário abaixo.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/90 flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" /> Nome
                </Label>
                <Input id="name" type="text" placeholder="Seu nome completo" required className="bg-input text-foreground placeholder:text-muted-foreground/70" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/90 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" /> Email
                </Label>
                <Input id="email" type="email" placeholder="seuemail@example.com" required className="bg-input text-foreground placeholder:text-muted-foreground/70" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground/90 flex items-center gap-2">
                 <Bot className="h-4 w-4 text-accent" /> Mensagem
                </Label>
                <Textarea
                  id="message"
                  placeholder="Digite sua mensagem aqui..."
                  required
                  className="min-h-[120px] bg-input text-foreground placeholder:text-muted-foreground/70"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Enviar Mensagem
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="space-y-8">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold font-mono text-primary-foreground">Nossas Redes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Conecte-se conosco através de outros canais:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-foreground/90">Email:</span>
                  <a href="mailto:contato@pixelpowerhouse.com" className="text-accent hover:underline">
                    contato@pixelpowerhouse.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M21.12.52a.6.6 0 0 0-.72.12L2.88 16.44a.59.59 0 0 0 .24.9h4.48a.6.6 0 0 0 .56-.32l1.92-3.04a.6.6 0 0 1 .88-.2L14.88 16a.6.6 0 0 0 .56.08l5.36-2.96a.6.6 0 0 0 .32-.8V1.12a.6.6 0 0 0-.6-.6Z"/><path d="m5.28 16.68-2.16 2.96a.6.6 0 0 0 .24.9h12.96a.6.6 0 0 0 .56-.32l.64-1.04"/></svg>
                  <span className="text-foreground/90">Discord:</span>
                  <span className="text-accent">PixelPowerhouse#1234 (Placeholder)</span>
                </div>
                 <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                   <span className="text-foreground/90">LinkedIn:</span>
                   <a href="#" className="text-accent hover:underline">Pixel Powerhouse (Placeholder)</a>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-muted-foreground text-sm">
            Estamos ansiosos para ouvir de você!
          </p>
        </div>
      </div>
    </div>
  );
}
