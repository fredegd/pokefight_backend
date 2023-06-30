const express = require("express")
const {sendGameResult, getGameResults} = require("../controllers/result")

const resultRouter = express()

resultRouter.post("/game/save", sendGameResult);
resultRouter.get("/game/leaderboard", getGameResults);

module.exports = resultRouter