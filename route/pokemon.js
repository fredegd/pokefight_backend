const express = require("express");
const{getPokemons, getPokemon, getPokemonInfo} = require("../controllers/pokemon")
pokemonRouter = express();


pokemonRouter.get("/:id/:info", getPokemonInfo);
pokemonRouter.get("/:id", getPokemon);
pokemonRouter.get("/", getPokemons);



module.exports = pokemonRouter;
