import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ProductPage, { Product } from '@/components/ProductPage';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = await params;
  const dataPath = path.join(process.cwd(), 'src/data/products.json');
  const fileContents = await fs.readFile(dataPath, 'utf8');
  const products: Product[] = JSON.parse(fileContents);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
