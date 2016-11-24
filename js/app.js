'use strict()';
angular.module("cvGenerator", ['cvLocaleSrc'])
    .controller("mainCtrl", ($scope, $http, cvLocaleSrcService) => {
        $scope.src = {};
        $scope.locales = cvLocaleSrcService.getLocales();

        $scope.setLocale = (locale) => {
            $scope.activeLocale = locale;
            $http.get(locale.src).success((data) => {
                if (data) {
                    $scope.src = data;
                } else {
                    $scope.src = {};
                }
            });
        };

        $scope.setLocale($scope.locales[0]);

    });
