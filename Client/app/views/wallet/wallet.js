angular.module('PatentApp.views.wallet',['ngRoute', 'PatentApp.factories.WalletFactory'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wallet', {
            templateUrl: 'views/wallet/wallet.html',
            controller: 'WalletController'
        })
    }])
    .controller("WalletController", ['$scope', 'WalletFactory',
        function($scope, WalletFactory) {
            $scope.walletAddress = "";

            $scope.getWallet = function(){
                WalletFactory.getWalletInfo($scope.walletAddress).then(function(walletInfo){

                },function(){

                });
            };
    }]);