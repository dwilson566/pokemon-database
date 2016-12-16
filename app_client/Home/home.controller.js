angular
    .module('pokemonapp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl($http) {
    var vm = this;


    $http.get('/api/PokemonData').then(function(response){ 
       vm.output = response.data;

    });
   
    vm.content = "INTRODUCTION";
}


/*
(function() {

  angular
    .module('pokemonapp')
    .controller('homeCtrl', homeCtrl);

  //homeCtrl.$inject = ['$scope', `SelectedData`];

  function homeCtrl($scope, SelectedData) {
 
    var vm = this;
    console.log(window.location);
    
    vm.content = "Pokemon Data";
    
    vm.selectedName = "";
    vm.selectedType = "";
    vm.selectedWeight = "";
    vm.selectedHeight = "";
    
    //check selected Departure
    if(SelectedData.selectedDepartureICAO !== null){
      vm.selectedDepartureICAO = SelectedData.selectedDepartureICAO;
    }
    
    //check selected Arrival
    if(SelectedData.selectedArrivalICAO !== null){
      vm.selectedArrivalICAO = SelectedData.selectedArrivalICAO;
    }
    
    //check selected weight
    if(SelectedData.selectedWeight !== null){
      vm.selectedWeight = SelectedData.selectedWeight;
    }      
  }

})();
*/