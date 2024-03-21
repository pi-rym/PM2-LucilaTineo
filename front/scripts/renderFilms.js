function renderFilms(movie) {
    const filmSection = document.getElementById('contenedor-peliculas');
    const movieCard = document.createElement('div');
    movieCard.classList.add('card');

    const cardImage = document.createElement('img');
    cardImage.classList.add('card-img-top');
    cardImage.src = movie.poster;
    cardImage.alt = movie.title;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = movie.title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = `${movie.year} | Director: ${movie.director}`;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    movieCard.appendChild(cardImage);
    movieCard.appendChild(cardBody);

    filmSection.appendChild(movieCard);
}
module.exports = renderFilms;
