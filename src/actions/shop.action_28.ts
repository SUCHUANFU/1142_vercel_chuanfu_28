'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const fetchCategories_28 = async () => {
  try {
    const categories = await prisma.category_28.findMany({
      orderBy: {
        cid: 'asc',
      },
    });
    // console.log('Fetched Categories:', categories);
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const deleteProduct_28 = async (formData: FormData) => {
  const pid = Number(formData.get('pid'));
  try {
    const deletedProduct = await prisma.shop_28.delete({
      where: { pid: pid },
    });
    console.log(
      `Successfully deleted product: ${deletedProduct.pname} (ID: ${pid})`
    );
    revalidatePath('/mid_28/[category]', 'page');
  } catch (error) {
    console.error('Delete Error:', error);
  }
};
