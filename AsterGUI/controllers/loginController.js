asterGUIControllers.controller("loginController", ["$scope", "$http", function ($scope, $http) {
    $scope.login = function () {
        var url = $scope.getHttpAmiAddress($scope.asteriskInfo.serverAddress,
            $scope.asteriskInfo.port,
            $scope.actions.login, {
                username: $scope.asteriskInfo.amiUsername,
                secret: $scope.asteriskInfo.amiPassword
            });
        $.ajax({ url: url, async: false }, function () {
            {
                window.setInterval(function () {
                    var url = $scope.getHttpAmiAddress($scope.asteriskInfo.serverAddress,
                        $scope.asteriskInfo.port,
                        $scope.actions.ping);
                    $.ajax({ url: url, async: false });

                }, 5000);
            }
        });

    }
}]);