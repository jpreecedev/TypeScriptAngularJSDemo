/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
var HaveIBeenPwned;
(function (HaveIBeenPwned) {
    "use strict";
    var EnterKeyPressDirective = (function () {
        function EnterKeyPressDirective() {
            this.require = "?ngModel";
            this.restrict = "A";
        }
        EnterKeyPressDirective.instance = function () {
            return new EnterKeyPressDirective();
        };
        EnterKeyPressDirective.prototype.link = function ($scope, elm, attr, ngModel) {
            var element = angular.element(elm);
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    $scope.$apply(function () {
                        $scope.$eval(attr.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
        return EnterKeyPressDirective;
    })();
    angular
        .module("HaveIBeenPwned")
        .directive("ngEnter", EnterKeyPressDirective.instance);
})(HaveIBeenPwned || (HaveIBeenPwned = {}));
