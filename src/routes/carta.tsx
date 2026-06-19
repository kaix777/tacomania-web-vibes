import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Flame, ArrowRight, Pizza, IceCreamCone, GlassWater, Utensils, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

// Tacos
import tacoPollo from "@/assets/taco-pollo.jpg";
import tacoTernera from "@/assets/taco-ternera.jpg";
import tacoMixto from "@/assets/taco-mixto.jpg";
import tacoShawarma from "@/assets/taco-shawarma.jpg";
import tacoFrankfurt from "@/assets/taco-frankfurt.jpg";
import tacoCordon from "@/assets/taco-cordon.jpg";
import tacoTenders from "@/assets/taco-tenders.jpg";
import tacoNuggets from "@/assets/taco-nuggets.jpg";
import shawarmaWrap from "@/assets/shawarma-wrap.jpg";
import tenders from "@/assets/tenders.jpg";
import nuggets from "@/assets/nuggets.jpg";

// Pizzas
import pizzaMargarita from "@/assets/pizza.jpg";
import pizzaPepperoni from "@/assets/pizza-pepperoni.jpg";
import pizzaQuesos from "@/assets/pizza-quesos.jpg";
import pizzaBbq from "@/assets/pizza-bbq.jpg";
import pizzaTuna from "@/assets/pizza-tuna.jpg";
import pizzaProsciutto from "@/assets/pizza-prosciutto.jpg";
import pizzaCarbonara from "@/assets/pizza-carbonara.jpg";

// Patatas / Arroz
import fries from "@/assets/fries.jpg";
import kapsalon from "@/assets/kapsalon.jpg";
import kebabPlate from "@/assets/kebab-plate.jpg";
import salchipapas from "@/assets/salchipapas.jpg";
import rice from "@/assets/rice.jpg";

// Extras / Postres / Bebidas
import supercombo from "@/assets/supercombo.jpg";
import sauces from "@/assets/sauces.jpg";
import milkshake from "@/assets/milkshake.jpg";
import cake from "@/assets/cake.jpg";
import water from "@/assets/water.jpg";
import soda from "@/assets/soda.jpg";
import beer from "@/assets/beer.jpg";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta — TACOMANIA" },
      {
        name: "description",
        content:
          "Carta completa de Tacomanía: tacos franceses, pizzas artesanas, patatas, arroces, postres y bebidas. Recién hechos al momento.",
      },
      { property: "og:title", content: "Carta — TACOMANIA" },
      {
        property: "og:description",
        content: "Tacos, pizzas y mucho más, preparados al momento.",
      },
    ],
  }),
  component: Carta,
});

type Item = {
  name: string;
  desc?: string;
  price?: string;
  image: string;
  tag?: string;
};
type Group = { title?: string; items: Item[] };
type Extra = { title: string; lines: string[] };
type Section = {
  id: string;
  number: string;
  title: string;
  kicker: string;
  intro?: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  groups: Group[];
  extras?: Extra[];
};

