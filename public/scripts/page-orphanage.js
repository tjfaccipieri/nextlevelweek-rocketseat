const options = {
    dragging: false,
    touchZoom: false,
    doublesClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//creating map
const mymap = L.map('mapid', options).setView([-24.0227962, -46.4884611], 15);

//creating tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

//create personalized icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [28, 68],
    popupAnchor: [170, 2]
})


//creating pop-up
L.marker([-24.030, -46.502], { icon })
    .addTo(mymap)


// função para a troca de imagens
function selectImage(event) {
    const button = event.currentTarget

    //primeiro passo, remover todas as classes .active das imagens
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //selecionar a imagem clicada com
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
        //atualizar o container de imagem (imagem grande em cima)
    imageContainer.src = image.src

    //adicionar a classe .active no botão selecionado
    button.classList.add('active')
}