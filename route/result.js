const express = require("express")
const sendGameResult = require("../controllers/result")

const resultRouter = express()

resultRouter.post("/game/save", sendGameResult);

module.exports = resultRouter