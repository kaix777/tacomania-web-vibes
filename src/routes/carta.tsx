import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Flame, ArrowRight, Pizza, IceCreamCone, GlassWater, Utensils, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import tacoClassic from "@/assets/taco-real-1.jpg";
import tacoSpicy from "@/assets/taco-real-2.jpg";
import tacoXxl from "@/assets/taco-real-3.jpg";
import tacoBbq from "@/assets/taco-real-4.jpg";
import tacoVeggie from "@/assets/taco-real-5.jpg";
import fries from "@/assets/fries.jpg";
import friesS from "@/assets/fries-s.jpg";
import friesM from "@/assets/fries-m.jpg";
import friesL from "@/assets/fries-l.jpg";
import sauces from "@/assets/sauces.jpg";
import drinks from "@/assets/drinks.jpg";
import pizza from "@/assets/pizza.jpg";
import rice from "@/assets/rice.jpg";
import riceS from "@/assets/rice-s.jpg";
import riceM from "@/assets/rice-m.jpg";
import riceL from "@/assets/rice-l.jpg";
import dessert from "@/assets/dessert.jpg";

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
  image?: string;
  tag?: string;
  featured?: boolean;
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
          {
            name: "Taco Pollo",
            price: "6,50 €",
            desc: "Pollo marinado, patatas, queso, salsa andalouse, salsa Tacomanía.",
            image: tacoBbq,
            featured: true,
          },
          {
            name: "Taco Ternera",
            price: "7,50 €",
            tag: "Top",
            desc: "Ternera, patatas, queso, salsa andalouse, salsa Tacomanía.",
            image: tacoClassic,
            featured: true,
          },
          {
            name: "Taco Mixto",
            price: "7,00 €",
            desc: "Pollo marinado, ternera, patatas, queso, salsa andalouse, salsa Tacomanía.",
            image: tacoXxl,
            featured: true,
          },
          {
            name: "Taco Shawarma",
            price: "6,00 €",
            tag: "Top",
            desc: "Carne shawarma, patatas, queso, salsa de yogur, salsa Tacomanía, salsa andalouse.",
            image: tacoSpicy,
          },
          {
            name: "Taco Frankfurt",
            price: "6,50 €",
            desc: "Salchicha, ternera, patatas, queso, cebolla crispy, salsa rosa, salsa Tacomanía.",
            image: tacoVeggie,
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
          { name: "Margarita", price: "6,00 €", image: pizza, featured: true },
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
            image: tacoXxl,
            featured: true,
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
    title: "Patatas y platos",
    kicker: "Crujientes y cargadas",
    Icon: Utensils,
    groups: [
      {
        items: [
          {
            name: "Ración simple",
            price: "2,50 €",
            desc: "Crujientes, recién hechas.",
            image: fries,
            featured: true,
          },
          {
            name: "Kapsalon",
            price: "6,50 €",
            tag: "Top",
            desc: "Patatas, kebab, queso fundido y salsas.",
            image: tacoXxl,
            featured: true,
          },
          {
            name: "Plato Kebab",
            price: "6,50 €",
            desc: "Patatas, kebab y verduras.",
          },
          {
            name: "Salchipapas",
            price: "6,00 €",
            desc: "Patatas, salchicha, ketchup y mayonesa.",
          },
        ],
      },
      {
        title: "Crea tus patatas",
        items: [
          { name: "Tamaño S", price: "4,00 €", desc: "1 salsa  ·  1 topping.", image: friesS, featured: true },
          { name: "Tamaño M", price: "6,00 €", desc: "2 salsas  ·  2 toppings.", image: friesM, featured: true },
          { name: "Tamaño L", price: "8,00 €", desc: "3 salsas  ·  3 toppings.", image: friesL, featured: true },
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
          {
            name: "Tamaño S",
            price: "5,00 €",
            desc: "1 salsa y 1 topping a elegir.",
            image: riceS,
            featured: true,
          },
          {
            name: "Tamaño M",
            price: "7,00 €",
            desc: "2 salsas y 2 toppings a elegir.",
            image: riceM,
            featured: true,
          },
          {
            name: "Tamaño L",
            price: "9,00 €",
            desc: "3 salsas y 3 toppings a elegir.",
            image: riceL,
            featured: true,
          },
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
          {
            name: "Supercombo",
            price: "10,00 €",
            tag: "Top",
            desc: "Nuggets, tenders, palos de queso, alitas, patatas, carne a elegir y dos salsas.",
            image: tacoXxl,
            featured: true,
          },
          {
            name: "Completa tu comida a menú",
            price: "3,00 €",
            desc: "Incluye patatas y bebida.",
            image: fries,
            featured: true,
          },
          {
            name: "Completa tu menú con entrante",
            price: "2,50 €",
            desc: "A elegir entre nuggets, tenders, palos de queso o alitas.",
            image: sauces,
            featured: true,
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
    Icon: IceCreamCone,
    groups: [
      {
        items: [
          {
            name: "Batidos",
            price: "4,00 €",
            desc: "Consulta nuestros sabores del día.",
            image: dessert,
            featured: true,
          },
          {
            name: "Tartas del día",
            price: "3,00 €",
            desc: "Pregúntanos por las tartas disponibles.",
            image: dessert,
            featured: true,
          },
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
          { name: "Agua", price: "1,50 €", image: drinks, featured: true },
          { name: "Refresco", price: "2,00 €", image: drinks, featured: true },
          { name: "Cerveza", price: "2,00 €", image: drinks, featured: true },
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
      <main className="mx-auto max-w-6xl px-4 pb-24 space-y-20 md:space-y-28">
        {sections.map((s, i) => (
          <MenuSection key={s.id} section={s} alt={i % 2 === 1} />
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
      <div className="mx-auto max-w-6xl px-2 overflow-x-auto scrollbar-none">
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

function MenuSection({ section, alt }: { section: Section; alt: boolean }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24"
    >
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

      <div className="space-y-10">
        {section.groups.map((g, i) => (
          <GroupBlock key={i} group={g} />
        ))}

        {section.extras?.map((ex) => (
          <ExtrasCard key={ex.title} extra={ex} />
        ))}
      </div>
      {/* subtle decorative divider */}
      <div className="mt-16 flex items-center justify-center gap-3 opacity-60">
        <div className="h-px w-16 bg-primary/30" />
        <Flame size={14} className="text-primary" />
        <div className="h-px w-16 bg-primary/30" />
      </div>
      {alt /* spacer accent on alt sections */ && <div className="sr-only" />}
    </section>
  );
}

function GroupBlock({ group }: { group: Group }) {
  const featured = group.items.filter((i) => i.featured && i.image);
  const rest = group.items.filter((i) => !(i.featured && i.image));

  return (
    <div>
      {group.title && (
        <h3 className="font-display text-3xl text-primary mb-5">{group.title}</h3>
      )}

      {featured.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <FeaturedCard key={item.name} item={item} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <ul
          className={
            "grid gap-3 sm:grid-cols-2 " + (featured.length > 0 ? "mt-6" : "")
          }
        >
          {rest.map((item) => (
            <CompactRow key={item.name} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

function FeaturedCard({ item }: { item: Item }) {
  return (
    <article className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:-translate-y-1 hover:border-primary hover:shadow-glow transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden bg-black">
        <img
          src={item.image}
          alt={item.name}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.tag && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-glow">
            <Flame size={11} /> {item.tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-display text-2xl leading-tight">{item.name}</h4>
          {item.price && (
            <span className="shrink-0 rounded-full bg-primary text-primary-foreground px-3 py-1 text-sm font-bold tabular-nums">
              {item.price}
            </span>
          )}
        </div>
        {item.desc && (
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
        )}
      </div>
    </article>
  );
}

function CompactRow({ item }: { item: Item }) {
  return (
    <li className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur-sm px-4 py-3.5 hover:border-primary/60 hover:bg-card transition-all">
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h4 className="font-bold text-base leading-tight">{item.name}</h4>
          {item.tag && (
            <span className="rounded-full bg-primary/15 border border-primary/40 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
              {item.tag}
            </span>
          )}
        </div>
        {item.desc && (
          <p className="mt-1 text-xs text-muted-foreground leading-snug">{item.desc}</p>
        )}
      </div>
      {item.price && (
        <span className="shrink-0 font-display text-xl text-primary tabular-nums">
          {item.price}
        </span>
      )}
    </li>
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
