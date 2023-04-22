class Movie {
    constructor (name, rating, description, imagen_f, imagen_L, clasification, star1, star2, star3, star4, star5) {
        this.name = name
        this.rating = rating
        this.description = description
        this.imagen_f = imagen_f
        this.imagen_L = imagen_L
        this.clasification = clasification
        this.star1 = star1
        this.star2 = star2
        this.star3 = star3
        this.star4 = star4
        this.star5 = star5
    }

    toRecomended(id) {
        return `
        <div class="Imagen" onclick="selectedMovie(${id})">
            <img class="Image_recomend" src="${this.imagen_L}" alt="">
            <h5>${this.clasification}</h5>
            <h4><img id="Play_Icon" src="baseline_play_arrow_white_48dp.png" alt="Play">Play</h4>
            <div class="Información">
                <p>Ratings: </p>
                <img class="Tamaño" src="${this.star1}" alt="">
                <img class="Tamaño" src="${this.star2}" alt="">
                <img class="Tamaño" src="${this.star3}" alt="">
                <img class="Tamaño" src="${this.star4}" alt="">
                <img class="Tamaño" src="${this.star5}" alt="">
                <img class="Tamaño" src="baseline_bookmark_border_white_48dp.png" alt="Guardar">
            </div>
        </div>
        `
    }

    toBanner(id) {
        const Nombre = document.getElementById("Título")
        Nombre.innerHTML = this.name

        const Rating = document.getElementById("Rating")
        Rating.innerHTML = this.rating
        
        const Description = document.getElementById("Sinopsis")
        Description.innerHTML = this.description

        const Clasification = document.getElementById("Edad")
        Clasification.innerHTML = `${this.clasification}`

        Barra_navegación.style.backgroundImage = `url(${this.imagen_f})`
    }
}