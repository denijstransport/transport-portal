import './globals.css';

export const metadata = { title: 'Jullie Transport', description: 'Transportbedrijf' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* ... */}
        <main className="max-w-6xl mx-auto p-4">{children}</main>
        {/* ... */}
      </body>
    </html>
  );
}
