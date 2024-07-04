import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import '@/styles/globals.scss'

const inter = Poppins({ subsets: ['latin'], weight: ['200', '300', '400'] })

export const metadata: Metadata = {
	title: 'Next.js Starter',
	description: 'Next.js app with TypeScript and Tailwind CSS.'
}

interface IRootLayout {
	children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayout) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
