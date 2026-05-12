import classic from "@/assets/taco-classic.jpg";
import spicy from "@/assets/taco-spicy.jpg";
import xxl from "@/assets/taco-xxl.jpg";

export const favorites = [
  {
    name: "El Clásico",
    description: "Ternera, cheddar fundido, patatas y salsa de la casa.",
    price: "8,50€",
    image: classic,
  },
  {
    name: "El Picantón",
    description: "Pollo crujiente, jalapeños, cheddar y salsa diabla.",
    price: "9,00€",
    image: spicy,
  },
  {
    name: "El XXL Mania",
    description: "Triple carne, doble queso, patatas y salsa secreta.",
    price: "12,90€",
    image: xxl,
  },
] as const;

export type MenuItem = { name: string; desc: string; price: string };
export type MenuSection = { title: string; items: MenuItem[] };

export const menu: MenuSection[] = [
  {
    title: "Tacos Clásicos",
    items: [
      { name: "Ternera", desc: "Carne picada, cheddar, patatas, salsa casa.", price: "8,50€" },
      { name: "Pollo", desc: "Pollo a la plancha, queso fundido, patatas.", price: "8,50€" },
      { name: "Kebab", desc: "Carne de kebab, cebolla crujiente, queso.", price: "8,90€" },
      { name: "Vegetal", desc: "Falafel, verduras asadas, queso vegano.", price: "8,00€" },
    ],
  },
  {
    title: "Tacos Especiales",
    items: [
      { name: "El Picantón", desc: "Pollo crispy, jalapeños, salsa diabla.", price: "9,00€" },
      { name: "Truffle Beef", desc: "Ternera, mayo trufada, parmesano.", price: "10,50€" },
      { name: "BBQ Bacon", desc: "Doble bacon, BBQ ahumada, cheddar.", price: "9,90€" },
      { name: "El XXL Mania", desc: "Triple carne, doble queso, todo dentro.", price: "12,90€" },
    ],
  },
  {
    title: "Menús",
    items: [
      { name: "Menú Clásico", desc: "Taco clásico + patatas + bebida.", price: "11,90€" },
      { name: "Menú Especial", desc: "Taco especial + patatas + bebida.", price: "13,50€" },
      { name: "Menú XXL", desc: "Taco XXL + patatas grandes + bebida.", price: "15,90€" },
    ],
  },
  {
    title: "Extras y Salsas",
    items: [
      { name: "Patatas grandes", desc: "Crujientes y doradas.", price: "3,50€" },
      { name: "Patatas con queso", desc: "Cheddar fundido por encima.", price: "4,90€" },
      { name: "Extra queso", desc: "Más cheddar dentro de tu taco.", price: "1,50€" },
      { name: "Salsas (algeriana, samurái, diabla)", desc: "Tarrina individual.", price: "0,80€" },
    ],
  },
  {
    title: "Bebidas",
    items: [
      { name: "Refrescos", desc: "Coca-Cola, Fanta, Sprite, Nestea.", price: "2,50€" },
      { name: "Agua", desc: "Botella 50cl.", price: "1,50€" },
      { name: "Cerveza", desc: "Caña o tercio.", price: "2,80€" },
    ],
  },
];
