namespace IntroToAngular {
    
    //app dependencies in the array are separated by commas
    angular.module('IntroToAngular', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                //Home page
                    template: 'Today, we will work on AngularJS!'
                })
                //the / is the root which is the homepage
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
                //route parameters are extracted from the URL
                .when('/details/:firstName', {
                    templateUrl: '/ngApp/views/contactDetails.html',
                    controller: IntroToAngular.Controllers.DetailsController,
                    controllerAs: 'details'
                })
        });
}