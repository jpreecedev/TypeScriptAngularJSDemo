/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />

module HaveIBeenPwned {
	export class BreachedAccount {
		Title: string;
		Name: string;
		Domain: string;
		BreachDate: string;
		AddedDate: string;
		PwnCount: number;
		Description: string;
		DataClasses: string[];
		IsVerified: boolean;
		LogoType: string;
	}
}