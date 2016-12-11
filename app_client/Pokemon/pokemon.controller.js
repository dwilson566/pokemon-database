// this page is super incomplete 

(funtion() {
    angular
        .module('pokemonapp') //what do i put here------------------
        .controller('pokemonCtrl', pokemonCtrl);
        
    pokemonCtrl.$inject = ['$scope', 'PokemonData', 'SelectedData']; /* where is selected data defined*/
    
    function pokemonCtrl($scope,PokemonData,SelectedData){
        console.log(window.location)//what do i put here instead of location
        
        var vm = this
        vm.content = "Pokemon data"
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
    }
    
    vm.getData                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        = function(){
        var name = vm.selectedName //need help here
        console.log(name);
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