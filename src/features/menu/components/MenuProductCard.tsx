import { useState, type CSSProperties } from "react";
import { ChevronDown, Search } from "lucide-react";

import CheckerDivider from "@/features/layout/components/CheckerDivider";
import { ProductAllergenCompactRow, ProductAllergenSummary, ProductStatusBadges } from "@/features/menu/components/AllergenInfo";
import { Badge } from "@/shared/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/shared/ui/dialog";
import { type MenuProduct } from "@/features/menu/data";
import { formatCurrency } from "@/features/menu/lib/menu";
import { cn } from "@/shared/lib/utils";

interface MenuProductCardProps {
  product: MenuProduct;
  variant?: "default" | "featured";
  compactOnMobile?: boolean;
  className?: string;
  style?: CSSProperties;
}

const MenuProductCard = ({
  product,
  variant = "default",
  compactOnMobile = false,
  className,
  style,
}: MenuProductCardProps) => {
  const [imagePreviewOpen, setImagePreviewOpen] = useState(false);
  const isFeatured = variant === "featured";
  const titleId = `${product.id}-title`;
  const visibleTags = product.tags.slice(0, isFeatured ? 4 : 3);
  const description = isFeatured ? product.longDescription : product.description;

  return (
    <>
      <article
        className={cn("overflow-hidden border border-black/12 bg-white", className)}
        aria-labelledby={titleId}
        style={style}
      >
        {compactOnMobile ? (
          <div className="sm:hidden">
            <div className="flex gap-3 p-3">
              <button
                type="button"
                onClick={() => setImagePreviewOpen(true)}
                className="relative h-[88px] w-[88px] shrink-0 overflow-hidden border border-black/12 bg-black text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                aria-label={`Ampliar foto de ${product.name}`}
              >
                <img
                  src={product.image}
                  alt={`Fotografia de ${product.name}`}
                  className="h-full w-full object-cover object-center"
                  width={480}
                  height={480}
                />
                <div className="gradient-overlay absolute inset-0" />
                <div className="absolute inset-x-1.5 top-1.5 flex justify-end">
                  <div className="border border-white/20 bg-black/80 px-1.5 py-1 text-right text-white backdrop-blur-sm">
                    <p className="font-display text-[1rem] leading-none">{product.prepTime}</p>
                  </div>
                </div>
                <span className="absolute bottom-1.5 left-1.5 inline-flex items-center gap-1 border border-white/16 bg-black/78 px-1.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  <Search className="h-3 w-3" aria-hidden="true" />
                  Ver
                </span>
              </button>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/56">{product.highlight}</p>
                    <h3 id={titleId} className="mt-1 pr-1 font-display text-[1.5rem] leading-[0.96] text-black">
                      {product.name}
                    </h3>
                  </div>
                  <p className="shrink-0 font-display text-[1.55rem] leading-none text-black">{formatCurrency(product.price)}</p>
                </div>

                <ProductStatusBadges product={product} compact className="mt-1.5 max-w-full" />

                <ProductAllergenCompactRow allergens={product.allergens} dense className="mt-2" />

                <details className="mt-2">
                  <summary className="summary-reset inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/58">
                    Info
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </summary>
                  <div className="mt-2 border border-black/10 bg-[#f8f4ee] p-3">
                    <p className="text-[12px] leading-5 text-black/72">{description}</p>

                    {visibleTags.length > 0 ? (
                      <ul className="mt-3 flex flex-wrap gap-2" aria-label={`Etiquetas de ${product.name}`}>
                        {visibleTags.map((tag) => (
                          <li key={tag}>
                            <Badge variant="outline" className="border-black/12 bg-white px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-black/72">
                              {tag}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="mt-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/56">Alergenos</p>
                      <ProductAllergenSummary allergens={product.allergens} className="mt-2" />
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        ) : null}

        <div className={cn("flex h-full min-h-0 flex-col", compactOnMobile ? "hidden sm:flex" : "")}>
          <button
            type="button"
            onClick={() => setImagePreviewOpen(true)}
            className={cn(
              "group relative block shrink-0 overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
              isFeatured ? "h-[280px] sm:h-[340px] lg:h-[360px]" : "h-[220px] sm:h-[240px]",
            )}
            aria-label={`Ampliar foto de ${product.name}`}
          >
            <img
              src={product.image}
              alt={`Fotografia de ${product.name}`}
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              width={960}
              height={768}
            />
            <div className="gradient-overlay absolute inset-0" />
            <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
              <ProductStatusBadges product={product} className="max-w-[72%]" />
              <div className="border border-white/20 bg-black/80 px-3 py-2 text-right text-white backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/68">Listo</p>
                <p className="font-display text-2xl leading-none">{product.prepTime}</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center gap-2 border border-white/20 bg-black/76 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                <Search className="h-3.5 w-3.5" aria-hidden="true" />
                Ver foto
              </span>
            </div>
          </button>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-[75%]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/58">{product.highlight}</p>
                  <h3 className={cn("mt-2 font-display leading-none text-black", isFeatured ? "text-5xl" : "text-[2.2rem]")}>
                    {product.name}
                  </h3>
                </div>
                <p className="shrink-0 font-display text-4xl leading-none text-black">{formatCurrency(product.price)}</p>
              </div>

              <p className="text-sm leading-7 text-black/74">{description}</p>

              {visibleTags.length > 0 ? (
                <ul className="flex flex-wrap gap-2" aria-label={`Etiquetas de ${product.name}`}>
                  {visibleTags.map((tag) => (
                    <li key={tag}>
                      <Badge variant="outline" className="border-black/12 bg-[#f5f0e8] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-black/72">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="mt-auto pt-5">
              <CheckerDivider />

              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/58">Alergenos</p>
                <ProductAllergenSummary allergens={product.allergens} className="mt-3" />
              </div>
            </div>
          </div>
        </div>
      </article>

      <Dialog open={imagePreviewOpen} onOpenChange={setImagePreviewOpen}>
        <DialogContent className="w-[calc(100vw-1rem)] max-w-5xl overflow-hidden border-white/10 bg-[#090807] p-0 text-white sm:w-full [&>button]:right-3 [&>button]:top-3 [&>button]:text-white [&>button]:ring-offset-[#090807]">
          <div className="bg-black p-3 sm:p-5">
            <div className="overflow-hidden border border-white/10 bg-[#050505]">
              <img
                src={product.image}
                alt={`Vista ampliada de ${product.name}`}
                className="max-h-[78vh] w-full object-contain"
                width={1400}
                height={1200}
              />
            </div>
          </div>

          <div className="border-t border-white/10 bg-[#11100e] px-4 py-4 sm:px-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#cfa066]">{product.highlight}</p>
                <DialogTitle className="mt-2 font-display text-[2rem] leading-none text-white sm:text-[2.6rem]">
                  {product.name}
                </DialogTitle>
                <DialogDescription className="mt-3 max-w-2xl text-sm leading-6 text-white/64">
                  Vista ampliada del producto. Pulsa fuera de la imagen o el boton de cierre para volver a la carta.
                </DialogDescription>
              </div>
              <p className="shrink-0 font-display text-2xl leading-none text-[#cfa066] sm:text-3xl">{formatCurrency(product.price)}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MenuProductCard;
