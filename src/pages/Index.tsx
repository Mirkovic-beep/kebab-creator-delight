import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import adanaImage from "@/assets/adana.jpg";
import heroImage from "@/assets/hero-kebab.jpg";
import terraceImage from "@/assets/terraza.jpg";
import Footer from "@/features/layout/components/Footer";
import MenuProductCard from "@/features/menu/components/MenuProductCard";
import Navbar from "@/features/layout/components/Navbar";
import { Button } from "@/shared/ui/button";
import { menuProducts, restaurantInfo } from "@/features/menu/data";

const featuredProducts = menuProducts.filter((product) => product.featured || product.bestseller).slice(0, 3);

const housePrinciples = [
  "Carne al trompo y parrilla servidas al momento",
  "Salsas, panes y extras con foco en sabor y ritmo de servicio",
  "Carta compacta, clara y facil de pedir",
  "Alergenos visibles dentro de cada plato",
] as const;

const Index = () => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.mapsQuery)}`;

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pb-6">
        <section className="px-5 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4">
          <div className="mx-auto grid max-w-7xl border border-black/12 lg:min-h-[470px] lg:grid-cols-[0.46fr_0.54fr] lg:overflow-hidden xl:min-h-[510px]">
            <article className="flex flex-col justify-between bg-[#cfa066] px-6 py-5 sm:px-9 sm:py-7 lg:px-10 lg:py-7">
              <div>
                <p className="editorial-kicker text-black/58">Kebab turco / Rivas-Vaciamadrid</p>
                <h1 className="mt-3 font-display text-[clamp(3.15rem,6.4vw,5.45rem)] leading-[0.88] text-black">
                  Kebab turco, parrilla y platos al momento.
                </h1>
                <p className="mt-3 max-w-md text-[15px] leading-6 text-black/76 sm:text-base sm:leading-7">
                  Durums, kebabs, platos de parrilla, lahmacun, falafel y postres turcos en una carta facil de entender,
                  con precios claros y alergenos visibles en cada plato.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild className="h-10 border border-black bg-black px-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-background hover:bg-black/90">
                    <Link to="/carta">
                      Ver carta
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 border border-black bg-transparent px-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-black hover:bg-white/30"
                  >
                    <Link to="/contacto">Contacto</Link>
                  </Button>
                </div>
              </div>

              <div className="mt-6 border-t border-black/15 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/58">Pedidos y reservas</p>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <a href={`tel:${restaurantInfo.phone}`} className="font-display text-[1.95rem] leading-none text-black hover:text-black/76 sm:text-[2.15rem]">
                    91 713 99 80
                  </a>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/58">
                    Local, recogida y domicilio
                  </p>
                </div>
              </div>
            </article>

            <article className="relative min-h-[300px] bg-black sm:min-h-[420px] lg:min-h-0">
              <img
                src={heroImage}
                alt="Platos servidos sobre mesa clara"
                className="h-full w-full object-cover object-[center_62%]"
                width={1400}
                height={1200}
              />
              <div className="gradient-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 grid gap-3 px-4 pb-4 pt-10 text-white sm:px-7 sm:pb-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-6 lg:pt-14 xl:px-8">
                <div>
                  <p className="editorial-kicker text-white/72">DejaVu Kebab</p>
                  <p className="mt-2 max-w-[20rem] font-display text-[2.35rem] leading-none sm:max-w-[22rem] sm:text-[2.7rem] lg:max-w-[19rem] lg:text-[2.4rem] xl:max-w-[21rem] xl:text-[2.65rem]">
                    Local, recogida o domicilio.
                  </p>
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
                  Rivas-Vaciamadrid / cocina al momento
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="manifiesto" className="px-5 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.48fr_0.52fr]">
            <article className="bg-black px-7 py-8 text-white sm:px-10 sm:py-10">
              <p className="editorial-kicker text-[#cfa066]">Nosotros</p>
              <h2 className="mt-4 font-display text-[clamp(4rem,8vw,6.75rem)] leading-[0.9]">
                Kebab, parrilla y cocina turca hecha al momento.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">
                En DejaVu trabajamos con carne al trompo, parrilla, panes tostados y salsas servidas al momento. La carta
                esta pensada para pedir facil y saber de un vistazo que lleva cada plato.
              </p>

              <ul className="mt-8 grid gap-3">
                {housePrinciples.map((point) => (
                  <li key={point} className="border-t border-white/12 pt-3 text-[15px] font-medium uppercase tracking-[0.14em] text-white/86">
                    {point}
                  </li>
                ))}
              </ul>
            </article>

            <div className="grid overflow-hidden border border-black/12">
              <div className="relative min-h-[320px] sm:min-h-[380px]">
                <img
                  src={terraceImage}
                  alt="Interior del local"
                  className="h-full w-full object-cover grayscale"
                  width={1400}
                  height={1000}
                />
                <div className="absolute bottom-0 left-0 bg-black px-6 py-5 text-white sm:px-8 sm:py-6">
                  <p className="editorial-kicker text-[#cfa066]">Desde</p>
                  <p className="font-display text-6xl leading-none sm:text-7xl">2005</p>
                </div>
              </div>

              <div className="grid md:grid-cols-[0.58fr_0.42fr]">
                <article className="bg-white px-6 py-6 sm:px-8">
                  <p className="editorial-kicker text-black/55">Lo que cuidamos</p>
                  <div className="mt-5 grid gap-4 text-[15px] font-semibold uppercase tracking-[0.14em] text-black/78">
                    <p className="border-t border-black/10 pt-3">Carne cortada al momento</p>
                    <p className="border-t border-black/10 pt-3">Panes, salsas y extras recien servidos</p>
                    <p className="border-t border-black/10 pt-3">Opciones para local, recogida y reparto</p>
                  </div>
                </article>

                <article className="bg-[#cfa066] px-6 py-6 sm:px-8">
                  <p className="editorial-kicker text-black/55">Contacto rapido</p>
                  <div className="mt-5 space-y-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-black/76">
                    <a href={`tel:${restaurantInfo.phone}`} className="block hover:text-black">
                      {restaurantInfo.phone}
                    </a>
                    <a href={mapsUrl} target="_blank" rel="noreferrer" className="block hover:text-black">
                      Ver ubicacion
                    </a>
                    <Link to="/carta" className="block hover:text-black">
                      Entrar a la carta
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="destacados" className="px-5 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="editorial-kicker text-black/55">Carta destacada</p>
                <h2 className="mt-4 font-display text-[clamp(3.75rem,8vw,6rem)] leading-[0.9] text-black">
                  Platos que mas salen cada dia.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-black/68">
                  Una seleccion de algunos de los platos mas pedidos para que la carta se entienda rapido desde la primera visita.
                </p>
              </div>

              <Link
                to="/carta"
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/55 transition-colors hover:text-black"
              >
                Ver carta completa
              </Link>
            </div>

            <div className="mt-8 grid gap-6 lg:auto-rows-fr lg:grid-cols-3">
              {featuredProducts.map((product, index) => (
                <MenuProductCard
                  key={product.id}
                  product={product}
                  className="h-full motion-safe:animate-fade-in"
                  style={{ animationDelay: `${index * 120}ms` }}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="visitanos" className="px-5 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <article className="relative min-h-[560px] overflow-hidden border border-black/12">
              <img
                src={adanaImage}
                alt="Producto servido en primer plano"
                className="h-full w-full object-cover"
                width={1400}
                height={1200}
              />
              <div className="absolute inset-x-6 top-6 border border-black/12 bg-background px-6 py-6 sm:inset-x-8 sm:top-8 sm:px-8 sm:py-8">
                <p className="editorial-kicker text-black/55">Encuentranos</p>
                <h2 className="mt-3 font-display text-5xl leading-none text-black sm:text-6xl">Todo lo necesario para venir o pedir.</h2>

                <div className="mt-8 grid gap-5 text-[15px] font-semibold uppercase tracking-[0.12em] text-black/78">
                  <div className="grid gap-2 border-t border-black/10 pt-3 sm:grid-cols-[160px_1fr]">
                    <p>Direccion</p>
                    <div className="space-y-1 text-black">
                      <p>{restaurantInfo.address}</p>
                      <p>{restaurantInfo.city}</p>
                    </div>
                  </div>

                  <div className="grid gap-2 border-t border-black/10 pt-3 sm:grid-cols-[160px_1fr]">
                    <p>Telefono</p>
                    <a href={`tel:${restaurantInfo.phone}`} className="text-black hover:text-black/70">
                      91 713 99 80
                    </a>
                  </div>

                  <div className="grid gap-2 border-t border-black/10 pt-3 sm:grid-cols-[160px_1fr]">
                    <p>Reparto</p>
                    <p>{restaurantInfo.serviceAreas.join(", ")}</p>
                  </div>
                </div>
              </div>
            </article>

            <div className="space-y-6">
              <article className="bg-black px-7 py-8 text-white sm:px-10">
                <p className="editorial-kicker text-[#cfa066]">Local</p>
                <h3 className="mt-4 font-display text-5xl leading-none sm:text-6xl">Sala, terraza y servicio directo desde el local.</h3>
                <p className="mt-4 max-w-xl text-lg leading-8 text-white/72">
                  Puedes llamar para hacer tu pedido, pasar a recogerlo o venir a comer con calma en el local o en la
                  terraza. Tambien atendemos reparto en zonas cercanas.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="h-12 border border-[#cfa066] bg-[#cfa066] px-6 text-[11px] font-semibold uppercase tracking-[0.26em] text-black hover:bg-[#cfa066]/90">
                    <a href={`tel:${restaurantInfo.phone}`}>
                      <Phone className="h-4 w-4" />
                      Llamar
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 border border-white/18 bg-transparent px-6 text-[11px] font-semibold uppercase tracking-[0.26em] text-white hover:bg-white/8"
                  >
                    <a href={mapsUrl} target="_blank" rel="noreferrer">
                      <MapPin className="h-4 w-4" />
                      Ver mapa
                    </a>
                  </Button>
                </div>
              </article>

              <article className="border border-black/12 bg-white px-7 py-8 sm:px-10">
                <p className="editorial-kicker text-black/55">Horario</p>
                <div className="mt-5 grid gap-3">
                  {restaurantInfo.openingHours.map((slot) => (
                    <div key={slot.day} className="grid gap-1 border-t border-black/10 pt-3 text-[15px] font-semibold uppercase tracking-[0.12em] text-black/78 sm:grid-cols-[140px_1fr]">
                      <p>{slot.day}</p>
                      <p className="text-black">{slot.time}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
