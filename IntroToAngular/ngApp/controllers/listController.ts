namespace IntroToAngular.Controllers {
    
    export let contacts = [
        { firstName: 'Sarah', lastName: 'Kim', phoneNumber: '111 - 111 - 1111' },
        { firstName: 'Grace', lastName: 'Fields', phoneNumber: '222 - 222 - 2222' },
        { firstName: 'Jane', lastName: 'Doe', phoneNumber: '333 - 333 - 3333' },
        { firstName: 'Katie', lastName: 'Holmes', phoneNumber: '444 - 444 - 4444' }
    ];

    export class ListControllers {

        get contacts() {
            return IntroToAngular.Controllers.contacts;
        }
    }
}