import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function FnafPage() {
  const topics = [
    {
      title: 'Sobrevivendo às Cinco Noites',
      description: 'Um guia essencial para iniciantes sobre como gerenciar energia, usar câmeras e portas para sobreviver aos animatrônicos.',
      imageUrl: 'https://i.ibb.co/jZ6MQ3pt/5-sobre.png',
      imageAlt: 'Sobrevivendo em Five Nights at Freddy\'s',
      dataAiHint: 'FNAF survival horror',
    },
    {
      title: 'A História Complexa de FNAF',
      description: 'Desvende os mistérios e a linha do tempo intrincada por trás da série Five Nights at Freddy\'s. Teorias e fatos confirmados.',
      imageUrl: 'https://i.ibb.co/PsNXrpK8/02-fnaf.png',
      imageAlt: 'Lore de Five Nights at Freddy\'s',
      dataAiHint: 'FNAF lore mystery',
    },
    {
      title: 'Qual o Melhor Jogo da Franquia?',
      description: 'Uma análise comparativa dos principais jogos da série FNAF, destacando seus pontos fortes, inovações e sustos.',
      imageUrl: 'https://i.ibb.co/mrFqMnJ3/03-fnaf.png',
      imageAlt: 'Comparativo de jogos FNAF',
      dataAiHint: 'FNAF game comparison',
    },
    {
      title: 'Dicas para os Desafios Mais Difíceis',
      description: 'Estratégias avançadas para superar as noites mais desafiadoras e os modos de jogo extras em FNAF.',
      imageUrl: 'https://i.ibb.co/5x8PCjzW/4-fnaf.png',
      imageAlt: 'Desafios em FNAF',
      dataAiHint: 'FNAF challenge tips',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-primary font-mono">
        Mundo de Five Nights at Freddy's: Dicas, Truques e Curiosidades
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
