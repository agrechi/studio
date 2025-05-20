import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function MinecraftPage() {
  const topics = [
    {
      title: 'Começando no Survival',
      description: 'Seus primeiros passos no modo Survival do Minecraft. Aprenda a coletar recursos, construir seu primeiro abrigo e sobreviver à noite.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Iniciante no Minecraft Survival',
      dataAiHint: 'minecraft survival beginner',
    },
    {
      title: 'Farm de XP Eficiente',
      description: 'Descubra como construir farms de experiência (XP) que vão acelerar sua progressão no jogo, permitindo encantar itens mais rapidamente.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Farm de XP no Minecraft',
      dataAiHint: 'minecraft xp farm',
    },
    {
      title: 'Texturas e Mods Essenciais',
      description: 'Personalize sua experiência no Minecraft com pacotes de texturas que mudam o visual do jogo e mods que adicionam novas mecânicas e conteúdos.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Minecraft com texturas e mods',
      dataAiHint: 'minecraft textures mods',
    },
    {
      title: 'Explorando o Nether',
      description: 'Prepare-se para enfrentar os perigos do Nether. Dicas para navegação, coleta de recursos valiosos e como lidar com as criaturas hostis.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageAlt: 'Explorando o Nether no Minecraft',
      dataAiHint: 'minecraft nether exploration',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-primary font-mono">
        Mundo de Minecraft: Dicas, Truques e Curiosidades
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
