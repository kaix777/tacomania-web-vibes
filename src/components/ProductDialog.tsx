import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
  return (
    <Dialog open={!!product} onOpenChange={onOpenChange}>
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
