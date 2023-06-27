const express = require("express")
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 3000;
const pokemonRouter = require("./pokemonRouter")


// app.use(cors());

app.use(express.json());

app.use("/pokemon", pokemonRouter )

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} http://localhost:${PORT}`);
  });
  