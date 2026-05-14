import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { menu } from "@/data/menu";
import { ProductDialog, type Product } from "@/components/ProductDialog";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta — Tacomania" },
      { name: "description", content: "Descubre nuestra carta: tacos clásicos, especiales, menús, extras, salsas y bebidas." },
      { property: "og:title", content: "Carta — Tacomania" },
      { property: "og:description", content: "Tacos franceses, menús y extras." },
    ],
  }),
  component: Carta,
});

function Carta() {
  const [selected, setSelected] = useState<Product | null>(null);
  return (
    <>
      <section className="bg-grain text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">Nuestra carta</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl">Elige tu vicio</h1>
          <p className="mt-4 max-w-xl mx-auto opacity-90">
            Tacos hechos al momento. Tú eliges el tamaño, la carne y la cantidad de queso (siempre mucha).
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-14">
        {menu.map((section) => (
          <section key={section.title}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-display text-3xl md:text-4xl">{section.title}</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => setSelected({ name: item.name, description: item.desc, price: item.price, image: item.image })}
                  className="group flex gap-4 rounded-2xl bg-card border border-border p-3 shadow-card hover:border-primary hover:-translate-y-0.5 transition-all text-left w-full cursor-pointer"
                >
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-bold text-lg truncate">{item.name}</h3>
                      <span className="font-display text-xl text-primary whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <p className="text-center text-xs text-muted-foreground pt-6">
          * Precios orientativos. Pueden variar según local y promociones.
        </p>
      </div>
    </>
  );
}
