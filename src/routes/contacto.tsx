import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, MapPin, Clock, Check } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Tacomania" },
      { name: "description", content: "Llámanos, escríbenos por WhatsApp o ven a vernos. Tacomania te espera." },
      { property: "og:title", content: "Contacto — Tacomania" },
      { property: "og:description", content: "Teléfono, WhatsApp, dirección y horario." },
    ],
  }),
  component: Contacto,
});

const PHONE = "+34 600 000 000";
const WHATSAPP = "+34600000000";

function Contacto() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  };

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
            icon={<MessageCircle />}
            title="WhatsApp"
            value="Escríbenos directo"
            href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
          />
          <InfoCard icon={<MapPin />} title="Dirección" value="Calle Mayor 123, Madrid" />
          <InfoCard
            icon={<Clock />}
            title="Horario"
            value="Lun–Jue 12:00 – 23:00 · Vie–Sáb 12:00 – 01:00 · Dom 13:00 – 23:00"
          />

          <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-video flex items-center justify-center text-muted-foreground text-sm">
            <div className="text-center px-4">
              <MapPin className="mx-auto mb-2 text-primary" />
              Aquí irá el mapa de Google Maps
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-card space-y-4"
        >
          <h2 className="font-display text-3xl">Escríbenos</h2>
          <p className="text-sm text-muted-foreground">
            ¿Reservas, eventos o sugerencias? Te respondemos pronto.
          </p>

          <Field label="Nombre" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <div>
            <label className="text-sm font-semibold" htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wide py-3 hover:bg-primary-glow active:scale-[0.99] transition-all"
          >
            Enviar mensaje
          </button>

          {sent && (
            <div className="flex items-center gap-2 rounded-xl bg-primary/10 text-primary px-4 py-3 text-sm font-semibold">
              <Check size={18} /> ¡Mensaje enviado! Te respondemos pronto.
            </div>
          )}
        </form>
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
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : inner;
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
