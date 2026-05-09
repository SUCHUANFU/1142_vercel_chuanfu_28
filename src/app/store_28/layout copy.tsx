import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import NavbarMain_28 from './_components/navbar/NavbarStore_28';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import StyledComponentsRegistry from '../lib/registry';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next.js Instruction',
  description: 'Given for basic understanding of Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NavbarMain_28 />
          <StyledComponentsRegistry>
            <main className='max-w-3xl mx-auto py-4'>{children}</main>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
