(function() {

  angular
    .module('pokemonapp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedName : '',
          selectedType : '',
          selectedWeight : '',
          selectedHeight : ''
      };
  }

})();