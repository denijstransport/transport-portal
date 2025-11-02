import './globals.css';
import Link from 'next/link';


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="nl">
<body className="min-h-screen bg-gray-50 text-gray-900">
<header className="border-b bg-white">
<div className="max-w-6xl mx-auto flex items-center justify-between p-4">
<Link href="/" className="font-semibold">Jullie Transport</Link>
<nav className="flex gap-6">
<Link href="/diensten">Diensten</Link>
<Link href="/contact">Contact</Link>
<Link className="btn btn-primary" href="/login">Inloggen</Link>
</nav>
</div>
</header>
<main className="max-w-6xl mx-auto p-4">{children}</main>
<footer className="border-t mt-10 bg-white"><div className="max-w-6xl mx-auto p-4 text-sm">© {new Date().getFullYear()} Jullie Transport</div></footer>
</body>
</html>
);
}
