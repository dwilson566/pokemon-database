
(function () {

  angular.module('pokemonapp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("TEST");
    
    $routeProvider
    
      .when('/', {
        templateUrl: '/Home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/Pokemon/', {
        templateUrl: '/Pokemon/pokemon.view.html',
        controller: 'pokemonCtrl',
        controllerAs: 'vm'
      })
      .when('/Abilities/', {
        templateUrl: '/Abilities/abilities.view.html',
        controller: 'ablitiesCtrl',
        controllerAs: 'vm'
      })
      .when('/fourOfour/', {
        templateUrl: '/404Page/fourOfour.view.html',
        controller: 'fourOfourCtrl',
        controllerAs: 'vm'
      })
      .when('/Resistances/', {
        templateUrl: '/Resistances/resistances.view.html',
        controller: 'resistanceCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/fourOfour/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('pokemonapp')
    .config(['$routeProvider', '$locationProvider', config]);

})();