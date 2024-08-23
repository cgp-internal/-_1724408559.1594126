let mapRouter;

async function initMapRouter(router) {
  mapRouter = router;
}

let map;

async function initMap() {
  map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
  }).addTo(map);
}

let drawnItems = L.featureGroup().addTo(map);

async function drawPolygon(latlngs) {
  drawnItems.clearLayers();
  const polygon = L.polygon(latlngs, { color: 'red' });
  drawnItems.addLayer(polygon);
}

async function sendDataToServer(polygon) {
  const data = polygon.getLatLngs();
  await fetch('/api/flight-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await initMap();
  const drawControl = new L.Control.Draw({
    draw: {
      polygon: true,
      marker: false
    },
    edit: false
  }).addTo(map);
  map.on(L.Draw.Event.CREATED, async e => {
    const polygon = e.layer;
    await drawPolygon(polygon.getLatLngs());
    await sendDataToServer(polygon);
  });
});

async function init() {
  await initMapRouter(require('../../controllers/map').default);
  await initMap();
}

init();