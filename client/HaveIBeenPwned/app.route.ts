/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

module HaveIBeenPwned {
    "use strict";

    function routes($routeProvider: ng.route.IRouteProvider){
              
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

    routes.$inject = ["$routeProvider"]

    angular
        .module("HaveIBeenPwned")
        .config(routes);
}