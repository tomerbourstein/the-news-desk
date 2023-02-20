export function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log("Latitude: " + lat + " Longitude: " + lon);
  return { lat, lon };
}
