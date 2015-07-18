/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
module HaveIBeenPwned {

	class SearchController {

		private emailAddress : string;
		private breachedAccounts : BreachedAccount[];

		static $inject = ["PwnedService"];
		constructor(private pwnedService: IPwnedService) {
			this.emailAddress = "foo@bar.com";
		}

		submit(address: string) {
			this.pwnedService.check(address).then((result : ng.IHttpPromiseCallbackArg<BreachedAccount[]>) =>{
				this.breachedAccounts = result.data;
			}); 
		}

	}

    angular
		.module("HaveIBeenPwned")
		.controller("SearchController", SearchController);
}