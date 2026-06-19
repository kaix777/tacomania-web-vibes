// Tacos
import tacoPollo from "@/assets/taco-pollo.jpg";
import tacoTernera from "@/assets/taco-ternera.jpg";
import tacoMixto from "@/assets/taco-mixto.jpg";
import tacoShawarma from "@/assets/taco-shawarma.jpg";
import tacoFrankfurt from "@/assets/taco-frankfurt.jpg";
import tacoCordon from "@/assets/taco-cordon.jpg";
import tacoTenders from "@/assets/taco-tenders.jpg";
import tacoNuggets from "@/assets/taco-nuggets.jpg";
import shawarmaWrap from "@/assets/shawarma-wrap.jpg";

// Pizzas
import pizzaMargarita from "@/assets/pizza.jpg";
import pizzaPepperoni from "@/assets/pizza-pepperoni.jpg";
import pizzaQuesos from "@/assets/pizza-quesos.jpg";
import pizzaBbq from "@/assets/pizza-bbq.jpg";
import pizzaTuna from "@/assets/pizza-tuna.jpg";
import pizzaProsciutto from "@/assets/pizza-prosciutto.jpg";
import pizzaCarbonara from "@/assets/pizza-carbonara.jpg";

// Patatas / Arroz
import fries from "@/assets/fries.jpg";
import kapsalon from "@/assets/kapsalon.jpg";
import kebabPlate from "@/assets/kebab-plate.jpg";
import salchipapas from "@/assets/salchipapas.jpg";
import friesS from "@/assets/fries-s.jpg";
import friesM from "@/assets/fries-m.jpg";
import friesL from "@/assets/fries-l.jpg";
import riceS from "@/assets/rice-s.jpg";
import riceM from "@/assets/rice-m.jpg";
import riceL from "@/assets/rice-l.jpg";

// Extras / Postres / Bebidas
import supercombo from "@/assets/supercombo.jpg";
import sauces from "@/assets/sauces.jpg";
import milkshake from "@/assets/milkshake.jpg";
import cake from "@/assets/cake.jpg";
import water from "@/assets/water.jpg";
import soda from "@/assets/soda.jpg";
import beer from "@/assets/beer.jpg";

/**
 * Platos destacados que se muestran en el INICIO.
 * Usan exactamente los mismos datos que la carta.
 */
export const favorites = [
  {
    name: "Taco Ternera",
    description:
      "Ternera, patatas, queso, salsa andalouse, salsa Tacomanía.",
    price: "7,50 €",
    image: tacoTernera,
  },
  {
    name: "Taco Shawarma",
    description:
      "Carne shawarma, patatas, queso, salsa de yogur, salsa Tacomanía, salsa andalouse.",
    price: "6,00 €",
    image: tacoShawarma,
  },
  {
    name: "Pizza Tacomanía",
    description: "Pollo marinado, ternera, salsa andalouse.",
    price: "9,00 €",
    image: pizzaBbq,
  },
  {
    name: "Kapsalon",
    description: "Patatas, kebab, queso fundido y salsas.",
    price: "6,50 €",
    image: kapsalon,
  },
  {
    name: "Taco Tenders",
    description: "Pollo crispy, patatas, queso, salsa andalouse, salsa Tacomanía.",
    price: "6,00 €",
    image: tacoTenders,
  },
  {
    name: "Supercombo",
    description:
      "Nuggets, tenders, palos de queso, alitas, patatas, carne a elegir y dos salsas.",
    price: "10,00 €",
    image: supercombo,
  },
] as const;

export type MenuItem = { name: string; desc: string; price: string; image: string };
export type MenuSection = { title: string; items: MenuItem[] };

/**
 * Secciones de menú genéricas (por si las usas en otro sitio).
 * También sincronizadas con la carta.
 */
