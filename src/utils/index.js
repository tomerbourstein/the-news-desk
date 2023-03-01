export function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log("Latitude: " + lat + " Longitude: " + lon);
  return { lat, lon };
}

export function chooseRandomItems(array) {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, 15);
}
