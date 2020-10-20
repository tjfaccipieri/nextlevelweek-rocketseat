//creating map
const mymap = L.map('mapid').setView([-24.0227962, -46.4884611], 15);

//creating tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

//create personalized icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [28, 68],
    popupAnchor: [170, 2]
})

function addMArker({ id, name, lat, lng }) {

    //create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'mymap-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)

    //creating pop-up
    L.marker([lat, lng], { icon })
        .addTo(mymap)
        .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMArker(orphanage)
})