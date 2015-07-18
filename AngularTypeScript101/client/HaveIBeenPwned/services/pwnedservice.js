/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
var HaveIBeenPwned;
(function (HaveIBeenPwned) {
    var PwnedService = (function () {
        function PwnedService($http) {
            this.$http = $http;
        }
        PwnedService.prototype.check = function (address) {
            return this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address);
        };
        PwnedService.$inject = ["$http"];
        return PwnedService;
    })();
    angular
        .module("HaveIBeenPwned")
        .service("PwnedService", PwnedService);
})(HaveIBeenPwned || (HaveIBeenPwned = {}));
