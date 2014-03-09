var asterGUIControllers = angular.module('asterGUIControllers', []);
asterGUIControllers.controller("mainController", ["$scope", function ($scope) {
    $scope.asteriskInfo = {
        serverAddress: "",
        amiUsername: "",
        amiPassword: "",
        port: ""
    };
    $scope.actions = {
        login: 'Login',
        ping:'Ping'
    };
    $scope.getHttpAmiAddress = function (serverAddress, port, action, params) {
        var address = 'http://' + serverAddress + ':' + port + '/rawman?action=' + action;
        for (var key in params) {
            if (params.hasOwnProperty(key) && typeof params[key] !== 'function') {
                address += "&" + key + "=" + params[key];
            }
        }
        return address;
    }
}]);
