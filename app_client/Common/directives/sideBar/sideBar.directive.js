(function () {

  angular
    .module('pokemonapp')
    .directive('sidebar', sideBar);

  function sideBar () {
    return {
      restrict: 'EA',
      templateUrl: '/Common/directives/sideBar/sideBar.template.html'
    };
  }
})();