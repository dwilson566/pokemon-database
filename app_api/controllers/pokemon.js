var mongoose = require('mongoose');

var PokemonData = mongoose.model('PokemonData');



//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}


/* Get all Pokemon Data 

module.exports.pokemonDataReadAll = function(req,res)
{
    console.log("Find all Pokemon Data Records",req);
    
    PokemonData
        .find({})
        .exec(function(err,PokemonData){
            if(err){
                console.log(err);
                sendJSONresponse(res,404,err);
            }
            console.log(PokemonData);
            sendJSONresponse(res,200, PokemonData);
        });
} */

var sendJSONres = function(res, content) {
  res.json(content);
};



module.exports.pokemonDataReadAll = function(req, res) {
  console.log('Finding data');
    PokemonData
      .find()
      .exec(function(err, _x) {
        sendJSONres(res, _x);
      });
};

/* Get Pokemon Data by Name*/

module.exports.pokemonDataReadOne = function(req,res){
    console.log('Finding Pokemon Data Records', req.params);
    if(req.params && req.params.name){
        PokemonData
            .find({
                name: req.params.name
            })
            .exec(function(err,PokemonData){
                if(!PokemonData){
                    sendJSONresponse(res,404, {
                        "message": "Name not found"
                    });
                    return;
                }
                else if(err){
                    console.log(err);
                    sendJSONresponse(res,404,err);
                    return;
                }
                console.log(PokemonData);
                sendJSONresponse(res,200,PokemonData);
            });
    }
    else{
        console.log('No Name specified');
        sendJSONresponse(res,404, {
            "message": "No name in request"
        });
    }
};

