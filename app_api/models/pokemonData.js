var mongoose = require('mongoose');

//insert schemas here

var pokemonTable = new mongoose.Schema({
    name: String,
    type: String,
    height: Number,
    weight: Number
   
});

mongoose.model('PokemonData', pokemonTable,'pokemonTable');


//restancesSchema