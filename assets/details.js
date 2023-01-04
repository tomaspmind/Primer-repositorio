let cadenaParametroUrl = location.search 
let parametros = new URLSearchParams(cadenaParametroUrl)
let id = parametros.get("idCarta")

let contenedor = document.getElementById("contenedor")

let objeto = data.events

let objetoEncontrado = objeto.find(objeto => objeto._id == id)

function crearDetaills(objeto) {
    contenedor.innerHTML = "" 
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

    contenedor.innerHTML=template
}
crearDetaills(objetoEncontrado)
