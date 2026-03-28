'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// 獲取所有使用者
export const fetchUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

// 建立新使用者
export const createUser = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  
  const newUser = { name, email };
  console.log('newUser', newUser);

  try {
    const result = await prisma.user.create({
      data: newUser,
    });
    // 成功後重新導向或刷新頁面資料
    revalidatePath('/users_db_28');
  } catch (error) {
    console.log(error);
  }
};