const {Movie} = require("../types/class")
const Movies = require("../models/movie")

module.exports = {
getMovies: async() => {
    try{
    const movies = await Movie.find();
    const moviesCollection = movies.map((movie) => {
      if(movieValidation(movie)) {
        return new Movie (movie);
      }
    });
    return moviesCollection;
  } catch(error) {
    throw Error(error.message);
  }
  },
};


async function createMovie(title, year, director, duration, genre, poster) {
    try {
        const newMovie = new Movie({
            title,
            year,
            director,
            duration,
            genre,
            poster
        });
        await newMovie.save();
        return newMovie;
    } catch (error) {
        throw new Error('Error al crear película');
    }
}

module.exports = {
    getMovies, createMovie
};


