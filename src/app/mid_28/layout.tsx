import type { Metadata } from 'next';

import Navbar_28 from './_components/NavbarShopNode_28';

import localFont from 'next/font/local';

const geistLocalFont = localFont({
  src: '../(demo)/_assets/fonts/geist.woff2',
  display: 'swap',
});

const geistMonoLocalFont = localFont({
  src: '../(demo)/_assets/fonts/geist-mono.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next.js Introduction',
  description: 'Given for basic understanding of Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistLocalFont.className} ${geistMonoLocalFont.className} antialiased`}
    >
      <Navbar_28 />
      <main className='max-w-6xl mx-auto py-4'>{children}</main>
    </div>
  );
}
