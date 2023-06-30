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
    console.log(err);
    res.status(500).send(err.message)
  }
};


const getGameResults = async(req,res)=>{
  try{
    const results = await Result.find({});
    console.log(Result)
    res.json(results);
  }
  catch(err){
    res.status(500).send(err.message)
  }
}

module.exports =  {sendGameResult,getGameResults};
