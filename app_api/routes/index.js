
var express = require('express');
var router = express.Router();
var ctrlPokemonData = require('../controllers/pokemon');
var ctrlresistanceTable = require('../controllers/resistance');



/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
 // Pokemon Data Router

//need to get correct routes


router.get('/PokemonData/', ctrlPokemonData.pokemonDataReadAll);

router.get('/PokemonData/:name', ctrlPokemonData.pokemonDataReadOne);

router.get('/resistanceTable/', ctrlresistanceTable.resistanceDataReadAll);


module.exports = router;