const app = require ("./src/server");

const PORT = 3000;

app.listen(PORT, ()=>
    console.log("servidor escuchando en el puerto ${PORT}"))