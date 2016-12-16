(function () {

  angular
    .module('pokemonapp')
    .directive('abilites', abilites);

  function abilites () {
    return {
      restrict: 'EA',
      templateUrl: '/Common/directives/abilities/abilities.template.html'
    };
  }
})();