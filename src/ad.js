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
