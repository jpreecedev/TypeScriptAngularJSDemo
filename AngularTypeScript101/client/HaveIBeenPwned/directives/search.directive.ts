/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />

module HaveIBeenPwned {
    "use strict";

    export interface IEnterKeyPressAttributes extends ng.IAttributes {
        ngEnter: string;
    }

    class EnterKeyPressDirective implements ng.IDirective {

        static instance(): ng.IDirective {
            return new EnterKeyPressDirective();
        }

        require = "?ngModel";
        restrict = "A";

        link($scope: ng.IScope, elm: Element, attr: IEnterKeyPressAttributes, ngModel: ng.INgModelController): void {

            var element = angular.element(elm);
            element.bind("keydown keypress", (event: JQueryEventObject) => {

                if (event.which === 13) {
                    $scope.$apply(() => {
                        $scope.$eval(attr.ngEnter);
                    });

                    event.preventDefault();
                }

            });
        }
    }

    angular
        .module("HaveIBeenPwned")
        .directive("ngEnter", EnterKeyPressDirective.instance);
}