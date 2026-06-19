import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, MessageCircle, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — TACOMANIA" },
      {
        name: "description",
        content:
          "Contacto de Tacomanía en Torremolinos: dirección, ubicación en Google Maps, horarios y formas de contactar.",
      },
      { property: "og:title", content: "Contacto — TACOMANIA" },
      {
        property: "og:description",
        content: "Cómo llegar a Tacomanía y ponerte en contacto con nosotros.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <>
      <HeroContacto />
      <main className="mx-auto max-w-6xl px-4 pb-24 space-y-16 md:space-y-24">
        <ContactGrid />
        <FinalCta />
      </main>
    </>
  );
}

function HeroContacto() {
  return (
    <section className="relative overflow-hidden bg-black text-foreground border-b border-primary/20">
      <div className="absolute -top-40 -right-40 h-[24rem] w-[24rem] rounded-full bg-primary blur-3xl opacity-40" />
      <div className="absolute -bottom-40 -left-40 h-[24rem] w-[24rem] rounded-full bg-primary-deep blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20 grid md:grid-cols-[1.2fr_auto] gap-10 items-center">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 backdrop-blur border border-primary/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <MapPin size={14} /> Dónde estamos
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[0.9] text-primary drop-shadow-[0_4px_30px_rgba(255,40,40,0.45)]">
            CONTACTO
          </h1>
          <p className="mt-4 text-lg md:text-xl font-semibold max-w-md mx-auto md:mx-0">
            Ven a Tacomanía o escríbenos para cualquier duda.
          </p>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-md mx-auto md:mx-0">
            Tacos franceses, pizzas y mucho más, en pleno Torremolinos. Consulta cómo llegar y
            nuestros horarios antes de venir.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="https://maps.app.goo.gl/Xu6qCCXgWNuVap3z8"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-bold uppercase text-xs md:text-sm tracking-wide hover:scale-105 transition-transform"
            >
              Abrir en Google Maps
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <Link
              to="/carta"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-bold uppercase text-xs md:text-sm tracking-wide hover:scale-105 transition-transform"
            >
              Ver la carta
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-40" />
          <img
            src={logo}
            alt="Logo Tacomania"
            width={320}
            height={320}
            className="relative w-40 sm:w-52 md:w-60 drop-shadow-[0_20px_60px_rgba(255,40,40,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}

function ContactGrid() {
  return (
    <section className="grid gap-10 md:grid-cols-[1.1fr_minmax(0,1fr)] items-start">
      {/* Columna izquierda: datos de contacto */}
      <div className="space-y-8">
        <Card>
          <CardHeader title="Dirección" icon={MapPin} />
          <div className="space-y-2 text-sm md:text-base">
            <p className="font-semibold">
              Tacomanía — Tacos franceses y más
            </p>
            <p className="text-foreground/90">
              Torremolinos (Málaga), España
            </p>
            <p className="text-muted-foreground">
              Pulsa en &quot;Abrir en Google Maps&quot; para ver la ubicación exacta y calcular la ruta
              desde donde estés.
            </p>
            <a
              href="https://maps.app.goo.gl/Xu6qCCXgWNuVap3z8"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <MapPin size={14} />
              Abrir en Google Maps
            </a>
          </div>
        </Card>

        <Card>
          <CardHeader title="Horario orientativo" icon={Clock} />
          <div className="space-y-1 text-sm md:text-base text-foreground/90">
            <p>Lunes a jueves: 19:00 – 23:30</p>
            <p>Viernes y sábado: 19:00 – 01:00</p>
            <p>Domingo: 19:00 – 23:30</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">
              * Los horarios pueden variar según temporada o festivos. Consulta nuestras redes
              sociales para cambios de última hora.
            </p>
          </div>
        </Card>

        <Card>
          <CardHeader title="Contacto" icon={Phone} />
          <div className="space-y-2 text-sm md:text-base text-foreground/90">
            <p>
              Teléfono / WhatsApp:{" "}
              <span className="font-semibold">Próximamente</span>
            </p>
            <p className="text-muted-foreground">
              Para reservas, pedidos grandes o dudas, escríbenos por redes mientras tanto.
            </p>
          </div>
        </Card>
      </div>

      {/* Columna derecha: redes y mensaje */}
      <div className="space-y-8">
        <Card>
          <CardHeader title="Redes sociales" icon={Instagram} />
          <div className="space-y-3 text-sm md:text-base text-foreground/90">
            <a
              href="https://www.tiktok.com/@tacomania.to"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 hover:border-primary hover:text-primary transition-colors"
            >
              <Instagram size={16} />
              @tacomania.to en TikTok
            </a>
            <p className="text-muted-foreground">
              Síguenos para ver cómo preparamos los tacos, novedades de la carta y horarios
              actualizados.
            </p>
          </div>
        </Card>

        <Card>
          <CardHeader title="Dudas rápidas" icon={MessageCircle} />
          <p className="text-sm md:text-base text-muted-foreground">
            Si tienes cualquier pregunta sobre alergias, grupos grandes o pedidos especiales,
            pásate por la tienda o mándanos un mensaje por redes y te respondemos lo antes posible.
          </p>
        </Card>
      </div>
    </section>
  );
}

type CardHeaderProps = {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

function CardHeader({ title, icon: Icon }: CardHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon size={18} className="text-primary" />
      <h2 className="font-display text-xl md:text-2xl">{title}</h2>
    </div>
  );
}

type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur shadow-card p-5 md:p-7">
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary blur-3xl opacity-10" />
      <div className="relative">{children}</div>
    </article>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-grain text-primary-foreground p-8 md:p-12 text-center">
      <h2 className="font-display text-3xl md:text-4xl">¿Nos vemos en Tacomanía?</h2>
      <p className="mt-3 max-w-xl mx-auto opacity-90">
        Abre el mapa, guarda la ubicación y ven con hambre. Te esperamos con los tacos franceses y
        las pizzas recién hechas.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href="https://maps.app.goo.gl/Xu6qCCXgWNuVap3z8"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-black text-white px-7 py-3.5 font-bold uppercase text-sm tracking-wide hover:scale-105 transition-transform"
        >
          Abrir en Google Maps
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
        <Link
          to="/carta"
          className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3.5 font-bold uppercase text-sm tracking-wide hover:scale-105 transition-transform"
        >
          Ver la carta
        </Link>
      </div>
      <p className="mt-8 text-xs opacity-70">
        * Información orientativa. Horarios y datos de contacto pueden variar.
      </p>
    </section>
  );
}
