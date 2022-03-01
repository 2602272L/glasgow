mapboxgl.accessToken = 'pk.eyJ1IjoiMjYwMjI3MmwiLCJhIjoiY2t6eTcxeHN1MDhuZDJvbGpibHEzNmRhMSJ9.WwKdRu8sLN88Eg9L816oWg';
const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/2602272l/cl087rrjn000614qrsdtcnprh' // replace this with your style URL
});
map.on('load', () => {
  map.getCanvas().style.cursor = 'default';
map.fitBounds([
  [-4.1518, 55.9642],
  [-4.3518, 55.7642]
]);
const layers = [
"<10",
"20 ",
"30 ",
"40 ",
"50 ",
"60 ",
"70 ",
"80 ",
"90 ",
"100"
];
const colors = [
 "#67001f",
"#b2182b",
"#d6604d",
"#f4a582",
"#fddbc7",
"#d1e5f0",
"#92c5de",
"#4393c3",
"#2166ac",
"#053061"
];
// create legend
const legend = document.getElementById('legend');

layers.forEach((layer, i) => {
const color = colors[i];
const key = document.createElement("div");
if (i <= 1 || i >= 8) {
key.style.color = "white";
}
  //place holder
key.className = "legend-key";
key.style.backgroundColor = color;
key.innerHTML = `${layer}`;
legend.appendChild(key);
});
});

map.on('mousemove', (event) => {
  const dzone = map.queryRenderedFeatures(event.point, {
    layers: ['glasgow-simd']
  });
  document.getElementById('pd').innerHTML = dzone.length
    ? `<h3>${dzone[0].properties.DZname}</h3><p>Rank: <strong>${dzone[0].properties.Percentv2}</strong> %</p>`
    : `<p>Hover over a data zone!</p>`;
});


map.addControl(new mapboxgl.NavigationControl(), "top-left");

map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true,
showUserHeading: true
}),
"top-left"
);