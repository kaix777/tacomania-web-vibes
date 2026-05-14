import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Flame, Music2, Instagram } from "lucide-react";
import heroImg from "@/assets/taco-real-1.jpg";
import logo from "@/assets/logo.png";
import { favorites } from "@/data/menu";
import { ProductDialog, type Product } from "@/components/ProductDialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tacomania — Tacos franceses con mucho queso" },
      { name: "description", content: "Tacos franceses XXL: rápidos, potentes y con queso fundido. Por la noche y por el día." },
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
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-50">
          <img src={heroImg} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        </div>
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary blur-3xl opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-20 md:py-32 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Logo on top for mobile, on the right for desktop */}
          <div className="relative flex md:hidden justify-center order-1">
            <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-50" />
            <img
              src={logo}
              alt="Logo de Tacomania"
              width={400}
              height={400}
              className="relative w-56 sm:w-72 drop-shadow-[0_20px_60px_rgba(255,40,40,0.5)]"
            />
          </div>
          <div className="order-2 md:order-1 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur border border-primary/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <Flame size={14} /> French tacos · Street food
            </span>
            <h1 className="mt-4 font-display text-6xl sm:text-7xl md:text-9xl leading-[0.85] text-primary drop-shadow-[0_4px_30px_rgba(255,40,40,0.5)]">
              TACO<br />MANIA
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl font-semibold max-w-md mx-auto md:mx-0">
              Los mejores tacos franceses de la ciudad.
            </p>
            <p className="mt-2 text-sm md:text-base opacity-80 max-w-md mx-auto md:mx-0">
              Por la noche y por el día. Comida rápida, potente y con muchísimo queso fundido.
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to="/carta"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 sm:px-7 py-3 sm:py-3.5 font-bold uppercase text-sm tracking-wide hover:bg-primary-glow hover:scale-105 active:scale-100 transition-all shadow-glow"
              >
                Ver carta
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://www.tiktok.com/@tacomania.to"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 font-bold uppercase text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
              >
                <Music2 size={18} /> TikTok
              </a>
            </div>
          </div>
          <div className="relative hidden md:flex justify-center order-2">
            <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-50" />
            <img
              src={logo}
              alt="Logo de Tacomania"
              width={520}
              height={520}
              className="relative w-full max-w-md drop-shadow-[0_20px_60px_rgba(255,40,40,0.5)]"
            />
          </div>
        </div>
      </section>

      {/* QUÉ ES UN TACO FRANCÉS */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">¿Qué es?</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">
              El <span className="text-primary">taco francés</span>, explicado
            </h2>
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
              { n: "+15", l: "Combos" },
              { n: "100%", l: "Queso" },
              { n: "5min", l: "Plancha" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-card border border-primary/30 p-4 text-center shadow-card">
                <div className="font-display text-3xl text-primary">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAVORITOS */}
      <section className="bg-secondary border-y border-primary/20">
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
            {favorites.slice(0, 6).map((t) => (
              <article
                key={t.name}
                className="group rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:-translate-y-1 hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black">
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

      {/* SOCIAL CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-grain text-primary-foreground p-8 md:p-14 text-center">
          <div className="flex justify-center gap-3 mb-4">
            <Music2 size={32} />
            <Instagram size={32} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl">Síguenos en redes</h2>
          <p className="mt-3 max-w-xl mx-auto opacity-90">
            Mira nuestros tacos en acción: queso derritiéndose, planchas humeantes y mucho ASMR.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.tiktok.com/@tacomania.to"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 font-bold uppercase text-sm tracking-wide hover:scale-105 transition-transform"
            >
              <Music2 size={18} /> TikTok
            </a>
            <a
              href="https://www.instagram.com/tacomania.to"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-bold uppercase text-sm tracking-wide hover:scale-105 transition-transform"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
