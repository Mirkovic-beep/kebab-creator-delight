import { useDeferredValue, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Search, SlidersHorizontal, Sparkles, Star } from "lucide-react";

import CartPanel from "@/components/CartPanel";
import Navbar from "@/components/Navbar";
import ProductCustomizerDialog from "@/components/ProductCustomizerDialog";
import { toast } from "@/components/ui/sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  experienceHighlights,
  menuCategories,
  menuProducts,
  restaurantInfo,
  type MenuProduct,
  type OrderModeId,
} from "@/data/menu";
import {
  buildCartItem,
  buildOrderMessage,
  buildWhatsAppUrl,
  formatCurrency,
  getCategoryName,
  getDefaultSelections,
  type CartItem,
  type CustomerDetails,
} from "@/lib/menu";
import { cn } from "@/lib/utils";

const toneClasses = {
  gold: "border-gold/30 bg-gold/10",
  ember: "border-primary/30 bg-primary/10",
  olive: "border-emerald-500/30 bg-emerald-500/10",
  sand: "border-amber-200/20 bg-amber-100/5",
  copper: "border-orange-500/30 bg-orange-500/10",
  stone: "border-slate-300/20 bg-slate-200/5",
} as const;

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [activeProduct, setActiveProduct] = useState<MenuProduct | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderModeId, setOrderModeId] = useState<OrderModeId>("pickup");
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const deferredSearchTerm = useDeferredValue(searchTerm);
  const normalizedQuery = deferredSearchTerm.trim().toLowerCase();

  const filteredProducts = [...menuProducts]
    .filter((product) => {
      if (activeCategory !== "all" && product.categoryId !== activeCategory) {
        return false;
      }

      if (featuredOnly && !product.featured && !product.bestseller) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const haystack = [
        product.name,
        product.description,
        product.longDescription,
        product.highlight,
        getCategoryName(product.categoryId),
        ...product.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    })
    .sort((leftProduct, rightProduct) => {
      if (sortBy === "price-asc") {
        return leftProduct.price - rightProduct.price;
      }

      if (sortBy === "price-desc") {
        return rightProduct.price - leftProduct.price;
      }

      if (sortBy === "name") {
        return leftProduct.name.localeCompare(rightProduct.name);
      }

      const leftScore = Number(Boolean(leftProduct.featured)) * 2 + Number(Boolean(leftProduct.bestseller));
      const rightScore = Number(Boolean(rightProduct.featured)) * 2 + Number(Boolean(rightProduct.bestseller));

      return rightScore - leftScore;
    });

  const addCartItem = (cartItem: CartItem) => {
    setCartItems((currentCartItems) => [...currentCartItems, cartItem]);
  };

  const quickAddProduct = (product: MenuProduct) => {
    addCartItem(
      buildCartItem({
        product,
        quantity: 1,
        notes: "",
        selections: getDefaultSelections(product),
      }),
    );
    toast.success(`${product.name} anadido con configuracion base.`);
  };

  const updateCartItemQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((currentCartItems) => currentCartItems.filter((cartItem) => cartItem.id !== cartItemId));
      return;
    }

    setCartItems((currentCartItems) =>
      currentCartItems.map((cartItem) =>
        cartItem.id === cartItemId
          ? {
              ...cartItem,
              quantity,
              totalPrice: cartItem.unitPrice * quantity,
            }
          : cartItem,
      ),
    );
  };

  const removeCartItem = (cartItemId: string) => {
    setCartItems((currentCartItems) => currentCartItems.filter((cartItem) => cartItem.id !== cartItemId));
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success("Carrito vaciado.");
  };

  const updateCustomerField = (field: keyof CustomerDetails, value: string) => {
    setCustomer((currentCustomer) => ({
      ...currentCustomer,
      [field]: value,
    }));
  };

  const orderMessage = buildOrderMessage({
    cartItems,
    customer,
    orderModeId,
  });

  const whatsappUrl = buildWhatsAppUrl({
    cartItems,
    customer,
    orderModeId,
  });

  const canSendOrder =
    cartItems.length > 0 &&
    customer.name.trim().length > 0 &&
    customer.phone.trim().length > 0 &&
    (orderModeId !== "delivery" || customer.address.trim().length > 0);

  const copySummary = async () => {
    if (!cartItems.length) {
      toast.error("Anade al menos un producto antes de copiar el resumen.");
      return;
    }

    if (!navigator.clipboard) {
      toast.error("Tu navegador no permite copiar automaticamente este resumen.");
      return;
    }

    await navigator.clipboard.writeText(orderMessage);
    toast.success("Resumen copiado. Ya puedes enviarlo por cualquier canal.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="px-6 pb-24 pt-24">
        <div className="mx-auto max-w-7xl">
          <section className="overflow-hidden rounded-[36px] border border-border/60 bg-card/90 shadow-[0_26px_90px_rgba(0,0,0,0.24)]">
            <div className="grid gap-0 lg:grid-cols-[1.15fr,0.85fr]">
              <div className="relative overflow-hidden border-b border-border/60 p-8 lg:border-b-0 lg:border-r lg:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(210,162,73,0.16),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(181,83,41,0.22),_transparent_34%)]" />
                <div className="relative">
                  <Button asChild variant="ghost" className="mb-6 h-auto p-0 text-gold hover:bg-transparent hover:text-gold">
                    <Link to="/">
                      <ArrowLeft className="h-4 w-4" />
                      Volver al inicio
                    </Link>
                  </Button>
                  <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">Carta completa</p>
                  <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
                    Sabores listos para elegir
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    Texto placeholder sobre la carta completa, las categorias y la personalizacion.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Badge className="bg-gold text-gold-foreground">Mas de {menuProducts.length} opciones en carta</Badge>
                    <Badge variant="outline" className="border-gold/30 text-gold">Recogida, delivery y mesa</Badge>
                    <Badge variant="outline" className="border-gold/30 text-gold">Sabores clasicos y especiales</Badge>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 p-8 lg:p-10">
                {experienceHighlights.map((highlight) => (
                  <div key={highlight.title} className="rounded-3xl border border-border/60 bg-background/20 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-gold">{highlight.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{highlight.description}</p>
                      </div>
                      <span className="font-display text-3xl font-bold text-gold">{highlight.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-10 xl:grid-cols-[minmax(0,1fr),390px]">
            <div className="space-y-8">
              <Card className="rounded-[30px] border-border/60 bg-card/80">
                <CardContent className="p-6">
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr),220px]">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10">
                          <Search className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.24em] text-gold">Buscar y filtrar</p>
                          <p className="text-sm text-muted-foreground">Encuentra rapido tu plato ideal.</p>
                        </div>
                      </div>
                      <div className="relative">
                        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          value={searchTerm}
                          onChange={(event) => setSearchTerm(event.target.value)}
                          placeholder="Busca durum, falafel, baklava, parrilla..."
                          className="h-12 rounded-2xl border-border/60 bg-background/35 pl-11"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-gold">
                        <SlidersHorizontal className="h-4 w-4" />
                        Ordenar
                      </div>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="h-12 rounded-2xl border-border/60 bg-background/35">
                          <SelectValue placeholder="Orden" />
                        </SelectTrigger>
                        <SelectContent className="border-border/60 bg-card">
                          <SelectItem value="featured">Destacados primero</SelectItem>
                          <SelectItem value="price-asc">Precio ascendente</SelectItem>
                          <SelectItem value="price-desc">Precio descendente</SelectItem>
                          <SelectItem value="name">Nombre A-Z</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveCategory("all")}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition-colors",
                        activeCategory === "all"
                          ? "border-gold/60 bg-gold/10 text-gold"
                          : "border-border/60 bg-background/35 text-muted-foreground hover:border-gold/40 hover:text-foreground",
                      )}
                    >
                      Todas las categorias
                    </button>
                    {menuCategories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setActiveCategory(category.id)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm transition-colors",
                          activeCategory === category.id
                            ? "border-gold/60 bg-gold/10 text-gold"
                            : "border-border/60 bg-background/35 text-muted-foreground hover:border-gold/40 hover:text-foreground",
                        )}
                      >
                        {category.shortName}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setFeaturedOnly((currentValue) => !currentValue)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition-colors",
                        featuredOnly
                          ? "border-primary/60 bg-primary/10 text-foreground"
                          : "border-border/60 bg-background/35 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                      )}
                    >
                      Solo destacados
                    </button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {menuCategories.map((category) => {
                  const categoryCount = menuProducts.filter((product) => product.categoryId === category.id).length;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setActiveCategory(category.id)}
                      className={cn(
                        "rounded-[26px] border p-5 text-left transition-transform hover:-translate-y-1",
                        toneClasses[category.tone],
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm uppercase tracking-[0.24em] text-gold">{category.note}</p>
                          <h3 className="mt-2 font-display text-2xl font-semibold">{category.name}</h3>
                        </div>
                        <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-sm">
                          {categoryCount}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-gold">Resultados</p>
                  <h2 className="font-display text-3xl font-bold">{filteredProducts.length} productos visibles</h2>
                </div>
                <div className="hidden rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm text-muted-foreground md:flex">
                  {restaurantInfo.name} | {restaurantInfo.city}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group overflow-hidden rounded-[30px] border-border/60 bg-card/85 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                    <div className="relative aspect-[5/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width={720}
                        height={576}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        {product.featured ? <Badge className="bg-gold text-gold-foreground">Destacado</Badge> : null}
                        {product.bestseller ? <Badge className="bg-primary text-primary-foreground">Top ventas</Badge> : null}
                      </div>
                    </div>
                    <CardContent className="space-y-5 p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm uppercase tracking-[0.24em] text-gold">{getCategoryName(product.categoryId)}</p>
                          <h3 className="mt-2 font-display text-3xl font-semibold">{product.name}</h3>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-3xl font-bold text-gold">{formatCurrency(product.price)}</p>
                          <p className="text-xs text-muted-foreground">Listo en {product.prepTime}</p>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-border/60 bg-background/40 text-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="rounded-2xl border border-gold/20 bg-gold/10 p-4">
                        <div className="flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-gold">
                          <Sparkles className="h-4 w-4" />
                          Lo que aporta
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.highlight}</p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <Button variant="outline" className="h-11 rounded-xl border-border/60" onClick={() => quickAddProduct(product)}>
                          Anadir rapido
                        </Button>
                        <Button className="gradient-gold h-11 rounded-xl text-gold-foreground" onClick={() => setActiveProduct(product)}>
                          Personalizar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 ? (
                <Card className="rounded-[30px] border-border/60 bg-card/70">
                  <CardContent className="p-8 text-center">
                    <Star className="mx-auto h-12 w-12 text-gold" />
                    <h3 className="mt-4 font-display text-3xl font-bold">No hay resultados con esos filtros</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Prueba otra categoria o una busqueda menos concreta para volver a mostrar productos.
                    </p>
                  </CardContent>
                </Card>
              ) : null}

              <Card className="rounded-[30px] border-border/60 bg-card/80">
                <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-gold">Siguiente paso</p>
                    <h3 className="font-display text-3xl font-bold">Sigue explorando</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Texto breve sobre destacados, local y puntos de contacto.
                    </p>
                  </div>
                  <Button asChild className="gradient-gold h-12 rounded-xl px-6 text-gold-foreground">
                    <Link to="/">
                      Volver al inicio
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <CartPanel
              cartItems={cartItems}
              customer={customer}
              orderModeId={orderModeId}
              canSendOrder={canSendOrder}
              whatsappUrl={whatsappUrl}
              onOrderModeChange={setOrderModeId}
              onCustomerChange={updateCustomerField}
              onUpdateQuantity={updateCartItemQuantity}
              onRemoveItem={removeCartItem}
              onClearCart={clearCart}
              onCopySummary={copySummary}
            />
          </section>
        </div>
      </main>

      <ProductCustomizerDialog
        product={activeProduct}
        open={Boolean(activeProduct)}
        onOpenChange={(open) => {
          if (!open) {
            setActiveProduct(null);
          }
        }}
        onAddToCart={addCartItem}
      />
    </div>
  );
};

export default MenuPage;
