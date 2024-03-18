const {Router} = require ("express")
const moviesController = require ("../controllers/moviesController")

const moviesRoute = Router ()

moviesRoute.get('/', moviesController.getAllMovies)

module.exports = moviesRoute