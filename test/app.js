var app = angular.module('app', ['ngInfiniteScroll']);

app.controller('controller', function ($scope) {
    $scope.items = [];

    pushItems();

    $scope.lazyLoad = function () {
        pushItems();
    }

    function pushItems() {
        for (let i = 0; i < 10; i++) {
            $scope.items.push('Scroll me!');
        }
    }
});