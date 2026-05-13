import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/carta", label: "Carta" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (light) root.classList.add("light");
    else root.classList.remove("light");
  }, [light]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Tacomania" width={40} height={40} className="h-10 w-10 rounded-full ring-2 ring-primary object-cover" />
          <span className="font-display text-xl tracking-wider hidden sm:inline">
            TACO<span className="text-primary">MANIA</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <button
            aria-label="Cambiar tema"
            onClick={() => setLight((d) => !d)}
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>
        <div className="flex md:hidden items-center gap-1">
          <button
            aria-label="Cambiar tema"
            onClick={() => setLight((d) => !d)}
            className="p-2 rounded-full hover:bg-accent"
          >
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-full hover:bg-accent"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold uppercase tracking-wide hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
