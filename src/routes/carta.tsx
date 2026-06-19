import { createFileRoute } from "@tanstack/react-router";
import { Flame } from "lucide-react";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta — TACOMANÍA" },
      {
        name: "description",
        content:
          "Nuestra carta completa: tacos, pizzas, patatas y platos, arroz, extras, postres y bebidas.",
      },
      { property: "og:title", content: "Carta — TACOMANÍA" },
      { property: "og:description", content: "Consulta nuestra carta antes de pedir en tienda." },
    ],
  }),
  component: Carta,
});

type Item = { name: string; desc?: string; price?: string; tag?: string };
type Group = { title?: string; note?: string; items: Item[] };
type Section = {
  id: string;
  number: string;
  title: string;
  kicker?: string;
  intro?: string;
  groups: Group[];
  extras?: { title: string; lines: string[] }[];
};

const sections: Section[] = [
  {
    id: "tacos",
    number: "01",
    title: "Tacos",
    kicker: "Estilo french taco",
    intro: "Pollo, ternera, shawarma y más, con patatas, queso y nuestras salsas.",
    groups: [
      {
        items: [
          {
            name: "Taco Pollo",
            price: "6,50 €",
            desc: "Pollo marinado, patatas, queso, salsa andalouse, salsa Tacomanía.",
          },
          {
            name: "Taco Ternera",
            price: "7,50 €",
            tag: "Top",
            desc: "Ternera, patatas, queso, salsa andalouse, salsa Tacomanía.",
          },
          {
            name: "Taco Mixto",
            price: "7,00 €",
            desc: "Pollo marinado, ternera, patatas, queso, salsa andalouse, salsa Tacomanía.",
          },
          {
            name: "Taco Shawarma",
            price: "6,00 €",
            tag: "Top",
            desc: "Carne shawarma, patatas, queso, salsa de yogur, salsa Tacomanía, salsa andalouse.",
          },
          {
            name: "Taco Frankfurt",
            price: "6,50 €",
            desc: "Salchicha, ternera, patatas, queso, cebolla crispy, salsa rosa, salsa Tacomanía.",
          },
          {
            name: "Taco Cordon Bleu",
            price: "6,50 €",
            desc: "Cordon bleu, jamón, patatas, queso, salsa andalouse, salsa Tacomanía.",
          },
          {
            name: "Taco Tenders",
            price: "6,00 €",
            desc: "Pollo crispy, patatas, queso, salsa andalouse, salsa Tacomanía.",
          },
          {
            name: "Taco Nuggets",
            price: "6,00 €",
            desc: "Nuggets, patatas, queso, salsa andalouse, salsa Tacomanía.",
          },
        ],
      },
      {
        title: "También por aquí",
        items: [
          {
            name: "Shawarma Clásico",
            price: "4,50 €",
            desc: "El de toda la vida: pan caliente, carne especiada, verduras y salsa.",
          },
        ],
      },
    ],
    extras: [
      {
        title: "Personaliza tu taco",
        lines: [
          "Salsas aparte: Argelina, Brazil, Samurái, Cheddar, Yogur, Rosa.",
          "Tamaño L: +2 € · Tamaño XL: +4 €",
          "Ingredientes aparte: +1 €",
        ],
      },
    ],
  },
  {
    id: "pizzas",
    number: "02",
    title: "Pizzas 🍕",
    kicker: "Masa fina y crujiente",
    groups: [
      {
        title: "Clásicas",
        items: [
          { name: "Margarita", price: "6,00 €" },
          { name: "Prosciutto", price: "7,00 €" },
          { name: "Prosciutto e Fungi", price: "7,50 €" },
          { name: "Pepperoni", price: "7,00 €" },
          { name: "Shawarma", price: "7,00 €" },
          { name: "Shawarma y Pimientos", price: "7,50 €" },
          { name: "4 Quesos", price: "7,50 €" },
          { name: "Atún y Cebolla", price: "7,00 €" },
          { name: "Frankfurt", price: "7,00 €" },
        ],
      },
      {
        title: "Especialidades",
        items: [
          {
            name: "Tacomanía",
            price: "9,00 €",
            tag: "Top",
            desc: "Pollo marinado, ternera, salsa andalouse.",
          },
          {
            name: "Barbacoa",
            price: "8,50 €",
            desc: "Carne picada, salchicha, jamón, salsa barbacoa.",
          },
          { name: "Campera", price: "8,00 €", desc: "Huevo, carne picada." },
          { name: "Carbonara", price: "8,00 €" },
        ],
      },
    ],
  },
  {
    id: "patatas",
    number: "03",
    title: "Patatas y platos 🍟",
    kicker: "Crujientes y cargadas",
    groups: [
      {
        items: [
          { name: "Ración simple", price: "2,50 €", desc: "Patatas recién hechas." },
          { name: "Kapsalon", price: "6,50 €", desc: "Patatas, kebab, queso fundido y salsas." },
          { name: "Plato Kebab", price: "6,50 €", desc: "Patatas, kebab y verduras." },
          { name: "Salchipapas", price: "6,00 €", desc: "Patatas, salchicha, ketchup y mayonesa." },
        ],
      },
      {
        title: "Crea tus patatas",
        items: [
          { name: "Tamaño S", price: "4,00 €", desc: "1 salsa y 1 topping." },
          { name: "Tamaño M", price: "6,00 €", desc: "2 salsas y 2 toppings." },
          { name: "Tamaño L", price: "8,00 €", desc: "3 salsas y 3 toppings." },
        ],
      },
    ],
  },
  {
    id: "arroz",
    number: "04",
    title: "Arroz",
    kicker: "Crea tu arroz",
    intro: "Elige tu tamaño y combínalo con tus salsas y toppings favoritos.",
    groups: [
      {
        items: [
          { name: "Tamaño S", price: "5,00 €", desc: "1 salsa y 1 topping." },
          { name: "Tamaño M", price: "7,00 €", desc: "2 salsas y 2 toppings." },
          { name: "Tamaño L", price: "9,00 €", desc: "3 salsas y 3 toppings." },
        ],
      },
    ],
  },
  {
    id: "extras",
    number: "05",
    title: "Extras y complementos",
    kicker: "Para acompañar",
    groups: [
      {
        items: [
          {
            name: "Completa tu comida a menú",
            price: "3,00 €",
            desc: "Incluye patatas y bebida.",
          },
          {
            name: "Completa tu menú con entrante",
            price: "2,50 €",
            desc: "A elegir entre nuggets, tenders, palos de queso o alitas.",
          },
          {
            name: "Supercombo",
            price: "10,00 €",
            tag: "Top",
            desc: "Nuggets, tenders, palos de queso, alitas, patatas, carne a elegir y dos salsas.",
          },
        ],
      },
    ],
  },
  {
    id: "postres",
    number: "06",
    title: "Postres",
    kicker: "Para terminar",
    groups: [
      {
        items: [
          { name: "Batidos", price: "4,00 €", desc: "Consulta sabores disponibles." },
          { name: "Tartas del día", price: "3,00 €", desc: "Consulta nuestras tartas." },
        ],
      },
    ],
  },
  {
    id: "bebidas",
    number: "07",
    title: "Bebidas",
    kicker: "Refresca",
    groups: [
      {
        items: [
          { name: "Agua", price: "1,50 €" },
          { name: "Refresco", price: "2,00 €" },
          { name: "Cerveza", price: "2,00 €" },
        ],
      },
    ],
  },
];

