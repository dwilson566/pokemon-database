var mongoose = require('mongoose');


var resistanceTable = new mongoose.Schema({
    name:String,
    immunes:String,
    weaknesses:String,
    strengths:String
})
mongoose.model('resistanceTable',resistanceTable,'resistanceTable' )
