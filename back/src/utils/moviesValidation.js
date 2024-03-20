function validateData(req, res, next) {
    const { title, year, director, duration, genre, poster } = req.body;
    if (!title || !year || !director || !duration || !genre || !poster) {
        return res.status(400).json({ message: 'Por favor complete todos los campos' });
    }
    next();
}
