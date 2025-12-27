import { redirect, RedirectType } from 'next/navigation';

export default function Home() {
	redirect('https://developer.mozilla.org', RedirectType.replace);
}
