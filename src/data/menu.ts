import classic from "@/assets/taco-real-1.jpg";
import spicy from "@/assets/taco-real-2.jpg";
import xxl from "@/assets/taco-real-3.jpg";
import bbq from "@/assets/taco-real-4.jpg";
import veggie from "@/assets/taco-real-5.jpg";
import fries from "@/assets/fries.jpg";
import sauces from "@/assets/sauces.jpg";
import drinks from "@/assets/drinks.jpg";

export const favorites = [
  {
    name: "Taco Ternera",
    description:
      "Ternera, patatas, queso, salsa andalouse, salsa Tacomanía.",
    price: "7,50 €",
    image: classic,
  },
  {
    name: "Taco Shawarma",
    description:
      "Carne shawarma, patatas, queso, salsa de yogur, salsa Tacomanía, salsa andalouse.",
    price: "6,00 €",
    image: spicy,
  },
  {
    name: "Pizza Tacomanía",
    description: "Pollo marinado, ternera, salsa andalouse.",
    price: "9,00 €",
    image: xxl,
  },
  {
    name: "Kapsalon",
    description: "Patatas, kebab, queso fundido y salsas.",
    price: "6,50 €",
    image: fries,
  },
  {
    name: "Supercombo Tacomanía",
    description:
      "Nuggets, tenders, palos de queso, alitas, patatas, carne a elegir y dos salsas.",
    price: "10,00 €",
    image: sauces,
  },
] as const;

export type MenuItem = { name: string; desc: string; price: string; image: string };
export type MenuSection = { title: string; items: MenuItem[] };

export const menu: MenuSection[] = [
  {
    title: "Tacos Clásicos",
    items: [
      { name: "Ternera", desc: "Carne picada, cheddar, patatas, salsa casa.", price: "8,50€", image: classic },
      { name: "Pollo", desc: "Pollo a la plancha, queso fundido, patatas.", price: "8,50€", image: bbq },
      { name: "Kebab", desc: "Carne de kebab, cebolla crujiente, queso.", price: "8,90€", image: xxl },
      { name: "Vegetal", desc: "Falafel, verduras asadas, queso vegano.", price: "8,00€", image: veggie },
    ],
  },
  {
    title: "Tacos Especiales",
    items: [
      { name: "El Picantón", desc: "Pollo crispy, jalapeños, salsa diabla.", price: "9,00€", image: spicy },
      { name: "Truffle Beef", desc: "Ternera, mayo trufada, parmesano.", price: "10,50€", image: classic },
      { name: "BBQ Bacon", desc: "Doble bacon, BBQ ahumada, cheddar.", price: "9,90€", image: bbq },
      { name: "El XXL Mania", desc: "Triple carne, doble queso, todo dentro.", price: "12,90€", image: xxl },
    ],
  },
  {
    title: "Menús",
    items: [
      { name: "Menú Clásico", desc: "Taco clásico + patatas + bebida.", price: "11,90€", image: classic },
      { name: "Menú Especial", desc: "Taco especial + patatas + bebida.", price: "13,50€", image: spicy },
      { name: "Menú XXL", desc: "Taco XXL + patatas grandes + bebida.", price: "15,90€", image: xxl },
    ],
  },
  {
    title: "Extras y Salsas",
    items: [
      { name: "Patatas grandes", desc: "Crujientes y doradas.", price: "3,50€", image: fries },
      { name: "Patatas con queso", desc: "Cheddar fundido por encima.", price: "4,90€", image: fries },
      { name: "Extra queso", desc: "Más cheddar dentro de tu taco.", price: "1,50€", image: bbq },
      { name: "Salsas (algeriana, samurái, diabla)", desc: "Tarrina individual.", price: "0,80€", image: sauces },
    ],
  },
  {
    title: "Bebidas",
    items: [
      { name: "Refrescos", desc: "Coca-Cola, Fanta, Sprite, Nestea.", price: "2,50€", image: drinks },
      { name: "Agua", desc: "Botella 50cl.", price: "1,50€", image: drinks },
      { name: "Cerveza", desc: "Caña o tercio.", price: "2,80€", image: drinks },
    ],
  },
];