export const menu: MenuSection[] = [
  {
    title: "Tacos",
    items: [
      {
        name: "Taco Pollo",
        desc: "Pollo marinado, patatas, queso, salsa andalouse, salsa Tacomanía.",
        price: "6,50 €",
        image: tacoPollo,
      },
      {
        name: "Taco Ternera",
        desc: "Ternera, patatas, queso, salsa andalouse, salsa Tacomanía.",
        price: "7,50 €",
        image: tacoTernera,
      },
      {
        name: "Taco Mixto",
        desc: "Pollo marinado, ternera, patatas, queso, salsa andalouse, salsa Tacomanía.",
        price: "7,00 €",
        image: tacoMixto,
      },
      {
        name: "Taco Shawarma",
        desc: "Carne shawarma, patatas, queso, salsa de yogur, salsa Tacomanía, salsa andalouse.",
        price: "6,00 €",
        image: tacoShawarma,
      },
      {
        name: "Taco Frankfurt",
        desc: "Salchicha, ternera, patatas, queso, cebolla crispy, salsa rosa, salsa Tacomanía.",
        price: "6,50 €",
        image: tacoFrankfurt,
      },
      {
        name: "Taco Cordon Bleu",
        desc: "Cordon bleu, jamón, patatas, queso, salsa andalouse, salsa Tacomanía.",
        price: "6,50 €",
        image: tacoCordon,
      },
      {
        name: "Taco Tenders",
        desc: "Pollo crispy, patatas, queso, salsa andalouse, salsa Tacomanía.",
        price: "6,00 €",
        image: tacoTenders,
      },
      {
        name: "Taco Nuggets",
        desc: "Nuggets, patatas, queso, salsa andalouse, salsa Tacomanía.",
        price: "6,00 €",
        image: tacoNuggets,
      },
      {
        name: "Shawarma Clásico",
        desc: "El de toda la vida: pan caliente, carne especiada, verduras y salsa.",
        price: "4,50 €",
        image: shawarmaWrap,
      },
    ],
  },
  {
    title: "Pizzas",
    items: [
      { name: "Margarita", desc: "Clásica de tomate y queso.", price: "6,00 €", image: pizzaMargarita },
      { name: "Prosciutto", desc: "Jamón cocido y queso fundido.", price: "7,00 €", image: pizzaProsciutto },
      { name: "Prosciutto e Fungi", desc: "Jamón y champiñones.", price: "7,50 €", image: pizzaProsciutto },
      { name: "Pepperoni", desc: "Pepperoni y queso.", price: "7,00 €", image: pizzaPepperoni },
      { name: "Shawarma", desc: "Carne shawarma y queso.", price: "7,00 €", image: pizzaBbq },
      { name: "Shawarma y Pimientos", desc: "Carne shawarma y pimientos.", price: "7,50 €", image: pizzaBbq },
      {
        name: "Tacomanía",
        desc: "Pollo marinado, ternera, salsa andalouse.",
        price: "9,00 €",
        image: pizzaBbq,
      },
      { name: "4 Quesos", desc: "Mezcla de quesos fundidos.", price: "7,50 €", image: pizzaQuesos },
      { name: "Atún y Cebolla", desc: "Atún, cebolla y queso.", price: "7,00 €", image: pizzaTuna },
      {
        name: "Barbacoa",
        desc: "Carne picada, salchicha, jamón, salsa barbacoa.",
        price: "8,50 €",
        image: pizzaBbq,
      },
      { name: "Campera", desc: "Huevo y carne picada.", price: "8,00 €", image: pizzaCarbonara },
      { name: "Carbonara", desc: "Salsa cremosa estilo carbonara.", price: "8,00 €", image: pizzaCarbonara },
      { name: "Frankfurt", desc: "Salchicha tipo frankfurt.", price: "7,00 €", image: pizzaPepperoni },
    ],
  },
  {
    title: "Patatas y platos",
    items: [
      {
        name: "Ración simple",
        desc: "Crujientes, recién hechas.",
        price: "2,50 €",
        image: fries,
      },
      {
        name: "Kapsalon",
        desc: "Patatas, kebab, queso fundido y salsas.",
        price: "6,50 €",
        image: kapsalon,
      },
      {
        name: "Plato kebab",
        desc: "Patatas, kebab y verduras.",
        price: "6,50 €",
        image: kebabPlate,
      },
      {
        name: "Salchipapas",
        desc: "Patatas, salchicha, ketchup y mayonesa.",
        price: "6,00 €",
        image: salchipapas,
      },
      {
        name: "Crea tus patatas S",
        desc: "1 salsa · 1 topping.",
        price: "4,00 €",
        image: friesS,
      },
      {
        name: "Crea tus patatas M",
        desc: "2 salsas · 2 toppings.",
        price: "6,00 €",
        image: friesM,
      },
      {
        name: "Crea tus patatas L",
        desc: "3 salsas · 3 toppings.",
        price: "8,00 €",
        image: friesL,
      },
    ],
  },
  {
    title: "Arroz",
    items: [
      {
        name: "Crea tu arroz S",
        desc: "1 salsa y 1 topping a elegir.",
        price: "5,00 €",
        image: riceS,
      },
      {
        name: "Crea tu arroz M",
        desc: "2 salsas y 2 toppings a elegir.",
        price: "7,00 €",
        image: riceM,
      },
      {
        name: "Crea tu arroz L",
        desc: "3 salsas y 3 toppings a elegir.",
        price: "9,00 €",
        image: riceL,
      },
    ],
  },
  {
    title: "Extras y complementos",
    items: [
      {
        name: "Supercombo",
        desc: "Nuggets, tenders, palos de queso, alitas, patatas, carne a elegir y dos salsas.",
        price: "10,00 €",
        image: supercombo,
      },
      {
        name: "Completa tu comida a menú",
        desc: "Incluye patatas y bebida.",
        price: "3,00 €",
        image: fries,
      },
      {
        name: "Completa tu menú con entrante",
        desc: "A elegir entre nuggets, tenders, palos de queso o alitas.",
        price: "2,50 €",
        image: sauces,
      },
    ],
  },
  {
    title: "Postres",
    items: [
      {
        name: "Batidos",
        desc: "Consulta nuestros sabores del día.",
        price: "4,00 €",
        image: milkshake,
      },
      {
        name: "Tartas del día",
        desc: "Pregúntanos por las tartas disponibles.",
        price: "3,00 €",
        image: cake,
      },
    ],
  },
  {
    title: "Bebidas",
    items: [
      { name: "Agua", desc: "Botella de agua.", price: "1,50 €", image: water },
      { name: "Refresco", desc: "Refrescos variados.", price: "2,00 €", image: soda },
      { name: "Cerveza", desc: "Cerveza fría.", price: "2,00 €", image: beer },
    ],
  },
];
