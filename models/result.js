const mongoose = require("mongoose")
//which Pokemon won against who, 
//in how many turns and 
//any other info you feel necessary
const resultSchema = new mongoose.Schema({
player1: { type: String, required:true, },
player2: { type: String, required:true, },
pokemon1:{ type: String, required:true, },
pokemon2:{ type: String, required:true,},
turns:   { type: Number, required:true, },
winner:  { type: String, required:true,}
})

const Result = mongoose.model('result',resultSchema)
module.exports = Result