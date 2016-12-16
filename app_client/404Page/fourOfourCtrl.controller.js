angular
    .module('pokemonapp')
    .controller('fourOfourCtrl', fourOfourCtrl);

function fourOfourCtrl() {
    var vm = this;

    vm.pageHeader = {
        title: '404',
        strapline: 'ERROR'
    };
    vm.sidebar = {
        content: "Page not found"
    };
}
