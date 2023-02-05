const clock = document.querySelector("h2#clock");

function watch() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const secnods = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${secnods}`;
}
setInterval(watch, 1000);
