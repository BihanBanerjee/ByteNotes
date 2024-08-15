import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import { SiteHeader } from '@/components/Header/site-header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { template: ' %s - ByteNotes', default: 'ByteNotes' },
  description: 'Generated by you',
  keywords: ['Next.js', 'React', 'Typescript', 'Prisma', 'Postgres'],
  authors: [{ name: 'Akshay', url: 'https://akshayshinde.com' }],
  creator: 'Akshay Shinde',
  publisher: 'Akshay Shinde',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
