 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/app/api/db/route.ts b/app/api/db/route.ts
index 0c85f7ef7189b3cb2171b6c1ad26a22c316762f0..db383176ac70a8765c276de05a89e2bf7ce46dd3 100644
--- a/app/api/db/route.ts
+++ b/app/api/db/route.ts
@@ -1,16 +1,16 @@
 import { NextResponse } from 'next/server';
-import { getPrisma } from '@/lib/db';
+import { getPrisma } from '../../../lib/db';
 
 export async function GET() {
   const prisma = getPrisma();
   if (!prisma) {
     return NextResponse.json({ ok: false, error: 'DB niet geconfigureerd' }, { status: 503 });
   }
 
   try {
     const r = await prisma.$queryRawUnsafe<{ now: string }[]>('SELECT NOW() as now');
     return NextResponse.json({ ok: true, now: r?.[0]?.now ?? null });
   } catch (e: any) {
     return NextResponse.json({ ok: false, error: e?.message || 'db error' }, { status: 500 });
   }
 }
 
EOF
)
