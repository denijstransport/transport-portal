import { PrismaClient } from '@prisma/client';

let _prisma: PrismaClient | null = null;

export function getPrisma(): PrismaClient | null {
  if (!_prisma) {
    if (!process.env.DATABASE_URL) return null;
    _prisma = new PrismaClient();
  }
  return _prisma;
}
