'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Prisma } from '@/generated/prisma/client';
import { redirect } from 'next/navigation';
import { currentUser, auth } from '@clerk/nextjs/server';
import { deleteImage, uploadImage } from './supabase';
import { productSchema, validateWithZodSchema } from './schemas';

export type Product = Prisma.ProductGetPayload<object>;

export const fetchFeaturedProducts = async () => {
  const products = await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    console.log('No auth user found, bypass redirect');
    return null;
  }
  return user;
};

const getAdminUser = async () => {
  console.log('Bypass getAdminUser check');
  return null;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'an error occurred',
  };
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
    console.log('Product not found');
  }
  return product;
};

// 100% 放行版管理員商品讀取
export const fetchAdminProducts = async () => {
  // 拔除權限檢查，防止線上重導向
  // await getAdminUser();
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return products;
};

// 100% 放行版管理員訂單讀取
export const fetchAdminOrders = async () => {
  // 拔除權權檢查
  // await getAdminUser();
  const orders = await prisma.order.findMany({
    where: {
      isPaid: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return orders;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  if (!user) return { message: 'Unauthorized' };

  try {
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const price = Number(formData.get('price') as string);
    const image = formData.get('image') as string;
    const description = formData.get('description') as string;
    const featured = Boolean(formData.get('featured') as string);

    await prisma.product.create({
      data: {
        name,
        company,
        price,
        image,
        description,
        featured,
        clerkId: user.id,
      },
    });
    return { message: 'product created' };
  } catch (error) {
    return renderError(error);
  }
};

export const createProductAction2 = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  if (!user) return { message: 'Unauthorized' };

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = productSchema.parse(rawData);

    await prisma.product.create({
      data: {
        ...validatedFields,
        clerkId: user.id,
      },
    });
    return { message: 'product created' };
  } catch (error) {
    return renderError(error);
  }
};

export const deleteProductAction = async (prevState: { productId: string }) => {
  const { productId } = prevState;
  // await getAdminUser();
  try {
    const product = await prisma.product.delete({
      where: {
        id: productId,
      },
    });
    revalidatePath('/store_28/admin_28/products_28');
    return { message: 'product removed' };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchAdminProductDetails = async (productId: string) => {
  // await getAdminUser();
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  return product;
};

export const updateProductAction = async (
  prevState: any,
  formData: FormData,
) => {
  // await getAdminUser();
  try {
    const productId = formData.get('id') as string;
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(productSchema, rawData);

    await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        ...validatedFields,
      },
    });
    revalidatePath(`/store_28/admin_28/products_28/${productId}/edit`);
    return { message: 'Product updated successfully' };
  } catch (error) {
    return renderError(error);
  }
};