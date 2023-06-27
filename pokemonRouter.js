const express = require("express");

let jsonData = require("./pokemon.json");

pokemonRouter = express();

//console.log(jsonData)

const getPokemonS = (req, res) => {
  res.send(jsonData);
};

const getPokemon = (req, res) => {
  const { id } = req.params;
  res.send(jsonData[id - 1]);
};


const getPokemonInfo = (req, res) => {
    const { id, info } = req.params;
    const pokemon = jsonData[id - 1];
    console.log(pokemon)
    if (info === "name") {
        console.log(pokemon.name)
      res.send(pokemon.name);
    } else  if (info === "base") {
        console.log(pokemon.base)
      res.send(pokemon.base);
    } else if (info === "type") {
        console.log(pokemon.type)
      res.send(pokemon.type);
    } else {
      // Handle other info values here, if needed
      res.status(404).send("Invalid info parameter");
    }
  };

pokemonRouter.get("/", getPokemonS);

pokemonRouter.get("/:id", getPokemon);

pokemonRouter.get("/:id/:info", getPokemonInfo);

module.exports = pokemonRouter;
