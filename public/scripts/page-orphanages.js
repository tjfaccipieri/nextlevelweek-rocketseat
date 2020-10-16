//creating map
const mymap = L.map('mapid').setView([-24.0227962, -46.4884611], 15);

//creating tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

//create personalized icon
const icon = L.icon({
    iconUrl: "../public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [28, 68],
    popupAnchor: [170, 2]
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'mymap-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1 class="choose-orphanage"> <img src="../public/images/arrow-white.svg"> </a>')

//creating pop-up
L.marker([-24.030, -46.502], { icon })
    .addTo(mymap)
    .bindPopup(popup);