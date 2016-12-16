(function () {

  angular
    .module('pokemonapp')
    .directive('pokemonNames', pokemonNames);

  function pokemonNames () {
    return {
      restrict: 'EA',
      templateUrl: '/Common/directives/Names/pokemonNames.template.html'
    };
  }
})();
/*

angular.module('pokemonNames', [])
.controller('Controller', ['$scope', function($scope) {

}])
.directive('pokemonNames', function() {
  return {
    template: '/common/directives/Names/pokemonNames.template.html'
  };
});
*/