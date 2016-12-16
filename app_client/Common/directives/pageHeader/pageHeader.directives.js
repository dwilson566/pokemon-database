(function () {

  angular
    .module('pokemonapp')
    .directive('pageHeader', pageHeader);

  function pageHeader () {
    return {
      restrict: 'EA',
      scope: {
        content : '=content'
      },
      templateUrl: '/Common/directives/pageHeader/pageHeader.template.html'
    };
  }

})();