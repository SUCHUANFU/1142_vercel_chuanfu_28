'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { nanoid } from 'nanoid';


export const fetchGrocery = async () => {
  const items = await prisma.grocery.findMany();
  return items;
};

export const createGrocery = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const id = nanoid();
  const completed = false;

  const newItem = { id, name, completed };

  try {

    const result = await prisma.grocery.create({
      data: newItem,
    });
    

    revalidatePath('/grocery_db_28');
    
  } catch (error) {
    console.log(error);
  }
};