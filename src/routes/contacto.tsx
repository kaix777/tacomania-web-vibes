import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Tacomania" },
      { name: "description", content: "Visítanos en Avenida Isabel Manoja 21. Abierto todos los días de 19:00 a 02:00." },
      { property: "og:title", content: "Contacto — Tacomania" },
      { property: "og:description", content: "Dirección, horario y cómo llegar a Tacomania." },
    ],
  }),
  component: Contacto,
});

const PHONE = "+34 600 000 000";
const ADDRESS = "Avenida Isabel Manoja 21";
const SCHEDULE = "Todos los días de 19:00 a 02:00";
// Google Maps embed para Tacomania (Avenida Isabel Manoja 21)
const MAP_EMBED =
  "https://www.google.com/maps?q=Tacomania,Avenida+Isabel+Manoja+21&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/place/Tacomania/@36.6239541,-4.5047603,17z/data=!3m1!4b1!4m6!3m5!1s0xd72fb664d59e771:0xd28c28ebc69c7b79!8m2!3d36.6239498!4d-4.5021854";

function Contacto() {
  return (
    <>
      <section className="bg-grain text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">Contacto</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl">Pásate o llama</h1>
          <p className="mt-4 max-w-xl mx-auto opacity-90">Estamos listos para meter queso en tu día.</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid lg:grid-cols-2 gap-10">
        {/* INFO */}
        <div className="space-y-4">
          <InfoCard icon={<Phone />} title="Teléfono" value={PHONE} href={`tel:${PHONE.replace(/\s/g, "")}`} />
          <InfoCard
            icon={<MapPin />}
            title="Dirección"
            value={ADDRESS}
            href={MAP_LINK}
          />
          <InfoCard icon={<Clock />} title="Horario" value={SCHEDULE} />
        </div>

        {/* MAPA */}
        <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-video">
          <iframe
            title="Mapa Tacomania"
            src={MAP_EMBED}
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}

function InfoCard({
  icon, title, value, href,
}: { icon: React.ReactNode; title: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 shadow-card hover:border-primary transition-colors">
      <div className="rounded-full bg-primary/10 text-primary p-3">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="font-semibold mt-0.5">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {inner}
    </a>
  ) : inner;
}
