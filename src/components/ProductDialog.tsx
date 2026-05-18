import { useEffect, useId } from "react";

export type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export function ProductDialog({
  product,
  onOpenChange,
}: {
  product: Product | null;
  onOpenChange: (open: boolean) => void;
}) {
  const open = !!product;
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    document.body.style.pointerEvents = "";

    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.pointerEvents = "";
    };
  }, [open, onOpenChange]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-3 backdrop-blur-sm"
      onClick={() => onOpenChange(false)}
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative w-[min(calc(100vw-1.5rem),42rem)] max-h-[88dvh] overflow-y-auto rounded-2xl border border-primary/30 bg-card shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={() => onOpenChange(false)}
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-card/90 text-card-foreground shadow-lg ring-1 ring-border transition hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
        >
          ×
        </button>

        <div className="grid sm:grid-cols-2">
          <div className="aspect-[4/3] bg-muted sm:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <h2 id={titleId} className="font-display text-3xl leading-none sm:text-4xl">
              {product.name}
            </h2>
            <div className="mt-3">
              <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-lg font-bold text-primary-foreground shadow-glow">
                {product.price}
              </span>
            </div>
            <p id={descriptionId} className="mt-4 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-1.5rem)] max-w-2xl max-h-[90vh] overflow-y-auto p-0 rounded-2xl border-primary/30 bg-card">
        {product && (
          <div className="grid sm:grid-cols-2">
            <div className="aspect-square sm:aspect-auto bg-black overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <DialogTitle className="font-display text-3xl sm:text-4xl leading-none">
                {product.name}
              </DialogTitle>
              <div className="mt-3">
                <span className="inline-block rounded-full bg-primary text-primary-foreground px-4 py-1.5 font-bold text-lg shadow-glow">
                  {product.price}
                </span>
              </div>
              <DialogDescription className="mt-4 text-base text-muted-foreground leading-relaxed">
                {product.description}
              </DialogDescription>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