function Carta() {
  return (
    <main className="bg-taco-noise min-h-screen text-white">
      <Hero />
      <TabsNav />
      <div className="mx-auto max-w-6xl px-4 pb-24 space-y-16">
        {sections.map((s) => (
          <MenuSection key={s.id} section={s} />
        ))}
        <p className="text-center text-xs text-white/40 pt-4">
          * Carta orientativa. Precios y disponibilidad pueden variar según promociones.
        </p>
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.4em] text-[#FFCC00]">
          Nuestro menú
        </span>
        <h1 className="mt-3 font-display text-6xl md:text-8xl leading-none">
          TACO<span className="text-[#E60000]">MANÍA</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-white/70">
          Tacos, pizzas y mucho más, preparados al momento en Tacomanía.
        </p>
      </div>
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#E60000]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#FFCC00]/15 blur-3xl" />
    </section>
  );
}

function TabsNav() {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#0F0F0F]/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-2 overflow-x-auto">
        <ul className="flex gap-1 py-2 whitespace-nowrap">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-white/70 hover:text-[#FFCC00] hover:bg-white/5 transition-colors"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function MenuSection({ section }: { section: Section }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <header className="mb-6">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-2xl text-[#E60000]">{section.number}</span>
          {section.kicker && (
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFCC00]">
              {section.kicker}
            </span>
          )}
        </div>
        <div className="mt-2 flex items-end gap-4">
          <h2 className="font-display text-4xl md:text-5xl leading-none">{section.title}</h2>
          <div className="flex-1 h-px bg-white/10 mb-2" />
        </div>
        {section.intro && <p className="mt-3 text-sm text-white/60">{section.intro}</p>}
      </header>

      <div className="space-y-8">
        {section.groups.map((g, i) => (
          <div key={i}>
            {g.title && (
              <h3 className="font-display text-2xl text-[#FFCC00] mb-3">{g.title}</h3>
            )}
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {g.items.map((item) => (
                <MenuRow key={item.name} item={item} />
              ))}
            </ul>
            {g.note && (
              <p className="mt-3 text-xs uppercase tracking-wider text-[#E60000] font-bold">
                {g.note}
              </p>
            )}
          </div>
        ))}

        {section.extras?.map((ex) => (
          <aside
            key={ex.title}
            className="rounded-2xl border border-[#FFCC00]/30 bg-[#FFCC00]/[0.04] p-5"
          >
            <h4 className="font-display text-xl text-[#FFCC00] mb-2">{ex.title}</h4>
            <ul className="space-y-1 text-sm text-white/75">
              {ex.lines.map((l) => (
                <li key={l}>· {l}</li>
              ))}
            </ul>
          </aside>
        ))}
      </div>
    </section>
  );
}

function MenuRow({ item }: { item: Item }) {
  return (
    <li className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-[#FFCC00]/40 hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2 flex-wrap">
            <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
            {item.tag && (
              <span className="rounded-full bg-[#E60000]/15 text-[#ff6b6b] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border border-[#E60000]/40">
                <Flame className="inline h-2.5 w-2.5 mr-0.5" />
                {item.tag}
              </span>
            )}
          </div>
        </div>
        <span className="shrink-0 font-display text-xl text-[#FFCC00] tabular-nums">
          {item.price ?? "—"}
        </span>
      </div>
      {item.desc && <p className="mt-2 text-sm text-white/60">{item.desc}</p>}
    </li>
  );
}
