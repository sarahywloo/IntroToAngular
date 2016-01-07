var IntroToAngular;
(function (IntroToAngular) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
            }
            HomeController.prototype.add = function (value) {
                this.result = this.value1 + this.value2;
                return this.result;
            };
            HomeController.prototype.minus = function (value) {
                this.result = this.value1 - this.value2;
                return this.result;
            };
            HomeController.prototype.multiply = function (value) {
                this.result = this.value1 * this.value2;
                return this.result;
            };
            HomeController.prototype.divide = function (value) {
                this.result = this.value1 / this.value2;
                return this.result;
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
    })(Controllers = IntroToAngular.Controllers || (IntroToAngular.Controllers = {}));
})(IntroToAngular || (IntroToAngular = {}));
