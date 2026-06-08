import Image from "next/image";

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
      <section className="hero">
        <Image
          src="/images/hero/maki-chabry.webp"
          alt="Maki i chabry na łące"
          fill
          priority
          className="heroImage"
        />

        <div className="heroContent">
          <p className="label">Atlas zależności przyrodniczych</p>
          <h1>Grządkowisko</h1>

          <p className="motto">
            Życie jest nieustającym procesem.
            <br />
            Bądź jego świadomym elementem.
            <br />
            Wzrastaj.
          </p>

          <div className="searchBox">
            🔍 Wpisz nazwę rośliny, np. pokrzywa, dynia, mak...
          </div>
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
          Pokrzywa zwyczajna nie jest wcale taka zwyczajna, powiedziałabym niezwykła, ze względu na szereg cennych właściwosci. Jej obecność uruchamia łańcuch wzajemnych korzyści między glebą, owadami, ptakami. W tym łancuchu wzajemności jest i człowiek.
          zanim ją wyrwiesz: poczytaj, wykorzystaj i zrozum jak jest cenna.
        </p>
      </section>

      <section className="section">
        <p className="label">Działaj</p>
        <h2>Alleopatia — Asystent Ogrodnika.</h2>
        <p>
          Grządkowisko wyjaśnia świat zależności. Alleopatia pomaga podjąć decyzję:
          które sąsiedztwo będzie najlepszym dla roślin, ktore będa się wspierać, a które konkurować. Wiedza o wzajemnym odziaływaniu pomaga zaplanować grządkę, rozwiązać problem słabego wzrostu, czy przenoszenia chorób.
        </p>
      </section>

      <section className="section">
        <p className="label">Opowieści</p>
        <h2>Atramentowe Opowieści.</h2>
        <p>
          Są rzeczy, które najlepiej zapamiętuje się przez pięknie opowiedziane historie. Opowieści będą prowadzić małych i dużych
          w barwną krainę roślin. 
        </p>
      </section>

      <footer className="section">
        <p>© Emilia Olszewska · Grządkowisko</p>
      </footer>
    </main>
  );
}
