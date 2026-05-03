import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/globals.css'; // 建議使用別名路徑

import Navbar_28 from './_components/NavbarQuiz1_28'; // 將 Navbar_xx 改為 Navbar_28

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Quiz 1 - Student 28', // 標題同步更新
  description: 'Next.js Quiz Project',
};

export default function QuizLayout_28({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 子佈局僅回傳片段內容，不要包含 html/body
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar_28 />
      <main className='max-w-3xl mx-auto py-4'>{children}</main>
    </div>
  );
}