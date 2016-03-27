angular.module('yApp')
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    })
    .directive('autoFocusWhen', ['$log', '$timeout', function ($log, $timeout) {
        return {
            restrict: 'A',
            scope: {
                autoFocusWhen: '='
            },
            link: function (scope, element) {
                scope.$watch('autoFocusWhen', function (newValue) {
                    if (newValue) {
                        $timeout(function () {
                            element[0].focus();
                        })
                    }
                });
            }
        }
    }]);
