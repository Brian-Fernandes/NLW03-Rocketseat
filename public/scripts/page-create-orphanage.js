const map = L.map('mapid').setView([-29.8479916,-51.1646426], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68]
})

let marker;

// create and add marker 
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //remove icon 
    marker && map.removeLayer(marker);

    // add icon tileLayer
    marker = L.marker([lat,lng], {icon}).addTo(map);
})