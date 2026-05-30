// import { Prisma } from '@prisma/client';

import { PrismaClient } from '@/generated/prisma/client';
import { Prisma } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// 補上 actionFunction 的型別定義
export type actionFunction = (
  prevState: any,
  formData: FormData,
) => Promise<{ message: string }>;
