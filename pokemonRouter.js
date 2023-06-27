const express = require("express")

let jsonData = require("./pokemon.json")


pokemonRouter = express();

//console.log(jsonData)

const getPokemonS = (req, res)=>{
    res.send(jsonData)
}





const getPokemon = (req, res)=>{
    const { id } = req.params;
    res.send(jsonData[id-1])
}



const getPokemonInfo = (req, res)=>{
    const { id } = req.params;

const info =req.params.info;    

 console.log(info)

 res.send(jsonData[id-1].info)
}


pokemonRouter.get("/", getPokemonS);

pokemonRouter.get("/:id", getPokemon);

pokemonRouter.get("/:id/:info", getPokemonInfo);

module.exports = pokemonRouter;