'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { blogData2_28 } from './data/blogData';

export const fetchBlog_28 = async () => {
  const blogs = await prisma.blog_28.findMany();
  return blogs;
};

export const deleteBlog_28 = async (id: number) => {
  // console.log('Removing Blog with id:', id);
  await prisma.blog_28.delete({
    where: { id },
  });
  revalidatePath('/quiz1_28/blog_28');
};

export const deleteAllBlog_28 = async () => {
  await prisma.blog_28.deleteMany();
  revalidatePath('/quiz1_28/blog_28');
};

export const SeedBlog_28 = async () => {
  await prisma.blog_28.createMany({
    data: blogData2_28,
    skipDuplicates: true,
  });
  revalidatePath('/quiz1_28/blog_28');
};
