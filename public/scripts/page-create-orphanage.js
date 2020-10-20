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

// //creating pop-up
// L.marker([-24.030, -46.502], { icon })
//     .addTo(mymap)
//     .bindPopup(popup);

let marker;
//create and add markers
mymap.on('click', (event) => {
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;

        document.querySelector('[name=lat]').value = lat;
        document.querySelector('[name=lng]').value = lng;
        //remove all old icons 
        marker && mymap.removeLayer(marker)

        //add icon layer 
        marker = L.marker([lat, lng], { icon }).addTo(mymap)

    })
    //ending map configs


//adicinando campo de fotos

function addPhotoField() {
    //pegar o container photos id #images
    const container = document.querySelector('#images')
        //pegar o container que tem que ser duplicado .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
        //clonar a ultima imagem adicionada de
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
        //checagem de campo vazio (do not add blank fields)
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }
    //limpar o campo do container para o novo vir em branco
    input.value = ""
        //adicionar o clone ao container #images
    container.appendChild(newFieldContainer)
}

function deleteField() {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ''
        return
    }
    //deletar o campo
    span.parentNode.remove()
}

//seleção do botão sim e não
function toggleSelect(event) {
    //retirar a .active dos botões
    document.querySelectorAll('.button-select button')
        .forEach(button => button.classList.remove('active'))
        //a linha de cima é a mesma coisa que:
        // .forEach(function (button){
        //     button.classList.remove('active')
        // })
        //colocar a calss .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
        //atualizar o input hidden
    const input = document.querySelector('[name="open-on-weekends]')
        //verificar se é sim ou não pelo data-value
    input.value = button.dataset.value
}