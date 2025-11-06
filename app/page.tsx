export default function Home(){
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">De Nijs Solutions</h1>
        <p>Betrouwbare ritten, duidelijke communicatie en een portaal voor chauffeurs en opdrachtgevers.</p>
        <div className="flex gap-3">
          <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-gray-900 text-white" href="/login">Ga naar het portaal</a>
          <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200" href="/contact">Offerte aanvragen</a>
        </div>
      </div>
      <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
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
