(function(){
    
    angular
        .module('pokemonapp')// need help here again
        .service('PokemonData',PokemonData);
        
    PokemonData.$inject = ['$http'];
    
    function PokemonData($http){
        var getPokemonData = function(){
            return $http.get('/api/PokemonData');
        }
        var getPokemonDataForName = function(name){
            return $http.get('/api/PokemonData/'+ name);
        }
        var getPokemonDataForWeight = function(weight){
            return $http.get('/api/PokemonData/'+ weight);
        }
        
        return{
            getPokemonData: getPokemonData,
            getPokemonDataForName:getPokemonDataForName,
            getPokemonDataForWeight:getPokemonDataForWeight
        };
    }
})();