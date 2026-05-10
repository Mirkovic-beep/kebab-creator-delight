import { useEffect, useState } from "react";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

import heroHeaderImage from "@/assets/hero-cabecera.jpg";
import Footer from "@/features/layout/components/Footer";
import MenuProductCard from "@/features/menu/components/MenuProductCard";
import Navbar from "@/features/layout/components/Navbar";
import { Button } from "@/shared/ui/button";
import { menuCategories, menuProducts } from "@/features/menu/data";
import { cn } from "@/shared/lib/utils";

const MenuPage = () => {
  const [searchParams] = useSearchParams();
  const requestedProductId = searchParams.get("producto") ?? "";
  const requestedProduct = menuProducts.find((product) => product.id === requestedProductId);
  const [activeCategoryId, setActiveCategoryId] = useState(requestedProduct?.categoryId ?? menuCategories[0]?.id ?? "");

  const activeCategory = menuCategories.find((category) => category.id === activeCategoryId) ?? menuCategories[0];
  const activeProducts = menuProducts.filter((product) => product.categoryId === activeCategory?.id);
  const categoryCounts = menuProducts.reduce<Record<string, number>>((accumulator, product) => {
    accumulator[product.categoryId] = (accumulator[product.categoryId] ?? 0) + 1;
    return accumulator;
  }, {});
  const highlightedProductId =
    requestedProduct && requestedProduct.categoryId === activeCategory?.id ? requestedProduct.id : undefined;

  useEffect(() => {
    if (requestedProduct?.categoryId) {
      setActiveCategoryId(requestedProduct.categoryId);
    }
  }, [requestedProduct?.categoryId]);

  useEffect(() => {
    if (!highlightedProductId) {
      return;
    }

    window.requestAnimationFrame(() => {
      const element = document.getElementById(`product-${highlightedProductId}`);

      if (element instanceof HTMLElement) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [highlightedProductId]);

  const activeCategoryNotices = [
    activeCategory?.id === "menus"
      ? {
          id: "menus-service",
          label: "Aviso de servicio",
          title: "Menus disponibles para recoger y a domicilio.",
          description: "En local, solo se sirven en horario de comida.",
          tone: "alert" as const,
        }
      : null,
    activeCategory?.id === "turkish-specialties"
      ? {
          id: "turkish-bread",
          label: "Pan artesano",
          title: "Nuestros kebabs van con pan artesano.",
          description: "Trabajamos con masa madre y sin conservantes.",
          tone: "highlight" as const,
        }
      : null,
    activeCategory?.id === "hamburgers"
      ? {
          id: "burger-bread",
          label: "Pan artesano",
          title: "Todas las hamburguesas van con pan artesano.",
          description: "Trabajamos con masa madre y sin conservantes.",
          tone: "highlight" as const,
        }
      : null,
    activeCategory?.id === "menus"
      ? {
          id: "menus-bread",
          label: "Pan artesano",
          title: "Los menus de kebab y hamburguesa llevan pan artesano.",
          description: "Trabajamos con masa madre y sin conservantes.",
          tone: "highlight" as const,
        }
      : null,
  ].filter(
    (
      notice,
    ): notice is {
      id: string;
      label: string;
      title: string;
      description: string;
      tone: "alert" | "highlight";
    } => Boolean(notice),
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pb-6">
        <section className="px-5 py-3 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-7xl overflow-hidden border border-black/12 lg:grid lg:grid-cols-[0.44fr_0.56fr]">
            <article className="bg-primary px-5 py-5 text-primary-foreground sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              <p className="editorial-kicker text-gold">Carta</p>
              <h1 className="mt-2 font-display text-[clamp(2.65rem,11vw,8rem)] leading-[0.9]">Carta completa.</h1>
              <p className="mt-3 max-w-md text-[13px] leading-5 text-primary-foreground/72 sm:text-lg sm:leading-8">
                Carta sencilla de recorrer, con categorias claras y alergenos visibles en cada plato.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/12 pt-4 sm:mt-10 sm:pt-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">Categorias</p>
                  <p className="mt-2 font-display text-[1.9rem] leading-none sm:text-5xl">{menuCategories.length}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">Platos</p>
                  <p className="mt-2 font-display text-[1.9rem] leading-none sm:text-5xl">{menuProducts.length}+</p>
                </div>
              </div>
            </article>

            <article className="relative min-h-[260px] bg-muted sm:min-h-[340px] lg:min-h-[420px]">
              <img
                src={heroHeaderImage}
                alt="Asadores de kebab de pollo y ternera en cocina"
                className="h-full w-full object-cover object-[center_32%]"
                width={1400}
                height={1200}
              />
              <div className="gradient-overlay absolute inset-0" />
              <div className="absolute bottom-0 left-0 bg-gold px-6 py-5 text-gold-foreground sm:px-8 sm:py-6">
                <p className="editorial-kicker text-black/58">DejaVu Kebab</p>
                <p className="mt-2 max-w-[15rem] font-display text-[2.2rem] leading-none sm:max-w-none sm:text-6xl">
                  Kebabs, platos y especialidades de la casa.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="px-5 py-5 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[290px_1fr]">
            <div className="sticky top-0 z-20 -mx-5 border-y border-black/10 bg-background/95 px-5 py-2.5 backdrop-blur-sm lg:hidden">
              <div className="flex items-center justify-between gap-3">
                <p className="editorial-kicker text-black/55">Categorias</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/55">
                  {activeProducts.length} platos
                </p>
              </div>

              <div className="mt-2 grid grid-cols-3 gap-2" aria-label="Categorias de la carta">
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    aria-pressed={category.id === activeCategory?.id}
                    aria-controls="products-grid"
                    onClick={() => setActiveCategoryId(category.id)}
                    className={cn(
                      "min-w-0 border px-2 py-2 text-left transition-colors",
                      category.id === activeCategory?.id
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white text-black",
                    )}
                  >
                    <div className="flex items-end justify-between gap-2">
                      <p className="font-display text-[1.2rem] leading-none">{category.shortName}</p>
                      <span
                        className={cn(
                          "text-[10px] font-semibold uppercase tracking-[0.16em]",
                          category.id === activeCategory?.id ? "text-white/72" : "text-black/54",
                        )}
                      >
                        {categoryCounts[category.id] ?? 0}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <aside className="hidden h-fit border border-black/12 bg-white p-5 lg:sticky lg:top-6 lg:block">
              <p className="editorial-kicker text-black/55">Categorias</p>
              <div className="mt-5 grid gap-2">
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    aria-pressed={category.id === activeCategory?.id}
                    aria-controls="products-grid"
                    onClick={() => setActiveCategoryId(category.id)}
                    className={cn(
                      "border px-4 py-4 text-left transition-colors",
                      category.id === activeCategory?.id
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white text-black hover:bg-gold/10",
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p
                          className={cn(
                            "text-[10px] font-semibold uppercase tracking-[0.24em]",
                            category.id === activeCategory?.id ? "text-white/58" : "text-black/52",
                          )}
                        >
                          {category.note}
                        </p>
                        <p className="mt-2 font-display text-[2rem] leading-none">{category.shortName}</p>
                      </div>
                      <span
                        className={cn(
                          "text-[11px] font-semibold uppercase tracking-[0.2em]",
                          category.id === activeCategory?.id ? "text-white/72" : "text-black/58",
                        )}
                      >
                        {categoryCounts[category.id] ?? 0}
                      </span>
                    </div>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-6",
                        category.id === activeCategory?.id ? "text-white/74" : "text-black/64",
                      )}
                    >
                      {category.description}
                    </p>
                  </button>
                ))}
              </div>
            </aside>

            <div className="space-y-4 sm:space-y-6">
              <article className="border border-gold/30 bg-gold/10 px-4 py-4 sm:px-8 sm:py-6">
                <p className="editorial-kicker text-black/55">{activeCategory?.note ?? "Carta"}</p>
                <div className="mt-2 flex flex-col gap-2 lg:mt-3 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-3xl">
                    <h2 className="font-display text-[clamp(2.2rem,9vw,5.5rem)] leading-[0.9] text-black">
                      {activeCategory?.name ?? "Carta"}
                    </h2>
                    <p className="mt-1 text-[13px] leading-5 text-black/68 sm:mt-3 sm:text-base sm:leading-7">
                      {activeCategory?.description ?? "Seleccion completa del local."}
                    </p>
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/58 sm:text-[11px] sm:tracking-[0.24em]">
                    {activeProducts.length} platos visibles
                  </p>
                </div>

                {activeCategoryNotices.length > 0 ? (
                  <div className="mt-4 grid gap-4 border-t border-black/12 pt-4 md:grid-cols-2">
                    {activeCategoryNotices.map((notice) => (
                      <div
                        key={notice.id}
                        className={cn(
                          "border px-4 py-4 sm:px-5",
                          notice.tone === "alert"
                            ? "border-[#9a5844]/28 border-l-4 border-l-[#9a5844] bg-[rgba(154,88,68,0.12)] md:col-span-2"
                            : "border-gold/40 bg-gold/12",
                        )}
                      >
                        <p
                          className={cn(
                            "inline-flex items-center gap-2 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em]",
                            notice.tone === "alert"
                              ? "bg-[rgba(154,88,68,0.14)] text-[#7d3f2d]"
                              : "bg-white/65 text-black/62",
                          )}
                        >
                          {notice.tone === "alert" ? <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                          {notice.label}
                        </p>
                        <p
                          className={cn(
                            "mt-2 text-sm font-semibold leading-6 sm:text-[15px]",
                            notice.tone === "alert" ? "text-[#4d1f17]" : "text-black",
                          )}
                        >
                          {notice.title}
                        </p>
                        <p
                          className={cn(
                            "mt-1 text-[13px] leading-5 sm:text-sm sm:leading-6",
                            notice.tone === "alert" ? "text-[#5b2d23]/85" : "text-black/68",
                          )}
                        >
                          {notice.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>

              <section id="products-grid" aria-labelledby="products-grid-heading">
                <h2 id="products-grid-heading" className="sr-only">
                  Productos de {activeCategory?.name ?? "la carta"}
                </h2>

                <ul className="grid gap-3 sm:gap-6 md:auto-rows-fr md:grid-cols-2">
                  {activeProducts.map((product, index) => (
                    <li
                      key={product.id}
                      id={`product-${product.id}`}
                      className={cn(
                        "h-full scroll-mt-28 sm:scroll-mt-24 lg:scroll-mt-6",
                        highlightedProductId === product.id && "ring-2 ring-gold ring-offset-4 ring-offset-background",
                      )}
                    >
                      <MenuProductCard
                        product={product}
                        compactOnMobile
                        className="h-full motion-safe:animate-fade-in"
                        style={{ animationDelay: `${index * 70}ms` }}
                      />
                    </li>
                  ))}
                </ul>
              </section>

              <article className="flex flex-col gap-3 border border-black/12 bg-primary px-4 py-4 text-primary-foreground sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-6">
                <div className="max-w-2xl">
                  <p className="editorial-kicker text-gold">Siguiente paso</p>
                  <h3 className="mt-2 font-display text-[2rem] leading-none sm:mt-3 sm:text-5xl">
                    Si tienes dudas sobre un plato o un alergeno, te ayudamos.
                  </h3>
                </div>
                <Button
                  asChild
                  className="h-10 border border-gold bg-gold px-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-foreground hover:bg-gold/90 sm:h-12 sm:px-6 sm:text-[11px] sm:tracking-[0.24em]"
                >
                  <Link to="/contacto">
                    Ir a contacto
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;
