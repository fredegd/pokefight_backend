const express = require("express");
const{getPokemons, getPokemon, getPokemonInfo} = require("../controllers/pokemon")
pokemonRouter = express();

//console.log(jsonData)



pokemonRouter.get("/", getPokemons);

pokemonRouter.get("/:id", getPokemon);

pokemonRouter.get("/:id/:info", getPokemonInfo);

module.exports = pokemonRouter;
