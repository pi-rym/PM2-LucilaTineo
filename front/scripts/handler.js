const axios = require('axios');
const renderFilms = require ('./renderFilms')

const getPeliculas = async () => {
    console.log('Iniciando solicitud GET a /movies');
    try{
    const { data } = await axios.get('http://localhost:3000/movies')
    console.log('Solicitud GET a /movies exitosa');
    console.log(data);
    data.forEach(renderFilms)

    } catch(error) { 
        if (error.response) {
            console.error('Error al obtener respuesta:', error.response.status);
        } else {
            console.error('Error desconocido:', error.message);
    }
}
};

 module.exports = getPeliculas