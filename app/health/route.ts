import { NextResponse } from 'next/server';
export const runtime = 'nodejs'; // expliciet géén Edge

export async function GET() {
  return NextResponse.json({ ok: true, ts: Date.now() });
}
