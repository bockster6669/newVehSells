export const ads = [
  {
    id: 1,
    name: "Adder",
    price: 1200000,
    info: [
      { Type: "Sports Classic" },
      { Year: "2013" },
    ],
    imgLinks: ["adder.png"],
  },
  {
    id: 2,
    name: "Airbus",
    price: 5000000, // Adjust price as needed
    info: [{ Type: "Helicopter" }],
    imgLinks: ["airbus.png"],
  },
  {
    id: 3,
    name: "Airtug",
    price: 2000000, // Adjust price as needed
    info: [{ Type: "Tugboat" }],
    imgLinks: ["airtug.png"],
  },
  {
    id: 4,
    name: "Akula",
    price: 800000, // Adjust price as needed
    info: [{ Type: "Attack Helicopter" }],
    imgLinks: ["akula.png"],
  },
  {
    id: 5,
    name: "Akuma",
    price: 45000,
    info: [{ Type: "Motorcycle" }],
    imgLinks: ["akuma.png"],
  },
  {
    id: 6,
    name: "Alpha",
    price: 150000,
    info: [{ Type: "Sports Car" }],
    imgLinks: ["alpha.png"],
  },
  {
    id: 7,
    name: "Alpha Z1",
    price: 200000,
    info: [{ Type: "Sports Car" }],
    imgLinks: ["alphaz1.png"],
  },
  {
    id: 8,
    name: "Ambulance",
    price: 150000,
    info: [{ Type: "Emergency Vehicle" }],
    imgLinks: ["ambulance.png"],
  },
  {
    id: 9,
    name: "Annihilator",
    price: 4000000, // Adjust price as needed
    info: [{ Type: "Military Helicopter" }],
    imgLinks: ["annihilator.png"],
  },
  {
    id: 10,
    name: "APC",
    price: 1500000, // Adjust price as needed
    info: [{ Type: "Military Vehicle" }],
    imgLinks: ["apc.png"],
  },
  // ... Add 10 more objects following the same structure and adjust image names ...
  {
    id: 20,
    name: "Pony 2",
    price: 60000,
    info: [{ Type: "Muscle Car" }],
    imgLinks: ["pony2.png"],
  },
];

export function getAd(id) {
  const ad = ads.find((ad) => ad.id == id);
  return ad;
}
