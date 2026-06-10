export type Plant = {
  slug: string;
  name: string;
  latinName: string;
  family: string;
  type: string;
  cardImage: string;

  shortDescription: string;

  properties: string[];

  uses: {
    title: string;
    text: string;
  }[];

  problems: {
    title: string;
    symptoms: string;
    causes: string[];
    whatToDo: string[];
  }[];

  story?: {
    title: string;
    type: "dla dzieci" | "dla dorosłych" | "film";
    url?: string;
  };

  grzadeczkaUrl?: string;
};

export const plants: Plant[] = [
  {
    slug: "pokrzywa-zwyczajna",
    name: "Pokrzywa zwyczajna",
    latinName: "Urtica dioica",
    family: "Pokrzywowate",
    type: "Roślina zielna",
    cardImage: "/images/cards/pokrzywa-zwyczajna.webp",

    shortDescription:
      "Pokrzywa zwyczajna to roślina żyznych, wilgotnych miejsc. Łatwo ją rozpoznać po piłkowanych liściach i parzących włoskach.",

    properties: [
      "roślina azotolubna",
      "cenna dla ogrodu i kompostu",
      "tradycyjnie wykorzystywana w zielarstwie",
      "przyciąga owady i wspiera życie biologiczne ogrodu"
    ],

    uses: [
      {
        title: "Gnojówka z pokrzywy",
        text: "Świeżą pokrzywę zalewa się wodą i pozostawia do fermentacji. Po rozcieńczeniu stosuje się jako nawóz wzmacniający rośliny."
      },
      {
        title: "Napar z pokrzywy",
        text: "Suszone liście można wykorzystywać do naparu. Przed zastosowaniem zielarskim warto sprawdzić przeciwwskazania."
      }
    ],

    problems: [
      {
        title: "Żółkną liście",
        symptoms: "Liście tracą intensywną zieleń, żółkną od dołu lub miejscowo.",
        causes: [
          "przesuszenie podłoża",
          "naturalne starzenie dolnych liści",
          "zbyt uboga gleba",
          "nadmiar słońca przy braku wilgoci"
        ],
        whatToDo: [
          "sprawdź wilgotność gleby",
          "usuń uszkodzone liście",
          "wzbogać podłoże kompostem",
          "obserwuj, czy problem się rozszerza"
        ]
      }
    ],

    story: {
      title: "Strażniczka azotu",
      type: "dla dorosłych"
    },

    grzadeczkaUrl: "https://alleopatia.streamlit.app/"
  },

  {
    slug: "chaber-blawatek",
    name: "Chaber bławatek",
    latinName: "Centaurea cyanus",
    family: "Astrowate",
    type: "Roślina jednoroczna",
    cardImage: "/cards/chaber-blawatek.png",

    shortDescription:
      "Chaber bławatek to delikatna roślina pól i łąk, rozpoznawalna po intensywnie niebieskich kwiatach.",

    properties: [
      "roślina miododajna",
      "przyciąga zapylacze",
      "dobrze wygląda w ogrodach naturalistycznych",
      "symbolicznie związana z krajobrazem pól"
    ],

    uses: [
      {
        title: "Roślina dla zapylaczy",
        text: "Chaber warto wysiewać w mieszankach kwietnych, ponieważ przyciąga pszczoły i inne owady."
      }
    ],

    problems: [
      {
        title: "Słabo kwitnie",
        symptoms: "Roślina rośnie, ale tworzy mało kwiatów.",
        causes: [
          "zbyt żyzna gleba",
          "za mało słońca",
          "zbyt gęsty wysiew"
        ],
        whatToDo: [
          "zapewnij więcej światła",
          "przerzedź siewki",
          "unikaj nadmiernego nawożenia"
        ]
      }
    ],

    grzadeczkaUrl: "https://alleopatia.streamlit.app/"
  },

  {
    slug: "babka-lancetowata",
    name: "Babka lancetowata",
    latinName: "Plantago lanceolata",
    family: "Babkowate",
    type: "Roślina wieloletnia",
    cardImage: "/cards/babka-lancetowata.png",

    shortDescription:
      "Babka lancetowata tworzy rozetę wąskich liści i smukłe kłosy kwiatowe. Spotykana jest na łąkach, trawnikach i przy drogach.",

    properties: [
      "odporna na udeptywanie",
      "ważna roślina łąkowa",
      "tradycyjnie wykorzystywana w zielarstwie",
      "dobrze znosi ubogie stanowiska"
    ],

    uses: [
      {
        title: "Liście babki",
        text: "Liście babki lancetowatej są znane z tradycyjnych zastosowań zielarskich. Przy użyciu leczniczym należy zachować ostrożność."
      }
    ],

    problems: [
      {
        title: "Usycha",
        symptoms: "Liście więdną, zasychają lub tracą jędrność.",
        causes: [
          "długotrwała susza",
          "bardzo zbita gleba",
          "uszkodzenie korzenia"
        ],
        whatToDo: [
          "sprawdź wilgotność gleby",
          "rozluźnij podłoże wokół rośliny",
          "obserwuj młode liście w środku rozety"
        ]
      }
    ],

    grzadeczkaUrl: "https://alleopatia.streamlit.app/"
  }
];
