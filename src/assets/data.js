import { MdHome } from "react-icons/md";

export const ads = [
  {
    id: 1,
    name: "Adder",
    price: 1200000,
    info: { Type: "Sports Classic", Year: "2013" },
    imgLinks: ["adder.png", "adder.png", "adder.png"],
    date: "21.03.2024",
    views: 400,
    text: "Много добро техническо състояние Лизинг с 30% първоначална вноска !!! без доказване на доходи лоши цкр без проблем  Възможност за !!! бартер Възможност за лизинг",
    sellerLocation: "Козлодуй",
    extras: ` Комфорт: Климатроник, Кожен салон, Ел.стъкла, Ел.огледала,
    Ел.седалки, Подгряване на седалки, Стерео уредба, Алуминиеви
    джанти, Мултифункционален волан Сигурност: ABS, ESP, Airbag,
    Халогенни фарове, Аларма, Имобилайзер, Центр. заключване Друго:
    Автопилот, Серво управление, Бордови компютър`,
  },
  {
    id: 2,
    name: "Airbus",
    price: 5000000, // Adjust price as needed
    info: { Type: "Helicopter", Year: "2013" },
    imgLinks: ["airbus.png"],
    date: "21.03.2024",
    views: 400,
    text: "Много добро техническо състояние Лизинг с 30% първоначална вноска !!! без доказване на доходи лоши цкр без проблем  Възможност за !!! бартер Възможност за лизинг",
    sellerLocation: "Козлодуй",
    extras: ` Комфорт: Климатроник, Кожен салон, Ел.стъкла, Ел.огледала,
    Ел.седалки, Подгряване на седалки, Стерео уредба, Алуминиеви
    джанти, Мултифункционален волан Сигурност: ABS, ESP, Airbag,
    Халогенни фарове, Аларма, Имобилайзер, Центр. заключване Друго:
    Автопилот, Серво управление, Бордови компютър`,
  },
  {
    id: 3,
    name: "Airtug",
    price: 2000000, // Adjust price as needed
    info: { Type: "Tugboat", Year: "2013" },
    imgLinks: ["airtug.png"],
    date: "21.03.2024",
    views: 400,
    text: "Много добро техническо състояние Лизинг с 30% първоначална вноска !!! без доказване на доходи лоши цкр без проблем  Възможност за !!! бартер Възможност за лизинг",
    sellerLocation: "Козлодуй",
    extras: ` Комфорт: Климатроник, Кожен салон, Ел.стъкла, Ел.огледала,
    Ел.седалки, Подгряване на седалки, Стерео уредба, Алуминиеви
    джанти, Мултифункционален волан Сигурност: ABS, ESP, Airbag,
    Халогенни фарове, Аларма, Имобилайзер, Центр. заключване Друго:
    Автопилот, Серво управление, Бордови компютър`,
  },
];

export const navLinks = [
  {
    text: "Home",
    path: "ads",
  },
  {
    text: "Favourites",
    path: "fav",
  },
  {
    text: "Profile",
    path: "profile",
  },
  {
    text: "MyAds",
    path: "myads",
  },
];

export const obj = {
  "id":null,
  "name":null,
  "price":null,
  "info":null,
  "imgLinks":null,
  "date":null,
  "views":null,
  "text":null,
  "sellerLocation":null,
  "extras":null
}

export function getAd(id) {
  const ad = ads.find((ad) => ad.id == id);
  return ad;
}
