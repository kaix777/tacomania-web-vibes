import { Instagram, Music2 } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-black text-white mt-24 border-t-4 border-primary">
      <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Tacomania" width={48} height={48} className="h-12 w-12 rounded-full ring-2 ring-primary object-cover" />
          <div className="font-display text-2xl tracking-wider">
            TACO<span className="text-primary">MANIA</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.tiktok.com/@tacomania.to"
            target="_blank" rel="noopener noreferrer"
            aria-label="TikTok"
            className="rounded-full bg-primary text-primary-foreground p-3 hover:scale-110 transition-transform"
          >
            <Music2 size={18} />
          </a>
          <a
            href="https://www.instagram.com/tacomania.to"
            target="_blank" rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full bg-primary text-primary-foreground p-3 hover:scale-110 transition-transform"
          >
            <Instagram size={18} />
          </a>
        </div>
        <p className="text-sm opacity-70 text-center md:text-right">
          © {new Date().getFullYear()} Tacomania.<br className="md:hidden" /> Hecho con queso fundido.
        </p>
      </div>
    </footer>
  );
}
