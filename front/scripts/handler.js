const axios = require('axios');

const renderFilms = require ('./renderFilms')

const getPeliculas = async () => {
    try{
    const {data} = await axios.get('https://localhost:3000/movies')
    console.log(data);
    data.forEach(renderFilms)


    } catch(error) { console.log(error.message)
}
}

      module.export = getPeliculas