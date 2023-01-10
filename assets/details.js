let cadenaParametroUrl = location.search 
let parametros = new URLSearchParams(cadenaParametroUrl)
let id = parametros.get("idCarta")

let contenedor = document.getElementById("contenedor")
let datosJson;

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(datos => {
    datosJson = datos
    crearDetaills(datosJson.events.find(objeto => objeto._id == id), contenedor)
})
.catch(error => error.message)

function crearDetaills(objeto, ubicacion) {
    ubicacion.innerHTML = "" 
    template = `<div class="caja-imagen">
    <img src="${objeto.image}" alt="${objeto.name}">
</div>
<div>
    <h2 class="bold">${objeto.name}</h2>
    <p class="texto">${objeto.description}</p>
    <p class="bold">Date: ${objeto.date}</p>
    <p class="bold">Place: ${objeto.place}</p>
    <p class="bold">Price: $${objeto.price}</p>
</div>`

    ubicacion.innerHTML=template
}

