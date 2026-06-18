import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Flame, Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta — TACOMANÍA" },
      { name: "description", content: "Tacos, pizzas, shawarmas, arroces, patatas, combos, postres y batidos. Configura tu pedido a tu gusto." },
      { property: "og:title", content: "Carta — TACOMANÍA" },
      { property: "og:description", content: "Menú interactivo: elige, combina y crea tu pedido." },
    ],
  }),
  component: Carta,
});

type Size = "S" | "M" | "L";

const sections = [
  { id: "tacos", label: "Tacos" },
  { id: "pizzas", label: "Pizzas" },
  { id: "shawarma", label: "Shawarma" },
  { id: "arroz", label: "Crea tu arroz" },
  { id: "patatas", label: "Patatas" },
  { id: "complementa", label: "Complementa" },
  { id: "menu", label: "Menú combo" },
  { id: "supercombo", label: "Supercombo" },
  { id: "postres", label: "Postres & Batidos" },
  { id: "bebidas", label: "Bebidas" },
] as const;

const tacosList = [
  "Taco Pollo",
  "Taco Ternera",
  "Taco Mixto",
  "Taco Cordon Blue",
  "Taco Tenders",
  "Taco Nuggets",
  "Taco Frankfurt",
  "Taco Shawarma",
  "Taco América",
];
const tacosBase = ["Ternera", "Frankfurt", "Shawarma"];

const pizzasClasicas = [
  "Margarita",
  "Prosciutto",
  "Prosciutto y Champiñones",
  "Atún y Cebolla",
  "Shawarma",
  "Shawarma Pimiento",
  "Pepperoni",
];
const pizzasEspeciales = [
  { name: "Tacomanía", desc: "Pollo, taco, ternera, andalusí." },
  { name: "Barbacoa", desc: "Carne picada, salchicha, jamón, salsa barbacoa." },
  { name: "Campera", desc: "Huevo, carne picada." },
  { name: "Carbonara", desc: "Bacon, nata, queso, huevo." },
  { name: "Frankfurt", desc: "Frankfurt, mozzarella, salsa." },
  { name: "4 Quesos", desc: "Mozzarella, cheddar, azul, parmesano." },
];

const patatasBase = [
  { name: "Ración Normal", desc: "Crujientes, recién hechas." },
  { name: "Kapsalon", desc: "Patatas, kebab, queso y salsa." },
  { name: "Plato Kebab", desc: "Patatas, kebab y verduras." },
  { name: "Salchipapas", desc: "Patatas, salchicha, ketchup y mayonesa." },
];

const arrozSizes: { size: Size; salsas: number; toppings: number }[] = [
  { size: "S", salsas: 1, toppings: 1 },
  { size: "M", salsas: 2, toppings: 2 },
  { size: "L", salsas: 3, toppings: 3 },
];

const complementaOptions = ["Alitas", "Nuggets", "Tenders", "Palos de Queso", "Postre"];

const postresTartas = ["Tarta del día", "Brownie", "Tarta de queso"];
const batidos = ["Batido de Frutas del día", "Batido Oreo", "Batido Lotus", "Batido Kitkat", "Batido Chips Ahoy"];

const bebidas = [
  { name: "Agua", size: "50 cl" },
  { name: "Refresco Lata", size: "33 cl" },
  { name: "Refresco 1L", size: "1 L" },
];

const toppingsArroz = ["Pollo", "Ternera", "Verduras", "Queso", "Maíz", "Aguacate"];
const salsasArroz = ["Andalusí", "Barbacoa", "Yogur", "Picante", "César", "Curry"];
const toppingsPatatas = ["Queso cheddar", "Bacon", "Jalapeños", "Cebolla crispy", "Pollo", "Ternera"];

