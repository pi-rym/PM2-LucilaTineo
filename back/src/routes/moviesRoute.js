const {getMovies, postMovie} = require ("../controllers/moviesController")
const express = require('express');
const moviesRoute = express.Router()

moviesRoute.get('/', getMovies)
moviesRoute.post("/", postMovie)

module.exports = moviesRoute
