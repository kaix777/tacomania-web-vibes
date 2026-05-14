import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/carta", label: "Carta" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (light) root.classList.add("light");
    else root.classList.remove("light");
  }, [light]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 h-16 flex items-center justify-between gap-2">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Tacomania" width={40} height={40} className="h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-primary object-cover" />
          <span className="font-display text-lg sm:text-xl tracking-wider hidden xs:inline">
            TACO<span className="text-primary">MANIA</span>
          </span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors"
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
      </div>
    </header>
  );
}
