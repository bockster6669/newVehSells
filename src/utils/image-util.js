export function getImageUrl(name) {
    return new URL(`../assets/car_images/${name}`, import.meta.url).href;
}