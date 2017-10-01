SERVER_IP = 'localhost';
SERVER_PORT = 3000;
SERVER_ADDRESS = 'http://' + SERVER_IP + ':' + SERVER_PORT;

angular.module('PatentApp.factories.WalletFactory', [])
    .factory('WalletFactory',["$http", function ($http) {
        return {
            getWalletInfo : function(walletAddress){
                return $http.get(SERVER_ADDRESS + "/api/wallet", {params: {wallet: walletAddress}});
            }
        }
}]);