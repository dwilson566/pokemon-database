angular
    .module('pokemonapp')
    .controller('resistanceCtrl', resistanceCtrl);
    
function resistanceCtrl($http) {
    var vm = this;
    var resistanceTableData;
    vm.Types = [];
    vm.Immunes = [];
    
     $http.get('/api/resistanceTable').then(function(response){ 
        
       resistanceTableData = response.data;
       vm.tableData = resistanceTableData;
       
       for(var i = 0; i<resistanceTableData.length; i++){
                vm.Types.push(resistanceTableData[i].name);
       }

    });
    
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

