import type { Metadata } from 'next'

import Home from '@/screens/home'

export const metadata: Metadata = {
	title: 'Home | Next.js Starter',
	description: 'Home page of the Next.js app.'
}

export default function Page() {
	return <Home />
}
