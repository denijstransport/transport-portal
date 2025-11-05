export default function Home(){
  return (
    <div style={{display:'grid', gap:24, gridTemplateColumns:'1fr'}}>
      <div style={{display:'grid', gap:12, alignContent:'start'}}>
        <h1 style={{fontSize:36, margin:0}}>Transport zoals het hoort</h1>
        <p>Betrouwbare ritten, duidelijke communicatie en een portaal voor chauffeurs en opdrachtgevers.</p>
        <div style={{display:'flex', gap:12}}>
          <a href="/login" style={{padding:'8px 14px', background:'#111827', color:'#fff', borderRadius:12, textDecoration:'none'}}>Ga naar het portaal</a>
          <a href="/contact" style={{padding:'8px 14px', border:'1px solid #e5e7eb', borderRadius:12, textDecoration:'none', color:'#111827'}}>Offerte aanvragen</a>
        </div>
      </div>

      <div style={{background:'#fff', border:'1px solid #e5e7eb', borderRadius:16, padding:20, boxShadow:'0 6px 24px rgba(0,0,0,.06)'}}>
        <h2 style={{marginTop:0}}>Wat u krijgt</h2>
        <ul>
          <li>Chauffeursportaal: profiel, documenten, uren</li>
          <li>Opdrachtgeversportaal: zendingen, documenten</li>
          <li>Veilig, snel en eenvoudig</li>
        </ul>
      </div>
    </div>
  );
}
