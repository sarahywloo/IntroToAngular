namespace IntroToAngular.Controllers {

    export class HomeController {

        public value1;

        public value2;

        public result;

        public add(value: number) {
            this.result = this.value1 + this.value2;
            return this.result;
        }

        public minus(value: number) {
            this.result = this.value1 - this.value2;
            return this.result;
        }

        public multiply(value: number) {
            this.result = this.value1 * this.value2;
            return this.result;
        }

        public divide(value: number) {
            this.result = this.value1 / this.value2;
            return this.result;
        }
        //Or we can create a switch case here for +-*/

    }
    //use export above in place of this
//    //Get module that we defined in app.ts and register it with angular
//    angular.module('IntroToAngular')
//    //Set the home controller, name and definition
//        .controller('HomeController', HomeController);
}
