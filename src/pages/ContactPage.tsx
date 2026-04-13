import { MapPin, Phone } from "lucide-react";

import terraceImage from "@/assets/terraza.jpg";
import Footer from "@/features/layout/components/Footer";
import Navbar from "@/features/layout/components/Navbar";
import { Button } from "@/shared/ui/button";
import { restaurantInfo } from "@/features/menu/data";

const ContactPage = () => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.mapsQuery)}`;

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pb-6">
        <section className="px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.04fr_0.96fr]">
            <article className="border border-black/12 bg-background sm:relative sm:min-h-[580px] sm:overflow-hidden">
              <div className="h-[210px] sm:absolute sm:inset-0 sm:h-full">
                <img
                  src={terraceImage}
                  alt="Vista del local y terraza"
                  className="h-full w-full object-cover"
                  width={1400}
                  height={1200}
                />
              </div>

              <div className="relative mx-4 -mt-5 border border-black/12 bg-background px-5 py-5 sm:absolute sm:inset-x-8 sm:top-8 sm:mx-0 sm:mt-0 sm:px-8 sm:py-8">
                <p className="editorial-kicker text-black/55">Contacto</p>
                <h1 className="mt-3 font-display text-[clamp(2.9rem,11vw,6rem)] leading-[0.9] text-black">
                  Ven, llama o encuentra el local sin rodeos.
                </h1>

                <div className="mt-6 grid gap-4 text-[14px] font-semibold uppercase tracking-[0.11em] text-black/78 sm:mt-8 sm:gap-5 sm:text-[15px] sm:tracking-[0.12em]">
                  <div className="grid gap-2 border-t border-black/10 pt-3 sm:grid-cols-[160px_1fr]">
                    <p>Direccion</p>
                    <div className="space-y-1 text-black">
                      <p>{restaurantInfo.address}</p>
                      <p>{restaurantInfo.city}</p>
                    </div>
                  </div>

                  <div className="grid gap-2 border-t border-black/10 pt-3 sm:grid-cols-[160px_1fr]">
                    <p>Telefono</p>
                    <a href={`tel:${restaurantInfo.phone}`} className="text-black hover:text-black/68">
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
              <article className="bg-black px-5 py-6 text-white sm:px-10 sm:py-8">
                <p className="editorial-kicker text-[#cfa066]">Horario</p>
                <div className="mt-4 grid gap-3 sm:mt-5">
                  {restaurantInfo.openingHours.map((slot) => (
                    <div key={slot.day} className="grid gap-1 border-t border-white/12 pt-3 text-[15px] font-semibold uppercase tracking-[0.12em] text-white/82 sm:grid-cols-[140px_1fr]">
                      <p>{slot.day}</p>
                      <p className="text-white">{slot.time}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="bg-[#cfa066] px-5 py-6 sm:px-10 sm:py-8">
                <p className="editorial-kicker text-black/55">Acciones</p>
                <h2 className="mt-3 font-display text-[2.9rem] leading-none text-black sm:text-6xl">
                  Abre el mapa o llama directamente al local.
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-6 text-black/72 sm:mt-4 sm:text-base sm:leading-7">
                  Si quieres hacer un pedido, confirmar el horario o consultar un alergeno, puedes llamarnos o ver la
                  ubicacion exacta en el mapa.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                  <Button asChild className="h-10 border border-black bg-black px-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-background hover:bg-black/90 sm:h-12 sm:px-6 sm:text-[11px] sm:tracking-[0.24em]">
                    <a href={`tel:${restaurantInfo.phone}`}>
                      <Phone className="h-4 w-4" />
                      Llamar
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 border border-black bg-transparent px-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-black hover:bg-white/25 sm:h-12 sm:px-6 sm:text-[11px] sm:tracking-[0.24em]"
                  >
                    <a href={mapsUrl} target="_blank" rel="noreferrer">
                      <MapPin className="h-4 w-4" />
                      Ver mapa
                    </a>
                  </Button>
                </div>
              </article>

              <article className="border border-black/12 bg-white px-5 py-6 sm:px-10 sm:py-8">
                <p className="editorial-kicker text-black/55">Zonas cercanas</p>
                <div className="mt-4 grid gap-3 text-[14px] font-semibold uppercase tracking-[0.11em] text-black/78 sm:mt-5 sm:text-[15px] sm:tracking-[0.12em]">
                  {restaurantInfo.serviceAreas.map((area) => (
                    <p key={area} className="border-t border-black/10 pt-3">
                      {area}
                    </p>
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

export default ContactPage;
