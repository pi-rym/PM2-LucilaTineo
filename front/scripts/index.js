tempData.map((item)=>{
    const html = `
        <div class = "pelicula-card">
            <img src="${item.poster}" class ="pelicula-imagen" alt= "${item.title}"></img>
                <div class= "pelicula-info">
                    <h2 class= "pelicula-titulo">${item.title}</h2>
                    <p class= "pelicula-genero">${item.genre.join(", ")}</p>
                    <p class = "pelicula-director">Director: ${item.director}</p>
                </div>
        </div>
    `;
document.getElementById("contenedor-peliculas").innerHTML+=html
});
console.log(tempData);

