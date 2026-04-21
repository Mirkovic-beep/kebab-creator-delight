import { describe, expect, it } from "vitest";

import { menuProducts } from "@/features/menu/data";

function getProduct(productId: string) {
  const product = menuProducts.find((entry) => entry.id === productId);

  expect(product, `Producto no encontrado: ${productId}`).toBeDefined();
  return product!;
}

describe("menu images", () => {
  it("reuses the normal kebab and shawarma photos for falafel wraps", () => {
    expect(getProduct("turkish-specialties-kebab-falafel").image).toBe(getProduct("turkish-specialties-kebab").image);
    expect(getProduct("turkish-specialties-shawarma-falafel").image).toBe(getProduct("turkish-specialties-shawarma").image);
    expect(getProduct("menus-menu-kebab-falafel").image).toBe(getProduct("menus-menu-kebab").image);
    expect(getProduct("menus-menu-shawarma-falafel").image).toBe(getProduct("menus-menu-shawarma").image);
  });

  it("keeps the Deja Vu plate photo on the falafel version", () => {
    expect(getProduct("plates-plato-deja-vu-falafel").image).toBe(getProduct("plates-plato-deja-vu").image);
    expect(getProduct("menus-menu-deja-vu-falafel").image).toBe(getProduct("menus-menu-deja-vu").image);
  });

  it("leaves the combi products without photo when there is no matching image", () => {
    expect(getProduct("plates-combi-simple").image).toBeNull();
    expect(getProduct("plates-combi-simple-falafel").image).toBeNull();
    expect(getProduct("plates-combi-doble").image).toBeNull();
    expect(getProduct("plates-combi-doble-falafel").image).toBeNull();
    expect(getProduct("menus-menu-combi-simple").image).toBeNull();
    expect(getProduct("menus-menu-combi-simple-falafel").image).toBeNull();
    expect(getProduct("menus-menu-combi-doble").image).toBeNull();
    expect(getProduct("menus-menu-combi-doble-falafel").image).toBeNull();
  });

  it("uses the patatas mixtas photo on the new ration", () => {
    expect(getProduct("rations-patatas-mixtas-bravas-o-alioli").image).toContain("patatas-bravas");
  });
});
