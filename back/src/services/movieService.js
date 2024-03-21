//const {Movie} = require("../types/class")
const Movie = require("../models/movie");

module.exports = {
    getMovies: async () => {
        const movies = await Movie.find();
        return movies;
    },

    postMovie: async (movie) => {
        const newMovie = new Movie(movie);
        const savedMovie = await newMovie.save();
        return savedMovie;
    }
};

