"use client";

import { useState } from "react";
import Image from "next/image";
import { plants } from "../data/plants";

export default function HomePage() {
  const [query, setQuery] = useState("");

  const foundPlant =
    query.trim().length > 0
      ? plants.find((plant) =>
          plant.name.toLowerCase().includes(query.toLowerCase())
        )
      : null;

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

          <input
            type="text"
            className="searchInput"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="🔍 Wpisz nazwę rośliny, np. pokrzywa, chaber, babka..."
          />
        </div>
      </section>

      {foundPlant && (
        <section className="section plantPackage">
          <p className="label">Pakiet gatunku</p>

          <h2>{foundPlant.name}</h2>

          <p>
            <em>{foundPlant.latinName}</em> · {foundPlant.family} ·{" "}
            {foundPlant.type}
          </p>

          <Image
            src={foundPlant.cardImage}
            alt={`Karta botaniczna: ${foundPlant.name}`}
            width={900}
            height={1200}
            className="botanicalCard"
          />

          <h3>Co to za roślina?</h3>
          <p>{foundPlant.shortDescription}</p>

          <h3>Właściwości</h3>

          <ul>
            {foundPlant.properties.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>Jak ją wykorzystać?</h3>

          {foundPlant.uses.map((use) => (
            <article className="card" key={use.title}>
              <h4>{use.title}</h4>
              <p>{use.text}</p>
            </article>
          ))}

          <h3>Rozwiąż problem</h3>

          {foundPlant.problems.map((problem) => (
            <article className="card" key={problem.title}>
              <h4>{problem.title}</h4>

              <p>{problem.symptoms}</p>

              <strong>Możliwe przyczyny:</strong>

              <ul>
                {problem.causes.map((cause) => (
                  <li key={cause}>{cause}</li>
                ))}
              </ul>

              <strong>Co zrobić:</strong>

              <ul>
                {problem.whatToDo.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </article>
          ))}

          {foundPlant.story && (
            <>
              <h3>Opowieść</h3>

              <p>
                {foundPlant.story.title} · {foundPlant.story.type}
              </p>
            </>
          )}

          {foundPlant.grzadeczkaUrl && (
            <a
              className="button"
              href={foundPlant.grzadeczkaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zapytaj Grządeczkę
            </a>
          )}
        </section>
      )}

      {query && !foundPlant && (
        <section className="section">
          <p>Nie znalazłam jeszcze tego gatunku w bazie Grządkowiska.</p>
        </section>
      )}

      <footer className="section">
        <p>© Emilia Olszewska · Grządkowisko</p>
      </footer>
    </main>
  );
}
