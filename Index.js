class Movie {
    constructor (name, rating, description, imagen_f, imagen_L, clasification, stars, stars_no) {
        this.name = name
        this.rating = rating
        this.description = description
        this.imagen_f = imagen_f
        this.imagen_L = imagen_L
        this.clasification = clasification
    }

    toRecomended(id) {
        return `
        <div class="Imagen" onclick="selectedMovie(${id})">
            <img class="Image_recomend" src="${this.imagen_L}" alt="">
            <h5>${this.clasification}</h5>
            <h4><img id="Play_Icon" src="baseline_play_arrow_white_48dp.png" alt="Play">Play</h4>
            <div class="Información">
                <p>Ratings: </p>
                <img class="Tamaño" src="yellow_fill_star.png" alt="Estrella">
                <img class="Tamaño" src="yellow_fill_star.png" alt="Estrella">
                <img class="Tamaño" src="yellow_fill_star.png" alt="Estrella">
                <img class="Tamaño" src="yellow_fill_star.png" alt="Estrella">
                <img class="Tamaño" src="yellow_outline_star.png" alt="Estrella vacía">
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