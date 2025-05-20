import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  dataAiHint?: string;
  link: string;
}

export default function ArticleCard({ title, description, imageUrl, imageAlt, dataAiHint, link }: ArticleCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full bg-card hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            data-ai-hint={dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 font-mono text-primary-foreground leading-tight">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm line-clamp-3">{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
          <Link href={link}>
            Ler Mais <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
