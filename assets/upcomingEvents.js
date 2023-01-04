let ubicacion = document.getElementById("section-cards")

function crearCards (lista, dondeVa){
    let todasLasCards = ""
    for (let recorrido of lista.events){
        if (recorrido.date >= data.currentDate){
        let template = `<div class="card" style="width: 18rem;">
        <img src="${recorrido.image}" class="card-img-top" alt="${recorrido.name}">
        <div class="card-body">
            <div>
            <h5 class="card-title">${recorrido.name}</h5>
            <p class="card-text">${recorrido.description}</p>
        </div>
            <div class="div-cartas">
            <h5>Price: $${ recorrido.price}</h5>
            <a href="./events-card.html?idCarta=${recorrido._id}" class="btn btn-danger">View more..</a>
        </div>
        </div>
        </div>`
        todasLasCards += template
}
    }
    dondeVa.innerHTML = todasLasCards
}
crearCards (data, ubicacion)

const sinRepetir = []
const categorias = data.events.map(events => events.category)

categorias.forEach(categorias => {
if (!sinRepetir.includes (categorias)){
sinRepetir.push (categorias)}
})

console.log(sinRepetir)


const check = document.getElementById("checkboxes")
check.innerHTML = generarCheckbox(sinRepetir)

function generarCheckbox (categorias){
    let template = ""
    categorias.forEach(categorias =>{
        template += `<div class="form-check form-check-inline">   
        <label class="form-check-label">${categorias}
	<input class="form-check-input" type="checkbox" value="${categorias}">
	</label>
</div>`
    })
    return template
}