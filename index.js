const express = require("express");
require("dotenv/config");
const cors = require("cors");
require("./db");

const pokemonRouter = require("./route/pokemon");
const resultRouter = require("./route/result");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
//routes
app.use("/pokemon", pokemonRouter);
app.use("/game", resultRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} http://localhost:${PORT}`);
});
