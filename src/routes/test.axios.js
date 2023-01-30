const axios = require('axios')
const getPokemons = async ()=>{
    const apiURL = "https://pokeapi.co/api/v2/pokemon";
    await axios.get(apiURL).then(data=>{
        console.log(data)
    })
}
getPokemons()