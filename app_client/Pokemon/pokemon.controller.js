// this page is super incomplete 

angular
    .module('pokemonapp')
    .controller('pokemonCtrl', pokemonCtrl);
    
function pokemonCtrl($http) {
    var vm = this;
    var pokemonTableData;
    vm.pokemonNames = [];
    


    $http.get('/api/PokemonData').then(function(response){ 
        
       pokemonTableData = response.data;
       
       for(var i = 0; i<pokemonTableData.length; i++){
                vm.pokemonNames.push(pokemonTableData[i].name);
       }

    });
    
    $http.get('/api/PokemonData').then(function(response){ 
        
       pokemonTableData = response.data;
       vm.pokemonType = [];
       
       for(var i = 0; i<pokemonTableData.length; i++){
                vm.pokemonType.push(pokemonTableData[i].type);
       }

    });
        $http.get('/api/PokemonData').then(function(response){ 
        
       pokemonTableData = response.data;
       vm.pokemonHeight = [];
       
       for(var i = 0; i<pokemonTableData.length; i++){
                vm.pokemonHeight.push(pokemonTableData[i].height);
       }

    });
        $http.get('/api/PokemonData').then(function(response){ 
        
       pokemonTableData = response.data;
       vm.pokemonWeight = [];
       
       for(var i = 0; i<pokemonTableData.length; i++){
                vm.pokemonWeight.push(pokemonTableData[i].weight);
       }

    });
 
   vm.content = "Pokemon Data";
   
    vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    
    
    
   

        
}




/*
(function() {
    
    angular
        .module('pokemonapp') //what do i put here------------------
        .controller('pokemonCtrl', pokemonCtrl);
        
    pokemonCtrl.$inject = ['$scope', 'PokemonData', 'SelectedData']; /* where is selected data defined
    
    function pokemonCtrl($scope,PokemonData,SelectedData){
        console.log(window.location)//what do i put here instead of location
        
        var vm = this;
       // vm.content = "Pokemon data";
        vm.selectedName = "";
        vm.selectedType = "";
        vm.selectedWeight = "";
        vm.selectedHeight = "";
        
        //check selected Name
        if(SelectedData.selectedName != null){
            vm.selectedName = SelectedData.selectedName;
        }
           //check selected Type
        if(SelectedData.selectedType != null){
            vm.selectedType = SelectedData.selectedType;
        }
        //check selected height
        if(SelectedData.selectedHeight != null){
            vm.selectedHeight = SelectedData.selectedHeight;
        }
        //check selected weight
        if(SelectedData.selectedWeight != null){
            vm.selectedWeight = SelectedData.selectedWeight;
        }
    
    
    vm.getData                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        = function(){
        var name = vm.selectedName //need help here
        console.log(name);
    }
    
    
     vm.getNameData = function() {
      PokemonData.getNames()
        .success(function(data) {
          vm.selectedName = data;
          console.log(vm.selectedName);
        })
        .error(function(e) {
          console.log(e);
        });
    }
    
    
    // this stuff should be good vvvvvvvvvv
    
     vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    
    vm.clearSelectedData = function(){
      
      vm.selectedName = null;
      vm.selectedType = null;
      vm.selectedWeight = null;
    }
    
    
    //call services
        vm.getPokemonData();
    
    } 
})();

*/