const sections: Section[] = [
  {
    id: "tacos",
    number: "01",
    title: "Tacos",
    kicker: "Estilo French Taco",
    Icon: Flame,
    intro:
      "Tortilla prensada en plancha, queso fundido, patatas dentro y nuestras salsas de la casa.",
    groups: [
      {
        items: [
          { name: "Taco Pollo", price: "6,50 €", desc: "Pollo marinado, patatas, queso, salsa andalouse, salsa Tacomanía.", image: tacoPollo },
          { name: "Taco Ternera", price: "7,50 €", tag: "Top", desc: "Ternera, patatas, queso, salsa andalouse, salsa Tacomanía.", image: tacoTernera },
          { name: "Taco Mixto", price: "7,00 €", desc: "Pollo marinado, ternera, patatas, queso, salsa andalouse, salsa Tacomanía.", image: tacoMixto },
          { name: "Taco Shawarma", price: "6,00 €", tag: "Top", desc: "Carne shawarma, patatas, queso, salsa de yogur, salsa Tacomanía, salsa andalouse.", image: tacoShawarma },
          { name: "Taco Frankfurt", price: "6,50 €", desc: "Salchicha, ternera, patatas, queso, cebolla crispy, salsa rosa, salsa Tacomanía.", image: tacoFrankfurt },
          { name: "Taco Cordon Bleu", price: "6,50 €", desc: "Cordon bleu, jamón, patatas, queso, salsa andalouse, salsa Tacomanía.", image: tacoCordon },
          { name: "Taco Tenders", price: "6,00 €", desc: "Pollo crispy, patatas, queso, salsa andalouse, salsa Tacomanía.", image: tacoTenders },
          { name: "Taco Nuggets", price: "6,00 €", desc: "Nuggets, patatas, queso, salsa andalouse, salsa Tacomanía.", image: tacoNuggets },
        ],
      },
      {
        title: "También por aquí",
        items: [
          { name: "Shawarma Clásico", price: "4,50 €", desc: "El de toda la vida: pan caliente, carne especiada, verduras y salsa.", image: shawarmaWrap },
        ],
      },
    ],
    extras: [
      {
        title: "Personaliza tu taco",
        lines: [
          "Salsas aparte: Argelina · Brazil · Samurái · Cheddar · Yogur · Rosa.",
          "Tamaño L: +2,00 €  ·  Tamaño XL: +4,00 €",
          "Ingredientes aparte: +1,00 €",
        ],
      },
    ],
  },
  {
    id: "pizzas",
    number: "02",
    title: "Pizzas",
    kicker: "Masa fina y crujiente",
    Icon: Pizza,
    intro: "Horneadas al momento. Clásicas italianas y nuestras especialidades.",
    groups: [
      {
        title: "Clásicas",
        items: [
          { name: "Margarita", price: "6,00 €", image: pizzaMargarita },
          { name: "Prosciutto", price: "7,00 €", image: pizzaProsciutto },
          { name: "Prosciutto e Fungi", price: "7,50 €", image: pizzaProsciutto },
          { name: "Pepperoni", price: "7,00 €", image: pizzaPepperoni },
          { name: "Shawarma", price: "7,00 €", image: pizzaBbq },
          { name: "Shawarma y Pimientos", price: "7,50 €", image: pizzaBbq },
          { name: "4 Quesos", price: "7,50 €", image: pizzaQuesos },
          { name: "Atún y Cebolla", price: "7,00 €", image: pizzaTuna },
          { name: "Frankfurt", price: "7,00 €", image: pizzaPepperoni },
        ],
      },
      {
        title: "Especialidades",
        items: [
          { name: "Tacomanía", price: "9,00 €", tag: "Top", desc: "Pollo marinado, ternera, salsa andalouse.", image: pizzaBbq },
          { name: "Barbacoa", price: "8,50 €", desc: "Carne picada, salchicha, jamón, salsa barbacoa.", image: pizzaBbq },
          { name: "Campera", price: "8,00 €", desc: "Huevo, carne picada.", image: pizzaCarbonara },
          { name: "Carbonara", price: "8,00 €", image: pizzaCarbonara },
        ],
      },
    ],
  },
  {
    id: "patatas",
    number: "03",
    title: "Patatas y platos",
    kicker: "Crujientes y cargadas",
    Icon: Utensils,
    groups: [
      {
        items: [
          { name: "Ración simple", price: "2,50 €", desc: "Crujientes, recién hechas.", image: fries },
          { name: "Kapsalon", price: "6,50 €", tag: "Top", desc: "Patatas, kebab, queso fundido y salsas.", image: kapsalon },
          { name: "Plato Kebab", price: "6,50 €", desc: "Patatas, kebab y verduras.", image: kebabPlate },
          { name: "Salchipapas", price: "6,00 €", desc: "Patatas, salchicha, ketchup y mayonesa.", image: salchipapas },
        ],
      },
      {
        title: "Crea tus patatas",
        items: [
          { name: "Tamaño S", price: "4,00 €", desc: "1 salsa  ·  1 topping.", image: fries },
          { name: "Tamaño M", price: "6,00 €", desc: "2 salsas  ·  2 toppings.", image: fries },
          { name: "Tamaño L", price: "8,00 €", desc: "3 salsas  ·  3 toppings.", image: fries },
        ],
      },
    ],
  },
  {
    id: "arroz",
    number: "04",
    title: "Arroz",
    kicker: "Crea tu arroz",
    Icon: Utensils,
    intro: "Elige tu tamaño y combínalo con tus salsas y toppings favoritos.",
    groups: [
      {
        items: [
          { name: "Tamaño S", price: "5,00 €", desc: "1 salsa y 1 topping a elegir.", image: rice },
          { name: "Tamaño M", price: "7,00 €", desc: "2 salsas y 2 toppings a elegir.", image: rice },
          { name: "Tamaño L", price: "9,00 €", desc: "3 salsas y 3 toppings a elegir.", image: rice },
        ],
      },
    ],
  },
  {
    id: "extras",
    number: "05",
    title: "Extras y complementos",
    kicker: "Para acompañar",
    Icon: Sparkles,
    groups: [
      {
        items: [
          { name: "Supercombo", price: "10,00 €", tag: "Top", desc: "Nuggets, tenders, palos de queso, alitas, patatas, carne a elegir y dos salsas.", image: supercombo },
          { name: "Completa tu comida a menú", price: "3,00 €", desc: "Incluye patatas y bebida.", image: fries },
          { name: "Completa tu menú con entrante", price: "2,50 €", desc: "A elegir entre nuggets, tenders, palos de queso o alitas.", image: sauces },
        ],
      },
    ],
  },
  {
    id: "postres",
    number: "06",
    title: "Postres",
    kicker: "Para terminar",
    Icon: IceCreamCone,
    groups: [
      {
        items: [
          { name: "Batidos", price: "4,00 €", desc: "Consulta nuestros sabores del día.", image: milkshake },
          { name: "Tartas del día", price: "3,00 €", desc: "Pregúntanos por las tartas disponibles.", image: cake },
        ],
      },
    ],
  },
  {
    id: "bebidas",
    number: "07",
    title: "Bebidas",
    kicker: "Refresca",
    Icon: GlassWater,
    groups: [
      {
        items: [
          { name: "Agua", price: "1,50 €", image: water },
          { name: "Refresco", price: "2,00 €", image: soda },
          { name: "Cerveza", price: "2,00 €", image: beer },
        ],
      },
    ],
  },
];

