import Link from 'next/link';


export default function DashboardLayout({ children }: { children: React.ReactNode }){
return (
<div className="grid md:grid-cols-5 gap-6">
<aside className="md:col-span-1 card sticky top-4 h-fit">
<h2 className="font-semibold mb-3">Portaal</h2>
<div className="space-y-1">
<div className="text-xs uppercase text-gray-500">Chauffeur</div>
<Link href="/dashboard/driver/profile">Mijn Profiel</Link><br/>
<Link href="/dashboard/driver/hours">Uren</Link><br/>
<Link href="/dashboard/driver/documents">Documenten</Link>
<div className="text-xs uppercase text-gray-500 mt-3">Opdrachtgever</div>
<Link href="/dashboard/client/shipments">Zendingen</Link><br/>
<Link href="/dashboard/client/documents">Documenten</Link>
</div>
</aside>
<section className="md:col-span-4">{children}</section>
</div>
);
}
