'use server';

import { prisma } from '@/lib/prisma';
import { nanoid } from 'nanoid';
import { revalidatePath } from 'next/cache';

export const fetchGrocery_28 = async () => {
  const items = await prisma.grocery.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  return items;
};

export const createGrocery_28 = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const id = nanoid();
  const completed = false;
  const newItem = { id, name, completed };

  try {
    const result = await prisma.grocery.create({
      data: newItem,
    });
    revalidatePath('/grocery_db16');
  } catch (error) {
    console.error('Error creating grocery item:', error);
  }
};

export const removeGrocery_28 = async (id: string, formData: FormData) => {
  await prisma.grocery.delete({
    where: { id },
  });
  revalidatePath('/grocery_db16');
};

export const editGrocery_28 = async (id: string, completed: boolean) => {
  try {
    await prisma.grocery.update({
      where: { id },
      data: { completed },
    });
    revalidatePath('/grocery_db16');
  } catch (error) {
    console.error('Error editing grocery item:', error);
    throw error;
  }
};