function Carta() {
  return (
    <>
      <Hero />
      <TabsNav />
      <main className="mx-auto max-w-7xl px-4 pb-24 space-y-24 md:space-y-32">
        {sections.map((s) => (
          <MenuSection key={s.id} section={s} />
        ))}
        <FinalCta />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-foreground border-b border-primary/20">
      <div className="absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-primary blur-3xl opacity-40" />
      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-primary-deep blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-28 grid md:grid-cols-[1fr_auto] gap-10 items-center">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 backdrop-blur border border-primary/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Flame size={14} /> Nuestra carta
          </span>
          <h1 className="mt-5 font-display text-7xl md:text-9xl leading-[0.85] text-primary drop-shadow-[0_4px_30px_rgba(255,40,40,0.45)]">
            LA<br />CARTA
          </h1>
          <p className="mt-5 text-lg md:text-xl font-semibold max-w-md mx-auto md:mx-0">
            Tacos franceses, pizzas y mucho más.
          </p>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-md mx-auto md:mx-0">
            Todo preparado al momento. Recién hecho, con muchísimo queso fundido.
          </p>
          <div className="mt-7 flex flex-wrap gap-2 justify-center md:justify-start">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground/80 hover:border-primary hover:text-primary transition-colors"
              >
                <s.Icon size={12} /> {s.title}
              </a>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-50" />
          <img
            src={logo}
            alt="Logo Tacomania"
            width={360}
            height={360}
            className="relative w-48 sm:w-60 md:w-72 drop-shadow-[0_20px_60px_rgba(255,40,40,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}

function TabsNav() {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  const railRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = railRef.current?.querySelector<HTMLElement>(`[data-tab="${active}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  return (
    <nav className="sticky top-0 z-40 border-b border-primary/20 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-2 overflow-x-auto scrollbar-none">
        <ul ref={railRef} className="flex gap-1 py-2.5 whitespace-nowrap">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  data-tab={s.id}
                  href={`#${s.id}`}
                  className={
                    "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all " +
                    (isActive
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5")
                  }
                >
                  <s.Icon size={14} />
                  {s.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

function MenuSection({ section }: { section: Section }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <header className="mb-10">
        <div className="flex items-center gap-3">
          <span className="font-display text-3xl text-primary leading-none">{section.number}</span>
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/90">
            {section.kicker}
          </span>
        </div>
        <div className="mt-3 flex items-end gap-5">
          <h2 className="font-display text-5xl md:text-7xl leading-none">{section.title}</h2>
          <section.Icon className="text-primary mb-2" size={28} />
        </div>
        {section.intro && (
          <p className="mt-4 max-w-2xl text-muted-foreground">{section.intro}</p>
        )}
        <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-primary to-transparent" />
      </header>

      <div className="space-y-12">
        {section.groups.map((g, i) => (
          <GroupBlock key={i} group={g} />
        ))}

        {section.extras?.map((ex) => (
          <ExtrasCard key={ex.title} extra={ex} />
        ))}
      </div>

      <div className="mt-16 flex items-center justify-center gap-3 opacity-60">
        <div className="h-px w-16 bg-primary/30" />
        <Flame size={14} className="text-primary" />
        <div className="h-px w-16 bg-primary/30" />
      </div>
    </section>
  );
}

function GroupBlock({ group }: { group: Group }) {
  return (
    <div>
      {group.title && (
        <h3 className="font-display text-3xl text-primary mb-6">{group.title}</h3>
      )}
      <div className="grid gap-5 sm:gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {group.items.map((item) => (
          <ProductCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ item }: { item: Item }) {
  return (
    <article className="group relative flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:-translate-y-1 hover:border-primary hover:shadow-glow transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-black">
        <img
          src={item.image}
          alt={item.name}
          width={1024}
          height={1024}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.tag && (
          <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-glow">
            <Flame size={11} /> {item.tag}
          </span>
        )}
        {item.price && (
          <span className="absolute bottom-2.5 right-2.5 rounded-full bg-black/80 backdrop-blur-sm border border-primary/40 text-primary px-3 py-1 text-sm font-bold tabular-nums shadow-lg">
            {item.price}
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col p-4">
        <h4 className="font-display text-lg sm:text-xl leading-tight">{item.name}</h4>
        {item.desc && (
          <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-3">
            {item.desc}
          </p>
        )}
      </div>
    </article>
  );
}

function ExtrasCard({ extra }: { extra: Extra }) {
  return (
    <aside className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card to-card p-6 md:p-8 shadow-card">
      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary blur-3xl opacity-20" />
      <div className="relative">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles size={18} />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">A tu manera</span>
        </div>
        <h4 className="mt-2 font-display text-3xl">{extra.title}</h4>
        <ul className="mt-4 space-y-2 text-sm md:text-base text-foreground/85">
          {extra.lines.map((l) => (
            <li key={l} className="flex gap-3">
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-grain text-primary-foreground p-8 md:p-14 text-center">
      <h2 className="font-display text-4xl md:text-5xl">¿Listo para pedir?</h2>
      <p className="mt-3 max-w-xl mx-auto opacity-90">
        Pásate por la tienda. Te esperamos con la plancha encendida y el queso fundiéndose.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          to="/contacto"
          className="group inline-flex items-center gap-2 rounded-full bg-black text-white px-7 py-3.5 font-bold uppercase text-sm tracking-wide hover:scale-105 transition-transform"
        >
          Cómo llegar
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3.5 font-bold uppercase text-sm tracking-wide hover:scale-105 transition-transform"
        >
          Volver al inicio
        </Link>
      </div>
      <p className="mt-8 text-xs opacity-70">
        * Carta orientativa. Precios y disponibilidad pueden variar según promociones.
      </p>
    </section>
  );
}
