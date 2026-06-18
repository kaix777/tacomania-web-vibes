import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Clock, Navigation, Sparkles } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Tacomania" },
      {
        name: "description",
        content:
          "Visítanos en Avenida Isabel Manoja 21. Abierto todos los días de 19:00 a 02:00.",
      },
      { property: "og:title", content: "Contacto — Tacomania" },
      {
        property: "og:description",
        content: "Dirección, horario y cómo llegar a Tacomania.",
      },
    ],
  }),
  component: Contacto,
});

const ADDRESS_LINE_1 = "Avenida Isabel Manoja 21";
const ADDRESS_LINE_2 = "Torremolinos, Málaga";
const SCHEDULE_TEXT = "Todos los días · 19:00 – 02:00";

const MAP_EMBED =
  "https://www.google.com/maps?q=36.6239498,-4.5021854&output=embed&z=17";
const MAP_LINK =
  "https://www.google.com/maps/place/Tacomania/@36.6239541,-4.5047603,17z/data=!3m1!4b1!4m6!3m5!1s0xd72fb664d59e771:0xd28c28ebc69c7b79!8m2!3d36.6239498!4d-4.5021854";
const DIRECTIONS_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=Tacomania,Avenida+Isabel+Manoja+21,Torremolinos,Malaga";

/** Tacomania abre 19:00–02:00 todos los días (cierra a las 02:00 del día siguiente). */
function useOpenNow() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const compute = () => {
      const now = new Date();
      const h = now.getHours();
      // Abierto si: hora >= 19  ó  hora < 2
      setOpen(h >= 19 || h < 2);
    };
    compute();
    const id = setInterval(compute, 60_000);
    return () => clearInterval(id);
  }, []);
  return open;
}

function Contacto() {
  const openNow = useOpenNow();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-grain text-primary-foreground">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em]">
              <Sparkles size={14} /> Visítanos
            </span>

            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95]">
              Nos vemos<br />
              <span className="italic text-primary">en la mesa.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg opacity-90">
              Sin reservas, sin formularios. Solo tacos, gente y buena música.
              Ven a buscarnos.
            </p>

            <div
              className={`mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wider border transition-colors ${
                openNow
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-primary-foreground/10 border-primary-foreground/30"
              }`}
            >
              <span
                className={`relative flex h-2.5 w-2.5 ${
                  openNow ? "" : "opacity-60"
                }`}
              >
                {openNow && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-75" />
                )}
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    openNow ? "bg-primary-foreground" : "bg-primary-foreground/60"
                  }`}
                />
              </span>
              {openNow ? "Abierto ahora" : "Cerrado · abrimos a las 19:00"}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* INFO */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tarjeta dirección — destacada */}
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  <MapPin size={14} className="text-primary" />
                  Dónde estamos
                </div>
                <div className="mt-4 font-display text-3xl md:text-4xl leading-tight">
                  {ADDRESS_LINE_1}
                </div>
                <div className="mt-1 text-muted-foreground">
                  {ADDRESS_LINE_2}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:gap-3 transition-all">
                  Ver en Google Maps
                  <Navigation
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </a>

            {/* Tarjeta horario */}
            <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <Clock size={14} className="text-primary" />
                Horario
              </div>
              <div className="mt-4 font-display text-2xl md:text-3xl leading-tight">
                {SCHEDULE_TEXT}
              </div>

              <ul className="mt-5 grid grid-cols-7 gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-center">
                {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
                  <li
                    key={d}
                    className="rounded-lg bg-primary/10 text-primary py-2"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Cocina abierta hasta el cierre. Llega con hambre.
              </p>
            </div>

            {/* CTA cómo llegar */}
            <a
              href={DIRECTIONS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-2xl bg-primary text-primary-foreground px-6 py-5 font-bold uppercase tracking-wider shadow-card hover:bg-primary-glow active:scale-[0.99] transition-all"
            >
              <span>Cómo llegar</span>
              <Navigation size={18} />
            </a>
          </div>

          {/* MAPA */}
          <div className="lg:col-span-3">
            <div className="relative h-[420px] lg:h-full min-h-[420px] overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <iframe
                title="Mapa Tacomania — Avenida Isabel Manoja 21"
                src={MAP_EMBED}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Etiqueta flotante */}
              <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-background/90 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] shadow-card border border-border">
                Tacomania · Torremolinos
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
