export function getImageUrl(name) {
  const url = new URL(`../assets/car_images/${name}`, import.meta.url).href;
  url;
  return url;
}
