import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function PcGamingPage() {
  const topics = [
    {
      title: 'Escolhendo a CPU Certa para seu PC Gamer',
      description: 'Entenda as especificações e compare os processadores Intel e AMD para fazer a melhor escolha para seu orçamento e necessidades de jogo.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'CPU para PC Gamer',
      dataAiHint: 'gaming CPU processor',
    },
    {
      title: 'Comparativo de GPUs: Nvidia vs AMD em 2025',
      description: 'Análise detalhada das últimas placas de vídeo da Nvidia e AMD, performance em jogos, ray tracing e tecnologias exclusivas.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Comparativo de GPUs',
      dataAiHint: 'GPU comparison graphics',
    },
    {
      title: 'Os Melhores Teclados Mecânicos para Gamers',
      description: 'Descubra os diferentes tipos de switches, formatos e recursos extras dos teclados mecânicos ideais para uma experiência de jogo superior.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Teclado Mecânico Gamer',
      dataAiHint: 'mechanical keyboard gaming',
    },
    {
      title: 'Otimizando seu Windows para Máxima Performance em Jogos',
      description: 'Dicas e truques para configurar seu sistema operacional Windows, liberando recursos e melhorando o desempenho nos seus jogos favoritos.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Otimização do Windows para jogos',
      dataAiHint: 'windows optimization gaming',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-primary font-mono">
        PC Gaming: Hardware, Otimização e Periféricos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {topics.map((topic, index) => (
          <Card key={index} className="overflow-hidden bg-card hover:shadow-lg transition-shadow duration-300">
             <CardHeader className="p-0">
              <div className="relative w-full h-48">
                <Image
                  src={topic.imageUrl}
                  alt={topic.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={topic.dataAiHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-2xl font-semibold mb-3 font-mono text-primary-foreground">{topic.title}</CardTitle>
              <p className="text-muted-foreground leading-relaxed">
                {topic.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
