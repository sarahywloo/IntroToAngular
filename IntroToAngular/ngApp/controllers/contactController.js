var IntroToAngular;
(function (IntroToAngular) {
    var Controllers;
    (function (Controllers) {
        var contactController = (function () {
            function contactController() {
                this.contacts = [
                    { firstName: 'Sarah', lastName: 'Kim', phoneNumber: 111 - 111 - 1111, email: 'sarahkim@yahoo.com' },
                    { firstName: 'Sarah', lastName: 'Kim', phoneNumber: 111 - 111 - 1111, email: 'sarahkim@yahoo.com' },
                    { firstName: 'Sarah', lastName: 'Kim', phoneNumber: 111 - 111 - 1111, email: 'sarahkim@yahoo.com' }];
            }
            contactController.prototype.addContact = function () {
            };
            return contactController;
        })();
        Controllers.contactController = contactController;
    })(Controllers = IntroToAngular.Controllers || (IntroToAngular.Controllers = {}));
})(IntroToAngular || (IntroToAngular = {}));
