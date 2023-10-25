import {User} from './models/User';

const user  = new User({name: 'Eldad', age: 24});

class Person {
    constructor(public firstName: string, public lastName: string) {
    }
        fullName(): string {
            return `${this.firstName} ${this.lastName}`
    }
}

const person = new Person('firstname','lastName' )
console.log(person.fullName());

const on = user.on;

on('change', () => {

})

console.log(user.get('name'));