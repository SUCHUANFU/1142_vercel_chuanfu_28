import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// 已將所有路由後綴精準修正為 _28
const isPublicRoute = createRouteMatcher([
  '/',
  '/store_28',
  '/store_28/products_28(.*)',
  '/store_28/about_28',
]);
const isAdminRoute = createRouteMatcher(['/store_28/admin_28(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const isAdminUser = userId === process.env.ADMIN_USER_ID;

  // 如果進入管理員路由且不是管理員，則重導向回商店首頁 /store_28
  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL('/store_28', req.url));
  }

  // 如果不是公開路由，則強制進行 Clerk 登入驗證
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};