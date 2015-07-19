/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
var HaveIBeenPwned;
(function (HaveIBeenPwned) {
    "use strict";
    function asHtml($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }
    HaveIBeenPwned.asHtml = asHtml;
    angular
        .module("HaveIBeenPwned")
        .filter("asHtml", asHtml);
    asHtml.$inject = ["$sce"];
})(HaveIBeenPwned || (HaveIBeenPwned = {}));
