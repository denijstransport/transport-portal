// /lib/db.ts
import { PrismaClient } from '@prisma/client';

let _prisma: PrismaClient | null = null;

/**
 * Lazy singleton: maakt pas een PrismaClient aan wanneer je hem AANROEPT.
 * Tijdens build (zonder DATABASE_URL) wordt er niets geïnitialiseerd.
 */
export function getPrisma(): PrismaClient | null {
  if (!_prisma) {
    if (!process.env.DATABASE_URL) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('⚠️ DATABASE_URL ontbreekt: Prisma uitgeschakeld (build blijft groen).');
      }
      return null;
    }
    _prisma = new PrismaClient();
  }
  return _prisma;
}

export type Prisma = PrismaClient;
