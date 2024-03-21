const mongoose = require('mongoose')
const { Schema, model} = mongoose

const movieSchema = new Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    poster: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie