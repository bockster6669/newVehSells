export async function getAdById(id) {
  await fakeNetwork();
  const ad = await fetch("http://localhost:4000/carList/" + id).then((r) =>
    r.json()
  );
  return ad;
}

export async function getAllAds() {
  const ads = await fetch("http://localhost:4000/carList").then((r) =>
    r.json()
  );
  return ads;
}

export async function getAdsByPrice() {
  const url = new URLSearchParams(window.location.search);
  let priceOf = url.get("priceOf");
  let priceOn = url.get("priceOn");

  if (!priceOf && priceOn) {
    return fetch(`http://localhost:4000/carList/?price_lte=${priceOn}`).then(
      (r) => r.json()
    );
  } else if (!priceOn && priceOf) {
    return fetch(`http://localhost:4000/carList/?price_gte=${priceOf}`).then(
      (r) => r.json()
    );
  } else if (priceOn && priceOf) {
    return fetch(
      `http://localhost:4000/carList/?price_gte=${priceOf}&price_lte=${priceOn}`
    ).then((r) => r.json());
  } else {
    return getAllAds();
  }
}

export async function createNewAd(newAd) {
  const obj = JSON.stringify({
    name: newAd.name,
    price: parseInt(newAd.price),
    info: { Type: newAd.type, Year: newAd.year },
    imgLinks: [{ id: "1", img: "airtug.png" }],
    date: newAd.date,
    views: newAd.views,
    text: newAd.text,
    sellerLocation: newAd.sellerLocation,
    extras: newAd.extras,
  });
  await fakeNetwork(2000);
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
  await fakeNetwork(2000);
  return fetch("http://localhost:4000/myads").then((resp) => resp.json());
}

export async function getMyAdById(id) {
  return await fetch(`http://localhost:4000/myads/${id}`).then((response) =>
    response.json()
  );
}

async function fakeNetwork(time) {
  return new Promise((res) => {
    setTimeout(res, time);
  });
}

export async function filterPrice(price) {
  const data = await fetch("http://localhost:4000/carList/price<3000");
  return await data.json();
}
