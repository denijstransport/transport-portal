import './globals.css';

export const metadata = { title: 'Jullie Transport', description: 'Transportbedrijf' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <a href="/" className="font-semibold">Jullie Transport</a>
            <nav className="flex gap-6">
              <a href="/diensten">Diensten</a>
              <a href="/contact">Contact</a>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-gray-900 text-white" href="/login">Inloggen</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto p-4">{children}</main>
        <footer className="border-t mt-10 bg-white">
          <div className="max-w-6xl mx-auto p-4 text-sm">© {new Date().getFullYear()} Jullie Transport</div>
        </footer>
      </body>
    </html>
  );
}
