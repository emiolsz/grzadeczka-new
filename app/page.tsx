const plants = [
  {
    name: "Pokrzywa",
    text: "Karta botaniczna, funkcje w ogrodzie, przepisy, opowieści i powiązania ekosystemowe.",
  },
  {
    name: "Dynia",
    text: "Gatunek + problem: żółte liście, brak kwitnienia, owoce nie rosną.",
  },
  {
    name: "Mak",
    text: "Roślina krajobrazu, pamięci, zapylaczy i delikatnych pól.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="section">
        <p className="label">Atlas zależności przyrodniczych</p>
        <h1>Grządkowisko</h1>
        <p>Zasiej nasionko. Wzrastaj.</p>

        <div className="searchBox">
          🔍 Wpisz nazwę rośliny, np. pokrzywa, dynia, mak...
        </div>
      </section>

      <section className="section">
        <p className="label">Zachwyć się</p>
        <h2>Najpierw zobacz.</h2>
        <p>
          Grządkowisko zaczyna się od obrazu: łąki, światła, liści,
          zapachu ziemi i pytania, co właściwie dzieje się wokół nas.
        </p>
      </section>

      <section className="section">
        <p className="label">Obserwuj</p>
        <h2>Roślina jest początkiem.</h2>
        <p>
          Użytkownik nie szuka działu. Wpisuje nazwę rośliny. Dlatego
          centrum Grządkowiska będzie gatunek i wszystko, co z nim związane.
        </p>

        <div className="grid">
          {plants.map((plant) => (
            <article className="card" key={plant.name}>
              <h3>{plant.name}</h3>
              <p>{plant.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="label">Zrozum</p>
        <h2>Nie pojedyncze fakty. Zależności.</h2>
        <p>
          Pokrzywa to nie tylko roślina. To gleba, motyle, ptaki,
          ogród, człowiek i decyzja: zostawić, wykorzystać, zrozumieć.
        </p>
      </section>

      <section className="section">
        <p className="label">Działaj</p>
        <h2>Alleopatia — Asystent Ogrodnika.</h2>
        <p>
          Grządkowisko wyjaśnia świat. Alleopatia pomaga podjąć decyzję:
          sprawdzić sąsiedztwo, zaplanować grządkę, rozwiązać problem.
        </p>
      </section>

      <section className="section">
        <p className="label">Opowieści</p>
        <h2>Atramentowe Opowieści.</h2>
        <p>
          Są rzeczy, które najlepiej zapamiętuje się nie przez tabelę,
          lecz przez historię. Opowieści będą prowadzić małych i dużych
          przez świat roślin, cykli i zależności.
        </p>
      </section>

      <footer className="section">
        <p>© Emilia Olszewska · Grządkowisko</p>
      </footer>
    </main>
  );
}
