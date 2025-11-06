// /lib/db.ts
import { PrismaClient } from '@prisma/client';

let _prisma: PrismaClient | null = null;

/** Maakt pas een PrismaClient als we 'm nodig hebben (build blijft groen). */
export function getPrisma(): PrismaClient | null {
  if (!_prisma) {
    if (!process.env.DATABASE_URL) return null;
    _prisma = new PrismaClient();
  }
  return _prisma;
}
