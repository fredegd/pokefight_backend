const express = require("express");
const { sendGameResult, getGameResults } = require("../controllers/result");

const resultRouter = express();

resultRouter.post("/save", sendGameResult);

resultRouter.get("/leaderboard", getGameResults);

module.exports = resultRouter;
