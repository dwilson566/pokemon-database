angular
    .module('pokemonapp')
    .controller('ablitiesCtrl', ablitiesCtrl);

function ablitiesCtrl($http) {
    var vm = this;
    
    
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
