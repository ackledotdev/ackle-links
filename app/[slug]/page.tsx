import { Redirects } from '@/lib/redirects';
import { redirect, RedirectType } from 'next/navigation';

export default async function Redirect({
	params
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const dest = Redirects[slug] ?? null;
	if (!dest) return 'Redirect not found';
	redirect(dest, RedirectType.replace);
}
