(function () {

  angular
    .module('pokemonapp')
    .directive('navbar', navBar);

  function navBar () {
    return {
      restrict: 'EA',
      templateUrl: '/Common/directives/navBar/navBar.template.html'
    };
  }
})();