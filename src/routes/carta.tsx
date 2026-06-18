import { createFileRoute } from "@tanstack/react-router";
import { Flame } from "lucide-react";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta — TACOMANÍA" },
      { name: "description", content: "Nuestra carta completa: tacos, pizzas, shawarmas, arroces, patatas, combos, postres, batidos y bebidas." },
      { property: "og:title", content: "Carta — TACOMANÍA" },
      { property: "og:description", content: "Consulta nuestra carta antes de pedir en tienda." },
    ],
  }),
  component: Carta,
});

const PRICE_TBD = "—";

type Item = { name: string; desc?: string; price?: string; tag?: string };
type Section = {
  id: string;
  number: string;
  title: string;
  kicker?: string;
  intro?: string;
  groups: { title?: string; note?: string; items: Item[] }[];
};

const sections: Section[] = [
  {
    id: "tacos",
    number: "01",
    title: "Tacos",
    kicker: "Estilo french taco",
    intro: "Bases destacadas: Ternera · Frankfurt · Shawarma",
    groups: [
      {
        items: [
          { name: "Taco Pollo" },
          { name: "Taco Ternera", tag: "Base" },
          { name: "Taco Mixto" },
          { name: "Taco Cordon Blue" },
          { name: "Taco Tenders" },
          { name: "Taco Nuggets" },
          { name: "Taco Frankfurt", tag: "Base" },
          { name: "Taco Shawarma", tag: "Base" },
          { name: "Taco América" },
        ],
      },
    ],
  },
  {
    id: "pizzas",
    number: "02",
    title: "Pizzas",
    kicker: "Masa fina y crujiente",
    groups: [
      {
        title: "Clásicas",
        items: [
          { name: "Margarita" },
          { name: "Prosciutto" },
          { name: "Prosciutto y Champiñones" },
          { name: "Atún y Cebolla" },
          { name: "Shawarma" },
          { name: "Shawarma Pimiento" },
          { name: "Pepperoni" },
        ],
      },
      {
        title: "Especialidades",
        note: "Consulta suplemento.",
        items: [
          { name: "Tacomanía", desc: "Pollo, taco, ternera, andalusí." },
          { name: "Barbacoa", desc: "Carne picada, salchicha, jamón, salsa barbacoa." },
          { name: "Campera", desc: "Huevo, carne picada." },
          { name: "Carbonara", desc: "Bacon, nata, queso, huevo." },
          { name: "Frankfurt", desc: "Frankfurt, mozzarella, salsa." },
          { name: "4 Quesos", desc: "Mozzarella, cheddar, azul, parmesano." },
        ],
      },
    ],
  },
  {
    id: "shawarma",
    number: "03",
    title: "Shawarma",
    kicker: "El de toda la vida",
    groups: [
      {
        items: [
          { name: "Shawarma Clásico", desc: "Pan caliente, carne especiada, verduras frescas y salsa de la casa." },
          { name: "Shawarma Pollo", desc: "Pollo marinado, verduras y salsa." },
          { name: "Shawarma Mixto", desc: "Ternera y pollo, verduras y salsa." },
        ],
      },
    ],
  },
  {
    id: "arroz",
    number: "04",
    title: "Crea tu arroz",
    kicker: "Elige tu tamaño",
    groups: [
      {
        items: [
          { name: "Tamaño S", desc: "1 Salsa + 1 Topping" },
          { name: "Tamaño M", desc: "2 Salsas + 2 Toppings" },
          { name: "Tamaño L", desc: "3 Salsas + 3 Toppings" },
        ],
      },
    ],
  },
  {
    id: "patatas",
    number: "05",
    title: "Patatas",
    kicker: "Crujientes y doradas",
    groups: [
      {
        title: "Nuestras patatas",
        items: [
          { name: "Ración Normal", desc: "Crujientes, recién hechas." },
          { name: "Kapsalon", desc: "Patatas, kebab, queso y salsa." },
          { name: "Plato Kebab", desc: "Patatas, kebab y verduras." },
          { name: "Salchipapas", desc: "Patatas, salchicha, ketchup y mayonesa." },
        ],
      },
      {
        title: "Crea tus patatas",
        note: "Consulta suplemento.",
        items: [
          { name: "Tamaño S", desc: "Elige tus toppings favoritos." },
          { name: "Tamaño M", desc: "Elige tus toppings favoritos." },
          { name: "Tamaño L", desc: "Elige tus toppings favoritos." },
        ],
      },
    ],
  },
  {
    id: "complementa",
    number: "06",
    title: "Complementa tu menú",
    kicker: "Para acompañar",
    groups: [
      {
        items: [
          { name: "Alitas" },
          { name: "Nuggets" },
          { name: "Tenders" },
          { name: "Palos de Queso" },
          { name: "Postre" },
        ],
      },
    ],
  },
  {
    id: "menu",
    number: "07",
    title: "Menú tu comida",
    kicker: "Combo individual",
    groups: [
      {
        items: [
          { name: "Menú Combo", desc: "Taco o principal + Patatas + Bebida." },
        ],
      },
    ],
  },
  {
    id: "supercombo",
    number: "08",
    title: "Supercombo",
    kicker: "Para compartir",
    groups: [
      {
        items: [
          {
            name: "Ración mixta total",
            desc: "Ración de papas, alitas, nuggets, tenders, palos de queso y dos toppings.",
          },
        ],
      },
    ],
  },
  {
    id: "postres",
    number: "09",
    title: "Postres & Batidos",
    kicker: "Para terminar",
    groups: [
      {
        title: "Tartas del día",
        items: [{ name: "Tartas del día", desc: "Consulta nuestras tartas disponibles." }],
      },
      {
        title: "Batidos del día",
        items: [
          { name: "Batido de Frutas del día" },
          { name: "Batido Oreo" },
          { name: "Batido Lotus" },
          { name: "Batido Kitkat" },
          { name: "Batido Chips Ahoy" },
        ],
      },
    ],
  },
  {
    id: "bebidas",
    number: "10",
    title: "Bebidas",
    kicker: "Refresca",
    groups: [
      {
        items: [
          { name: "Agua", desc: "50 cl" },
          { name: "Refresco Lata", desc: "33 cl" },
          { name: "Refresco 1 L", desc: "1 L" },
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
          * Carta orientativa. Precios y disponibilidad pueden variar según local y promociones.
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
          Nuestra carta
        </span>
        <h1 className="mt-3 font-display text-6xl md:text-8xl leading-none">
          TACO<span className="text-[#E60000]">MANÍA</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-white/70">
          Echa un vistazo a todo lo que tenemos para ti. Pide en tienda lo que más te apetezca.
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
        {section.intro && (
          <p className="mt-3 text-sm text-white/60">{section.intro}</p>
        )}
      </header>

      <div className="space-y-8">
        {section.groups.map((g, i) => (
          <div key={i}>
            {g.title && (
              <h3 className="font-display text-2xl text-[#FFCC00] mb-3">{g.title}</h3>
            )}
            <ul className="grid sm:grid-cols-2 gap-3">
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
      </div>
    </section>
  );
}

function MenuRow({ item }: { item: Item }) {
  return (
    <li className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-[#FFCC00]/40 hover:-translate-y-0.5">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
          {item.tag && (
            <span className="rounded-full bg-[#E60000]/15 text-[#ff6b6b] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border border-[#E60000]/40">
              <Flame className="inline h-2.5 w-2.5 mr-0.5" />
              {item.tag}
            </span>
          )}
        </div>
        {item.desc && (
          <p className="mt-1 text-sm text-white/60">{item.desc}</p>
        )}
      </div>
      <div className="shrink-0 text-right">
        <span className="font-display text-2xl text-[#FFCC00] tabular-nums">
          {item.price ?? PRICE_TBD}
        </span>
        {!item.price && (
          <p className="text-[10px] uppercase tracking-wider text-white/30">Próximamente</p>
        )}
      </div>
    </li>
  );
}
