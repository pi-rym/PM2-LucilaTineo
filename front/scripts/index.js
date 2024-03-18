const main = async () => {
    console.log("esta saliendo todo bien");
    try{
    const response = await axios.get("http://localhost:3000/movies");
    renderCards(response.data);
    } catch (error) {
        console.error("hubo un error al obtener las peliculas:", error);
    }

}

main();