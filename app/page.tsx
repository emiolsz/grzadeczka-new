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
      <section className="introCycle">
  <div className="introPaper">
    <div className="logoWrap">
      <h1 className="introLogo">Grządkowisko</h1>

      <svg
        className="peaVine"
        viewBox="0 0 1000 260"
        aria-hidden="true"
      >
        <path
          className="vinePath"
          d="M95 185 C180 95, 250 210, 340 130 S520 70, 610 150 S760 230, 890 90"
        />

        <path className="tendril t1" d="M255 160 C220 120, 255 90, 285 115" />
        <path className="tendril t2" d="M505 120 C545 80, 590 115, 550 145" />
        <path className="tendril t3" d="M720 190 C690 145, 735 120, 770 150" />

        <circle className="leaf l1" cx="210" cy="135" r="14" />
        <circle className="leaf l2" cx="430" cy="120" r="16" />
        <circle className="leaf l3" cx="680" cy="175" r="15" />

        <circle className="flower f1" cx="380" cy="132" r="13" />
        <circle className="flower f2" cx="615" cy="152" r="12" />
        <circle className="flower f3" cx="825" cy="112" r="13" />

        <ellipse className="bee" cx="620" cy="98" rx="15" ry="8" />

        <path className="pod p1" d="M385 140 C420 126, 455 142, 475 165 C430 174, 405 166, 385 140Z" />
        <path className="pod p2 dryPod" d="M690 178 C728 162, 760 180, 780 205 C735 214, 710 204, 690 178Z" />
      </svg>
    </div>

    <p className="introMotto">
      Życie jest nieustającym procesem.
      <br />
      Bądź jego świadomym elementem.
      <br />
      Wzrastaj.
    </p>
  </div>
</section>
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
