var IntroToAngular;
(function (IntroToAngular) {
    var Controllers;
    (function (Controllers) {
        var DetailsController = (function () {
            function DetailsController($routeParams) {
                this.contact = IntroToAngular.Controllers.contacts.filter(function (ele) {
                    return ele.firstName == $routeParams['firstName'];
                })[0];
            }
            return DetailsController;
        })();
        Controllers.DetailsController = DetailsController;
    })(Controllers = IntroToAngular.Controllers || (IntroToAngular.Controllers = {}));
})(IntroToAngular || (IntroToAngular = {}));
