/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
module HaveIBeenPwned{
	
	export interface IPwnedService {
		check(address:string) : ng.IPromise<ng.IHttpPromiseCallbackArg<BreachedAccount[]>>;
	}
	
	class PwnedService implements IPwnedService {
		
		static $inject = ["$http"];
		constructor(private $http : ng.IHttpService) {
			
		}
		
		check(address:string) : ng.IPromise<ng.IHttpPromiseCallbackArg<BreachedAccount[]>> {
			return this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address);
		}		
	}
	
    angular
	    .module("HaveIBeenPwned")
    	.service("PwnedService", PwnedService);
}