function cleanForm(){
    document.getElementById("movieForm").reset();
}

document.getElementById("movieForm").addEventListener("submit", submitForm)

function submitForm(event) {
    event.preventDefault();

    var title = document.getElementById("title").value;
    var year = document.getElementById("year").value;
    var director = document.getElementById("director").value;
    var duration = document.getElementById("duration").value;
    var genre = document.getElementById("genre").value;
    var poster = document.getElementById("image").value;
 
    if(!title|| !year|| !director|| !duration|| !genre|| !poster){
        mostrarPelicula(title, year, director, duration, genre, poster)
        console.log("Formulario enviado exitosamente");
        cleanForm();
    } else {
        alert("Por favor complete todos los campos");
        }
    }

    function mostrarPelicula(title, year, director, duration, genre, poster) {
        const movieList = document.getElementById("movieList");
        const listItem = document.createElement("li");
        listItem.textContent = `Titulo: ${title}, Año: ${year}, Director: ${director}, Duracion: ${duration}, Género: ${genre}, Poster: ${poster}`,
        movieList.appendChild(listItem);
    }
