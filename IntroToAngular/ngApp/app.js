var IntroToAngular;
(function (IntroToAngular) {
    //app dependencies in the array are separated by commas
    angular.module('IntroToAngular', ['ngRoute'])
        .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            //Home page
            template: 'Today, we will work on AngularJS!'
        })
            .when('/calculator', {
            templateUrl: '/ngApp/views/calculator.html',
            controller: IntroToAngular.Controllers.HomeController,
            controllerAs: 'home'
        })
            .when('/contactList', {
            templateUrl: '/ngApp/views/contactList.html',
            controller: IntroToAngular.Controllers.ListControllers,
            controllerAs: 'contactList'
        })
            .when('/details/:firstName', {
            templateUrl: '/ngApp/views/contactDetails.html',
            controller: IntroToAngular.Controllers.DetailsController,
            controllerAs: 'details'
        });
    });
})(IntroToAngular || (IntroToAngular = {}));
