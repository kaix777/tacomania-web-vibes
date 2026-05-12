import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Music2 } from "lucide-react";
import heroImg from "@/assets/hero-taco.jpg";
import { favorites } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tacomania — Tacos franceses con mucho queso" },
      { name: "description", content: "Tacos franceses XXL: rápidos, potentes y con queso fundido. Descubre nuestros favoritos." },
      { property: "og:title", content: "Tacomania — Tacos franceses" },
      { property: "og:description", content: "Los mejores tacos franceses de la ciudad." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-grain text-primary-foreground">
        <div className="absolute inset-0 opacity-40">
          <img src={heroImg} alt="" width={1920} height={1080} className="h-full w-full object-cover mix-blend-overlay" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              <Flame size={14} /> French tacos · Street food
            </span>
            <h1 className="mt-5 font-display text-6xl md:text-8xl leading-[0.9]">
              TACO<br />MANIA
            </h1>
            <p className="mt-5 text-lg md:text-xl font-semibold max-w-md">
              Los mejores tacos franceses de la ciudad.
            </p>
            <p className="mt-2 text-sm md:text-base opacity-90 max-w-md">
              Comida rápida, potente y con mucho, mucho queso fundido. Hechos a tu manera.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/carta"
                className="group inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 font-bold uppercase text-sm tracking-wide hover:scale-105 active:scale-100 transition-transform shadow-glow"
              >
                Ver carta
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://www.tiktok.com/@tacomania.to"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-background/70 px-6 py-3 font-bold uppercase text-sm tracking-wide hover:bg-background/10 transition-colors"
              >
                <Music2 size={18} /> TikTok
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-8 rounded-full bg-primary-glow blur-3xl opacity-50" />
            <img
              src={heroImg}
              alt="Taco francés con queso fundido y carne"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-glow object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* QUÉ ES UN TACO FRANCÉS */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">¿Qué es?</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">El taco francés, explicado</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Olvida lo que sabes del taco mexicano. El <strong className="text-foreground">taco francés</strong> es
              una tortilla de trigo rellena con carne a elegir, patatas fritas, queso fundido y salsas. Se cierra
              como un sobre y se prensa en plancha hasta quedar crujiente por fuera y cremoso por dentro.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Nació en Lyon, conquistó TikTok y ahora está aquí, listo para volverte adicto.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { n: "+15", l: "Combinaciones" },
              { n: "100%", l: "Queso fundido" },
              { n: "5min", l: "A la plancha" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-card border border-border p-4 text-center shadow-card">
                <div className="font-display text-3xl text-primary">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAVORITOS */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Top ventas</span>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">Nuestros favoritos</h2>
            </div>
            <Link to="/carta" className="text-sm font-semibold text-primary hover:underline">
              Ver carta completa →
            </Link>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((t) => (
              <article
                key={t.name}
                className="group rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl">{t.name}</h3>
                    <span className="rounded-full bg-primary text-primary-foreground px-3 py-1 text-sm font-bold">
                      {t.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIKTOK CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-grain text-primary-foreground p-8 md:p-14 text-center">
          <Music2 className="mx-auto" size={36} />
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Síguenos en TikTok</h2>
          <p className="mt-3 max-w-xl mx-auto opacity-90">
            Mira nuestros tacos en acción: queso derritiéndose, planchas humeantes y mucho ASMR.
          </p>
          <a
            href="https://www.tiktok.com/@tacomania.to"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 font-bold uppercase text-sm tracking-wide hover:scale-105 transition-transform"
          >
            @tacomania.to <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
