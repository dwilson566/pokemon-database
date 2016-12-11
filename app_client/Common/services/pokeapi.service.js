(function() {

    angular
        .module('pokemonapp')//need help here again
        .service('Pokeapi', pokeapi);

    pokeapi.$inject = ['$http', 'KeyStore'];
    
    function pokeapi($http,KeyStore){
        var getData = function(name,weight,type,height){
            
            KeyStore.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    //no key is needed 
                    //var pokekey = keys.Poke_key;
                    return $http.jsonp('http://pokeapi.co/api/v2' 
                    + '/' + name 
                    + ',' + weight 
                    + ',' + type
                    + ',' + weight
                    + "?callback=JSON_CALLBACK", {
                        jsonpCallbackParam: 'callback'
                    });
                })
                .error(function(e){
                    console.log(e);
                });
        };
        
        var getData2 = function(name,weight,type,height){
            return $http.jsonp('http://pokeapi.co/api/v2' 
                    + '/' + name 
                    + ',' + weight 
                    + ',' + type
                    + ',' + weight
                    + "?callback=JSON_CALLBACK", {
                        jsonpCallbackParam: 'callback'
                    });
        }
        
        return{
            getData:getData,
            getData2:getData2
        } ;
        
    }
    
})();