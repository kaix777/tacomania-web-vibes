export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-2xl tracking-wider">
          TACO<span className="text-primary">MANIA</span>
        </div>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Tacomania. Hecho con queso fundido.
        </p>
      </div>
    </footer>
  );
}
