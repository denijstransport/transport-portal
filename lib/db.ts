// /lib/db.ts
import { PrismaClient } from '@prisma/client';

let _prisma: PrismaClient | null = null;

/** Lazy: maak pas een PrismaClient wanneer we 'm gebruiken. */
export function getPrisma(): PrismaClient | null {
  if (!_prisma) {
    if (!process.env.DATABASE_URL) return null; // laat build niet crashen
    _prisma = new PrismaClient();
  }
  return _prisma;
}
