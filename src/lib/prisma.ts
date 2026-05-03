// src/lib/prisma.ts
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
// 注意：這裡必須指向你在 schema.prisma 中設定的 output 路徑
import { PrismaClient } from '../generated/prisma'; 

const connectionString = `${process.env.DATABASE_URL}`;

// 建立 pg 連線池
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prismaClientSingleton = () => {
  // Prisma 7 會自動抓取 prisma.config.ts 的設定
  // 加上 adapter 確保與 PostgreSQL 的原生相容性
  return new PrismaClient({ adapter });
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export { prisma };

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;