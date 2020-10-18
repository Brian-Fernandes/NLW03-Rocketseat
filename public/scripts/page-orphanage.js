const options ={
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-29.8479916,-51.1646426], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);



const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

//create and add marker
L.marker([-29.8479916,-51.1646426], { icon }).addTo(map)

/* image galery */

function selectImage(event) {
    const button = event.currentTarget
    

    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active')
    }
    
    const image = button.children[0]
    var imageContainer = document.querySelector(".orphanage-details > img")
    imageContainer.src = image.src
    button.classList.add('active')
}