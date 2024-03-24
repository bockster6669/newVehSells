export async function getAdById(id) {
  const data = await fetch("http://localhost:4000/carList/" + id);
  const ad = await data.json();
  return ad;
}

export async function getAllAds() {
  const data = await fetch("http://localhost:4000/carList");
  const ads = await data.json();
  return ads;
}

export function createNewAd(newAd) {
  const obj = JSON.stringify({
    id: "4",
    name: newAd.name,
    price: newAd.price,
    info: { Type: newAd.type, Year: newAd.year },
    imgLinks: [{ id: "1", img: "airtug.png" }],
    date: newAd.date,
    views: newAd.views,
    text: newAd.text,
    sellerLocation: newAd.sellerLocation,
    extras: newAd.extras,
  });
  fetch("http://localhost:4000/carList", {
    method: "POST",
    body: obj,
  });
  fetch("http://localhost:4000/myads", {
    method: "POST",
    body: obj,
  });
}

export function updateAd(ad) {
  fetch(`http://localhost:4000/myads/${ad.id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: ad.id,
      name: ad.name,
      price: ad.price,
      info: { Type: ad.type, Year: ad.year },
      imgLinks: [{ id: "1", img: "airtug.png" }],
      date: ad.date,
      views: ad.views,
      text: ad.text,
      sellerLocation: ad.sellerLocation,
      extras: ad.extras,
    }),
  });
}

export async function getMyAds() {
  return await fetch("http://localhost:4000/myads").then((resp) => resp.json());
}

export async function getMyAdById(id) {
  return await fetch(`http://localhost:4000/myads/${id}`).then((response) =>
    response.json()
  );
}
