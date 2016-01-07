var IntroToAngular;
(function (IntroToAngular) {
    var Controllers;
    (function (Controllers) {
        Controllers.contacts = [
            { firstName: 'Sarah', lastName: 'Kim', phoneNumber: '111 - 111 - 1111' },
            { firstName: 'Grace', lastName: 'Fields', phoneNumber: '222 - 222 - 2222' },
            { firstName: 'Jane', lastName: 'Doe', phoneNumber: '333 - 333 - 3333' },
            { firstName: 'Katie', lastName: 'Holmes', phoneNumber: '444 - 444 - 4444' }
        ];
        var ListControllers = (function () {
            function ListControllers() {
            }
            Object.defineProperty(ListControllers.prototype, "contacts", {
                get: function () {
                    return IntroToAngular.Controllers.contacts;
                },
                enumerable: true,
                configurable: true
            });
            return ListControllers;
        })();
        Controllers.ListControllers = ListControllers;
    })(Controllers = IntroToAngular.Controllers || (IntroToAngular.Controllers = {}));
})(IntroToAngular || (IntroToAngular = {}));
