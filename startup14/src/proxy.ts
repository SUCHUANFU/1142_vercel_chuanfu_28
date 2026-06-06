import { clerkMiddleware } from '@clerk/nextjs/server';

// 徹底關掉所有路由攔截與重導向，一律無條件放行
export default clerkMiddleware(async (auth, req) => {
  // 暫時不進行任何權限檢查與跳轉，讓線上環境直接順利通關！
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};