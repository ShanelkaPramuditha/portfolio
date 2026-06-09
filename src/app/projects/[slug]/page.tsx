import { redirect } from 'next/navigation';
import Data from '@/constants/data/data.json';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`https://github.com/${Data.usernames.github}/${slug}`);
}
