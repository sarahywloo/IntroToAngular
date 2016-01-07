namespace IntroToAngular.Controllers {

    export class DetailsController {

        public contact;

        constructor($routeParams) {
            this.contact = IntroToAngular.Controllers.contacts.filter((ele) => {
                return ele.firstName == $routeParams['firstName'];
            })[0];
        }
    }
}