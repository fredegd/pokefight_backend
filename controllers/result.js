const jsonData = require("../pokemon.json");
const Result = require("../models/result");

const sendGameResult = async (req, res) => {
  try {
    const {
      body: { player1, player2, pokemon1, pokemon2, turns, winner },
    } = req;

    const result = await Result.create({
      player1,
      player2,
      pokemon1,
      pokemon2,
      turns,
      winner,
    });
    res.status(201).json(result)
  } catch (err){
    console.log(error);
    res.status(500).send(error.message)
  }
};

module.exports =  sendGameResult;
