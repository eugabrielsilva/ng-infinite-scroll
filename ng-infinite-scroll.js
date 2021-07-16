var ngInfiniteScroll = angular.module('ngInfiniteScroll', []);

ngInfiniteScroll.directive('ngInfiniteScroll', function () {
    return function (scope, element, attrs) {
        element.on("scroll", function (event) {
            let raw = element[0] || element;
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngInfiniteScroll);
                });
                event.preventDefault();
            }
        });
    };
});