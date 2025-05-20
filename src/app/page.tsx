import Image from 'next/image';
import ArticleCard from '@/components/shared/article-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  const recentArticles = [
    {
      title: 'Top 5 Shaders para Minecraft',
      description: 'Transforme seus gráficos no Minecraft com estes shaders incríveis que elevam a experiência visual a outro nível.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Minecraft com shaders',
      dataAiHint: 'minecraft shaders',
      link: '#', // Placeholder link
    },
    {
      title: 'Guia de Placas de Vídeo 2025',
      description: 'Descubra as melhores GPUs para seu setup gamer em 2025, desde opções de entrada até as mais potentes.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Placa de vídeo gamer',
      dataAiHint: 'graphics card',
      link: '#', // Placeholder link
    },
    {
      title: 'Construindo sua Base Perfeita no Survival',
      description: 'Dicas e truques essenciais para planejar e construir uma base funcional e segura no modo Survival do Minecraft.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Base de Minecraft no modo Survival',
      dataAiHint: 'minecraft base',
      link: '#', // Placeholder link
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Mundo de Minecraft em pixels"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="z-0 filter brightness-50"
          data-ai-hint="minecraft landscape"
        />
        <div className="relative z-10 p-6 bg-black/50 rounded-lg shadow-xl max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight font-mono text-primary">
            Desvendando o Mundo dos Pixels e o Poder das Máquinas
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-foreground/90">
            Seu guia completo para Minecraft, Five Nights at Freddy's, e os melhores equipamentos de PC.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <Link href="/#recent-articles">Explore Agora</Link>
          </Button>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section id="recent-articles" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-16 text-primary font-mono">
            Artigos Recentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                imageAlt={article.imageAlt}
                dataAiHint={article.dataAiHint}
                link={article.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
