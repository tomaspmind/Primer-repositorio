let where = document.getElementById("section-cards")

function crearCards (lista, va){
    let todasLasCards = ""
    for (let recorrido of lista.events){
        if (recorrido.date <= data.currentDate){
        let template = `<div class="card" style="width: 18rem;">
        <img src="${recorrido.image}" class="card-img-top" alt="${recorrido.name}">
        <div class="card-body">
            <div>
            <h5 class="card-title">${recorrido.name}</h5>
            <p class="card-text">${recorrido.description}</p>
        </div>
            <div class="div-cartas">
            <h5>Price: $${ recorrido.price}</h5>
            <a href="#" class="btn btn-danger">View more..</a>
        </div>
        </div>
        </div>`
        todasLasCards += template
}
    }
    va.innerHTML = todasLasCards
}
crearCards (data, where)
