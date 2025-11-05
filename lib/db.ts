import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.DATABASE_URL) {
  prisma = global.prisma || new PrismaClient();
  if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
} else {
  console.warn('⚠️ DATABASE_URL niet ingesteld — Prisma is uitgeschakeld.');
  // @ts-ignore
  prisma = {} as PrismaClient;
}

export default prisma;
