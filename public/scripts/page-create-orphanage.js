const map = L.map('mapid').setView([-29.8479916,-51.1646426], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68]
})

let marker;

// create and add marker 
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon 
    marker && map.removeLayer(marker);

    // add icon tileLayer
    marker = L.marker([lat,lng], {icon}).addTo(map);
})

//photos upload layer

function addPhotoField() {
    const container = document.querySelector('#images');

    const fieldsContainer = document.querySelectorAll('.new-upload');
    
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1 ].cloneNode(true)
    const input = newFieldContainer.children[0]

    if(input.value == "" ) {
        return 
    }
    input.value = "";
    container.appendChild(newFieldContainer); 
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();

}

// Select yes or no 

function toggleSelect(event) {

    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active');
    })
    
    const button = event.currentTarget; 
    button.classList.add('active');

    const input = document.querySelector('[name= "open_on_weekends"]')
    input.value = button.dataset.value;
}