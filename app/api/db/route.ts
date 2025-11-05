import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const now = await prisma.$queryRawUnsafe<Date>('SELECT NOW()');
    return NextResponse.json({ ok: true, now });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'db error' }, { status: 500 });
  }
}
