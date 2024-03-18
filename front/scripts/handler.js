const axios = require('axios');

const renderFilms = require ('./renderFilms')

const getPeliculas = () => {
    axios.get('https://localhost:3000/movies')
    .then(({data}) => data.forEach(getPeliculas))
    .catch((error) => console.log(error.response.data))
}

      module.export = getPeliculas