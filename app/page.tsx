export default function Home(){
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Transport zoals het hoort</h1>
        <p>Betrouwbare ritten, duidelijke communicatie en een portaal voor chauffeurs en opdrachtgevers.</p>
        <div className="flex gap-3">
          <a className="btn btn-primary" href="/login">Ga naar het portaal</a>
          <a className="btn" href="/contact">Offerte aanvragen</a>
        </div>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold mb-2">Wat u krijgt</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Chauffeursportaal: profiel, documenten, uren</li>
          <li>Opdrachtgeversportaal: zendingen, documenten</li>
          <li>Veilig, snel en eenvoudig</li>
        </ul>
      </div>
    </div>
  );
}
