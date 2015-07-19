/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
var HaveIBeenPwned;
(function (HaveIBeenPwned) {
    "use strict";
    function routes($routeProvider) {
        $routeProvider
            .when("/search", {
            templateUrl: "/client/HaveIBeenPwned/views/_search.html",
            controller: "SearchController",
            controllerAs: "vm"
        })
            .otherwise({
            redirectTo: "/search"
        });
    }
    routes.$inject = ["$routeProvider"];
    angular
        .module("HaveIBeenPwned")
        .config(routes);
})(HaveIBeenPwned || (HaveIBeenPwned = {}));
