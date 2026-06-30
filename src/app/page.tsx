import { promises as fs } from 'fs';
import path from 'path';
import ProductPage, { Product } from '@/components/ProductPage';

export default async function Home() {
  const dataPath = path.join(process.cwd(), 'src/data/products.json');
  const fileContents = await fs.readFile(dataPath, 'utf8');
  const products: Product[] = JSON.parse(fileContents);

  const featuredProduct = products.find(p => p.isFeatured) || products[0];

  return <ProductPage product={featuredProduct} />;
}
