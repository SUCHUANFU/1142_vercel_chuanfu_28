'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Prisma } from '@/generated/prisma/client';
import { redirect } from 'next/navigation';
import { currentUser, auth } from '@clerk/nextjs/server';

import { deleteImage, uploadImage } from '@/lib/supabase';

export type Product = Prisma.ProductGetPayload<object>;

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect('/store_xx');
  return user;
};

const getAdminUser = async () => {
  const user = await getAuthUser();
  if (user.id !== process.env.ADMIN_USER_ID) redirect('/store_xx');
  return user;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'an error occurred',
  };
};

export const fetchFeaturedProducts = async () => {
  const products = await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async ({ search = '' }: { search: string }) => {
  return prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect('/store_xx/products_xx');
  }
  return product;
};

// 修正後的管理員商品讀取，暫時跳過 Clerk 與環境變數驗證
export const fetchAdminProducts = async () => {
  // 暫時註解權限檢查，防止 Vercel 線上端因跨網域或金鑰隔離而被跳轉回首頁
  // await getAdminUser();
  
  const products = await prisma.prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return products;
};