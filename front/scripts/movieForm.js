document.addEventListener("DOMContentLoaded", function() {
    

function validateForm({
    title, year, director, duration, genre, poster, rate
}) {
    rate = parseFloat(rate);
    if (!title || !year || !director || !duration || !genre || genre.length === 0 || isNaN(rate) || rate < 1 || rate > 10 || !poster) {
        return "Por favor complete todos los campos correctamente";
}

if (isNaN(year) || year.length !== 4) {
    return "El año debe ser un número de 4 dígitos.";
}

return null;
}


function createMovie(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const genre = document.getElementById("genre").value.split(",");
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;

    const newMovie = { title, year, director, duration, genre, rate, poster };

    const error = validateForm(newMovie);
    if (error) return alert(error);

    axios.post("http://localhost:3000/movies", newMovie)
            .then(res => {
                console.log('Pelicula creada correctamente.', res.data);
            })
            .catch(error => {
                console.log(error);
            });
}

function cleanInputs() {
    document.getElementById("movies-form").reset();
}

const btnSubmit = document.getElementById("submit_button");
btnSubmit.addEventListener('click', createMovie);
const btnClean = document.getElementById("clean_button");
btnClean.addEventListener('click', cleanInputs);
});