angular.module('PatentApp.views.header',['ngRoute'])
    .controller("HeaderController", ['$scope','$location',
        function($scope, $location) {
            $scope.onNavClick = function(name) {
                if(name === 'Wallet')
                    $location.path('/wallet');
                else if(name === 'Store')
                    $location.path('/store');
                else if(name === 'Bid')
                    $location.path('/bid');
                else if(name === 'Patent')
                    $location.path('/patent');
            }
}]);