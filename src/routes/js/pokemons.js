const axios = require('axios')

const getPokemons = async (req,res)=>{
  const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=12";
  await axios.get(apiURL).then(data=>{
    const d = data.data;
    res.json(d)
  })
}

const pokemons = (req, res) => {
  try {
    getPokemons(req,res)
  } catch (error) {
    throw new Error(error)
  }
};

exports.pokemons = pokemons;
