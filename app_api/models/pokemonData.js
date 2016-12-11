var mongoose = require('mongoose');

//insert schemas here

var PokemonSchema = new mongoose.Schema({
    name: String,
    type: String,
    weight: Number,
    height: Number
    
});

mongoose.model('PokemonData', PokemonSchema,'PokemonData');

//var AbilitiesSchema