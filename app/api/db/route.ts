import { NextResponse } from 'next/server';
import { getPrisma } from '../../../lib/db';

export async function GET() {
  const prisma = getPrisma();
  if (!prisma) {
    return NextResponse.json(
      { ok: false, error: 'DB niet geconfigureerd' },
      { status: 503 }
    );
  }

  try {
    const r = await prisma.$queryRaw<{ now: Date | string }[]>`
      SELECT CURRENT_TIMESTAMP as now
    `;
    const now = r?.[0]?.now ?? null;
    return NextResponse.json({ ok: true, now });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || 'db error' },
      { status: 500 }
    );
  }
}
