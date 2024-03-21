const moviesService = require ("../services/movieservice");

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        error: "Error interno del servidor", 
        error: error.message
      });
    }
  },

      postMovie: async (req, res) => {
          try {
              console.log("Datos recibidos en el controlador postMovie:", req.body);
  
              const { title, year, director, duration, genre, rate, poster } = req.body;
  
              const savedMovie = await moviesService.postMovie({
                  title,
                  year,
                  director,
                  duration,
                  genre,
                  rate,
                  poster,
              });
  
              console.log("Película guardada correctamente:", savedMovie);
  
              res.status(201).json(savedMovie);
          } catch (error) {
              console.error("Error en el controlador postMovie:", error);
              res.status(500).json({ error: "Error interno del servidor" });
          }
      },
  };
  
