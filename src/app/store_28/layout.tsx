import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import NavbarStore_28 from './_components/navbar/NavbarStore_28';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import StyledComponentsRegistry from '../lib/registry';
import Container from './_components/global/Container';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/sonner';
import { Suspense } from 'react';

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
        <ClerkProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {/* 暫時新增*/}
            <Suspense
              fallback={
                <div className='text-center py-24 text-lg'>
                  Loading Store...
                </div>
              }
            >
              <NavbarStore_28 />
              <Container className='py-1'>{children}</Container>
            </Suspense>
            {/* <NavbarStore_28 />
            <Container className='py-1'>{children}</Container> */}
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