function Carta() {
  return (
    <main className="bg-taco-noise min-h-screen text-white">
      <Hero />
      <TabsNav />
      <div className="mx-auto max-w-6xl px-4 pb-24 space-y-16">
        <TacosSection />
        <PizzasSection />
        <ShawarmaSection />
        <ArrozSection />
        <PatatasSection />
        <ComplementaSection />
        <MenuComboSection />
        <SuperComboSection />
        <PostresSection />
        <BebidasSection />
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.4em] text-[#FFCC00]">Menú interactivo</span>
        <h1 className="mt-3 font-display text-6xl md:text-8xl leading-none">
          TACO<span className="text-[#E60000]">MANÍA</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-white/70">
          Elige, combina y crea tu pedido. Tacos franceses, pizzas, shawarmas y mucho más.
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
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function SectionHeader({ id, kicker, title }: { id: string; kicker?: string; title: string }) {
  return (
    <header id={id} className="scroll-mt-24 mb-6">
      {kicker && (
        <span className="block text-xs font-bold uppercase tracking-[0.3em] text-[#FFCC00]">{kicker}</span>
      )}
      <div className="mt-2 flex items-end gap-4">
        <h2 className="font-display text-4xl md:text-5xl leading-none">{title}</h2>
        <div className="flex-1 h-px bg-white/10 mb-2" />
      </div>
    </header>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-[#FFCC00]/40 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(255,204,0,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}

function CheckItem({ label, checked, onToggle }: { label: string; checked: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="group flex w-full items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-left transition-all hover:border-[#FFCC00]/60 hover:bg-black/60"
    >
      <span
        className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-all duration-200 ${
          checked
            ? "border-[#FFCC00] bg-[#FFCC00] scale-110"
            : "border-white/30 bg-transparent group-hover:border-[#FFCC00]/70"
        }`}
      >
        <Check className={`h-3.5 w-3.5 text-black transition-opacity ${checked ? "opacity-100" : "opacity-0"}`} strokeWidth={3} />
      </span>
      <span className={`text-sm font-medium ${checked ? "text-white" : "text-white/80"}`}>{label}</span>
    </button>
  );
}

function useToggleSet() {
  const [set, setSet] = useState<Set<string>>(new Set());
  const toggle = (v: string) =>
    setSet((prev) => {
      const n = new Set(prev);
      n.has(v) ? n.delete(v) : n.add(v);
      return n;
    });
  return { set, toggle };
}

function SupplementInput({ label = "Suplemento" }: { label?: string }) {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-dashed border-[#FFCC00]/40 bg-[#FFCC00]/5 px-4 py-3">
      <div>
        <p className="text-sm font-semibold text-[#FFCC00]">{label}</p>
        <p className="text-xs text-white/60">Añade extras a tu plato</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-black/40 text-white hover:border-[#FFCC00]"
          aria-label="Quitar suplemento"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-6 text-center font-bold tabular-nums">{count}</span>
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="grid h-8 w-8 place-items-center rounded-full bg-[#FFCC00] text-black hover:bg-[#ffd633]"
          aria-label="Añadir suplemento"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ------------------- Sections ------------------- */

function TacosSection() {
  const { set, toggle } = useToggleSet();
  return (
    <section>
      <SectionHeader id="tacos" kicker="01 · Estilo french taco" title="Tacos" />
      <Card>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-semibold uppercase text-white/60">Bases destacadas:</span>
          {tacosBase.map((b) => (
            <span key={b} className="rounded-full bg-[#E60000]/15 text-[#ff6b6b] text-xs font-bold px-3 py-1 border border-[#E60000]/40">
              <Flame className="inline h-3 w-3 mr-1" />
              {b}
            </span>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {tacosList.map((t) => (
            <CheckItem key={t} label={t} checked={set.has(t)} onToggle={() => toggle(t)} />
          ))}
        </div>
        <p className="mt-4 text-xs text-white/50">Marca tus tacos favoritos para personalizar tu pedido.</p>
      </Card>
    </section>
  );
}

function PizzasSection() {
  const { set, toggle } = useToggleSet();
  return (
    <section>
      <SectionHeader id="pizzas" kicker="02 · Masa fina y crujiente" title="Pizzas" />
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-display text-2xl mb-4 text-[#FFCC00]">Clásicas</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {pizzasClasicas.map((p) => (
              <CheckItem key={p} label={p} checked={set.has(p)} onToggle={() => toggle(p)} />
            ))}
          </div>
          <SupplementInput />
        </Card>
        <Card>
          <h3 className="font-display text-2xl mb-4 text-[#FFCC00]">Especialidades</h3>
          <ul className="space-y-3">
            {pizzasEspeciales.map((p) => (
              <li key={p.name} className="rounded-xl border border-white/10 bg-black/30 p-3 hover:border-[#FFCC00]/40 transition-colors">
                <div className="flex items-baseline justify-between">
                  <p className="font-bold">{p.name}</p>
                  <span className="text-xs uppercase tracking-wider text-[#E60000] font-bold">Especial</span>
                </div>
                <p className="text-sm text-white/60 mt-1">{p.desc}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

function ShawarmaSection() {
  return (
    <section>
      <SectionHeader id="shawarma" kicker="03 · El de toda la vida" title="Shawarma" />
      <Card className="overflow-hidden p-0">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto bg-gradient-to-br from-[#E60000]/30 via-black to-[#FFCC00]/20 grid place-items-center">
            <div className="text-center p-6">
              <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-[#FFCC00] to-[#E60000] grid place-items-center text-5xl shadow-2xl shadow-[#E60000]/40">
                🌯
              </div>
              <p className="mt-4 font-display text-3xl">CLÁSICO</p>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFCC00]">Destacado</span>
            <h3 className="font-display text-4xl mt-2">El de toda la vida</h3>
            <p className="mt-3 text-white/70">
              Pan caliente, carne especiada en su punto, verduras frescas y nuestra salsa secreta. Como debe ser.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Ternera", "Pollo", "Mixto"].map((v) => (
                <span key={v} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm">{v}</span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

function ArrozSection() {
  const [size, setSize] = useState<Size>("M");
  const config = useMemo(() => arrozSizes.find((s) => s.size === size)!, [size]);
  const { set: salsas, toggle: toggleSalsa } = useToggleSet();
  const { set: toppings, toggle: toggleTop } = useToggleSet();

  const salsasFull = salsas.size >= config.salsas;
  const toppingsFull = toppings.size >= config.toppings;

  return (
    <section>
      <SectionHeader id="arroz" kicker="04 · A tu manera" title="Crea tu arroz" />
      <Card>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <p className="text-white/70 text-sm">Elige tu tamaño y configura salsas y toppings.</p>
          <div className="inline-flex rounded-full border border-white/15 bg-black/40 p-1">
            {arrozSizes.map((s) => (
              <button
                key={s.size}
                type="button"
                onClick={() => setSize(s.size)}
                className={`px-5 py-2 text-sm font-bold rounded-full transition-all ${
                  size === s.size ? "bg-[#FFCC00] text-black shadow-[0_0_20px_rgba(255,204,0,0.4)]" : "text-white/70 hover:text-white"
                }`}
              >
                {s.size}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#FFCC00]/30 bg-[#FFCC00]/5 px-4 py-3 mb-6 text-sm">
          Tamaño <b className="text-[#FFCC00]">{config.size}</b> · {config.salsas} salsa{config.salsas > 1 ? "s" : ""} + {config.toppings} topping{config.toppings > 1 ? "s" : ""}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold uppercase text-sm tracking-wider">Salsas</h4>
              <span className={`text-xs font-bold ${salsasFull ? "text-[#E60000]" : "text-white/50"}`}>
                {salsas.size}/{config.salsas}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {salsasArroz.map((s) => {
                const checked = salsas.has(s);
                const disabled = !checked && salsasFull;
                return (
                  <button
                    key={s}
                    type="button"
                    disabled={disabled}
                    onClick={() => toggleSalsa(s)}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm text-left transition-all ${
                      checked
                        ? "border-[#FFCC00] bg-[#FFCC00]/15 text-white"
                        : disabled
                          ? "border-white/5 bg-black/20 text-white/30 cursor-not-allowed"
                          : "border-white/10 bg-black/40 text-white/80 hover:border-[#FFCC00]/60"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${checked ? "bg-[#FFCC00]" : "bg-white/30"}`} />
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold uppercase text-sm tracking-wider">Toppings</h4>
              <span className={`text-xs font-bold ${toppingsFull ? "text-[#E60000]" : "text-white/50"}`}>
                {toppings.size}/{config.toppings}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {toppingsArroz.map((t) => {
                const checked = toppings.has(t);
                const disabled = !checked && toppingsFull;
                return (
                  <button
                    key={t}
                    type="button"
                    disabled={disabled}
                    onClick={() => toggleTop(t)}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm text-left transition-all ${
                      checked
                        ? "border-[#FFCC00] bg-[#FFCC00]/15 text-white"
                        : disabled
                          ? "border-white/5 bg-black/20 text-white/30 cursor-not-allowed"
                          : "border-white/10 bg-black/40 text-white/80 hover:border-[#FFCC00]/60"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${checked ? "bg-[#FFCC00]" : "bg-white/30"}`} />
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

function PatatasSection() {
  const { set, toggle } = useToggleSet();
  const [size, setSize] = useState<Size>("M");
  const { set: tops, toggle: toggleTop } = useToggleSet();
  const maxToppings = size === "S" ? 2 : size === "M" ? 4 : 6;
  const full = tops.size >= maxToppings;

  return (
    <section>
      <SectionHeader id="patatas" kicker="05 · Crujientes & doradas" title="Patatas" />
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-display text-2xl mb-4 text-[#FFCC00]">Nuestras patatas</h3>
          <ul className="space-y-2">
            {patatasBase.map((p) => (
              <li key={p.name}>
                <button
                  type="button"
                  onClick={() => toggle(p.name)}
                  className={`w-full text-left rounded-xl border p-3 transition-all ${
                    set.has(p.name)
                      ? "border-[#FFCC00] bg-[#FFCC00]/10"
                      : "border-white/10 bg-black/30 hover:border-[#FFCC00]/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold">{p.name}</p>
                    {set.has(p.name) && <Check className="h-4 w-4 text-[#FFCC00]" strokeWidth={3} />}
                  </div>
                  <p className="text-sm text-white/60 mt-1">{p.desc}</p>
                </button>
              </li>
            ))}
          </ul>
          <SupplementInput />
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-2xl text-[#FFCC00]">Crea tus patatas</h3>
            <div className="inline-flex rounded-full border border-white/15 bg-black/40 p-1">
              {(["S", "M", "L"] as Size[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`px-4 py-1.5 text-sm font-bold rounded-full transition-all ${
                    size === s ? "bg-[#E60000] text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-white/70">Elige tus toppings favoritos</p>
            <span className={`text-xs font-bold ${full ? "text-[#E60000]" : "text-white/50"}`}>
              {tops.size}/{maxToppings}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {toppingsPatatas.map((t) => {
              const checked = tops.has(t);
              const disabled = !checked && full;
              return (
                <CheckItemDisabled
                  key={t}
                  label={t}
                  checked={checked}
                  disabled={disabled}
                  onToggle={() => toggleTop(t)}
                />
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}

function CheckItemDisabled({ label, checked, disabled, onToggle }: { label: string; checked: boolean; disabled: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onToggle}
      className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all ${
        checked
          ? "border-[#FFCC00] bg-[#FFCC00]/10"
          : disabled
            ? "border-white/5 bg-black/20 text-white/30 cursor-not-allowed"
            : "border-white/10 bg-black/40 hover:border-[#FFCC00]/60"
      }`}
    >
      <span
        className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border ${
          checked ? "border-[#FFCC00] bg-[#FFCC00]" : "border-white/30"
        }`}
      >
        <Check className={`h-3.5 w-3.5 text-black ${checked ? "opacity-100" : "opacity-0"}`} strokeWidth={3} />
      </span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function ComplementaSection() {
  const { set, toggle } = useToggleSet();
  return (
    <section>
      <SectionHeader id="complementa" kicker="06 · Para acompañar" title="Complementa tu menú" />
      <Card>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {complementaOptions.map((c) => (
            <CheckItem key={c} label={c} checked={set.has(c)} onToggle={() => toggle(c)} />
          ))}
        </div>
      </Card>
    </section>
  );
}

function MenuComboSection() {
  return (
    <section>
      <SectionHeader id="menu" kicker="07 · Combo individual" title="Menú tu comida" />
      <Card className="bg-gradient-to-br from-[#FFCC00]/10 via-transparent to-[#E60000]/10 border-[#FFCC00]/30">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "Principal", d: "Taco, pizza o shawarma a elegir", icon: "🌮" },
            { t: "Patatas", d: "Ración de patatas crujientes", icon: "🍟" },
            { t: "Bebida", d: "Refresco o agua", icon: "🥤" },
          ].map((b) => (
            <div key={b.t} className="rounded-xl border border-white/10 bg-black/40 p-4 text-center hover:border-[#FFCC00]/60 hover:-translate-y-0.5 transition-all">
              <div className="text-4xl">{b.icon}</div>
              <p className="mt-2 font-display text-xl text-[#FFCC00]">{b.t}</p>
              <p className="text-sm text-white/70 mt-1">{b.d}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

function SuperComboSection() {
  const items = ["Ración de papas", "Alitas", "Nuggets", "Tenders", "Palos de queso", "Dos toppings"];
  return (
    <section>
      <SectionHeader id="supercombo" kicker="08 · Para compartir" title="Supercombo" />
      <Card className="border-[#E60000]/40 bg-gradient-to-br from-[#E60000]/15 via-black/50 to-[#FFCC00]/10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h3 className="font-display text-3xl">Ración mixta total</h3>
          <span className="rounded-full bg-[#E60000] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white animate-pulse">
            Top ventas
          </span>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {items.map((i) => (
            <li key={i} className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#FFCC00]" />
              <span className="text-sm font-medium">{i}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}

function PostresSection() {
  const { set, toggle } = useToggleSet();
  return (
    <section>
      <SectionHeader id="postres" kicker="09 · Para terminar" title="Postres & Batidos" />
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-display text-2xl mb-4 text-[#FFCC00]">Tartas del día</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {postresTartas.map((p) => (
              <CheckItem key={p} label={p} checked={set.has(p)} onToggle={() => toggle(p)} />
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="font-display text-2xl mb-4 text-[#FFCC00]">Batidos del día</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {batidos.map((b) => (
              <CheckItem key={b} label={b} checked={set.has(b)} onToggle={() => toggle(b)} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function BebidasSection() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section>
      <SectionHeader id="bebidas" kicker="10 · Refresca" title="Bebidas" />
      <Card>
        <div className="grid sm:grid-cols-3 gap-3">
          {bebidas.map((b) => {
            const active = selected === b.name;
            return (
              <button
                key={b.name}
                type="button"
                onClick={() => setSelected(active ? null : b.name)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  active
                    ? "border-[#FFCC00] bg-[#FFCC00]/10 shadow-[0_0_20px_rgba(255,204,0,0.25)]"
                    : "border-white/10 bg-black/30 hover:border-[#FFCC00]/50 hover:-translate-y-0.5"
                }`}
              >
                <p className="font-bold text-lg">{b.name}</p>
                <p className="text-sm text-white/60 mt-1">{b.size}</p>
              </button>
            );
          })}
        </div>
      </Card>
      <p className="text-center text-xs text-white/40 pt-8">
        * Precios orientativos. Pueden variar según local y promociones.
      </p>
    </section>
  );
}
