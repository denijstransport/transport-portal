export const metadata = { title: 'Jullie Transport', description: 'Transportbedrijf' };

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body style={{margin:0, fontFamily:'system-ui, sans-serif', background:'#F9FAFB', color:'#111827'}}>
        <header style={{background:'#fff', borderBottom:'1px solid #e5e7eb'}}>
          <div style={{maxWidth:960, margin:'0 auto', padding:16, display:'flex', justifyContent:'space-between'}}>
            <a href="/" style={{textDecoration:'none', color:'#0f172a', fontWeight:600}}>Jullie Transport</a>
            <nav style={{display:'flex', gap:16}}>
              <a href="/diensten" style={{color:'#111827', textDecoration:'none'}}>Diensten</a>
              <a href="/contact" style={{color:'#111827', textDecoration:'none'}}>Contact</a>
              <a href="/login" style={{padding:'8px 14px', background:'#111827', color:'#fff', borderRadius:12, textDecoration:'none'}}>Inloggen</a>
            </nav>
          </div>
        </header>
        <main style={{maxWidth:960, margin:'0 auto', padding:16}}>{children}</main>
        <footer style={{background:'#fff', borderTop:'1px solid #e5e7eb', marginTop:40}}>
          <div style={{maxWidth:960, margin:'0 auto', padding:16, fontSize:14}}>© {new Date().getFullYear()} Jullie Transport</div>
        </footer>
      </body>
    </html>
  );
}
