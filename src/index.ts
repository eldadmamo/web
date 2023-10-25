import {User} from './models/User';

const user  = User.buildUser({id: 1});

user.on('save', () => {
    console.log(user);
})

user.fetch();


// class Person {
//     constructor(public firstName: string, public lastName: string) {
//     }
//         fullName(): string {
//             return `${this.firstName} ${this.lastName}`
//     }
// }
//
// const person = new Person('firstname','lastName' )
// console.log(person.fullName());
//
// const on = user.on;
//
// on('change', () => {
//
// })
//
// console.log(user.get('name'));


// user.trigger('change');
//
// user.set({name: 'Eldad Update'})

// const colors = {
//     color: 'red',
//     printColor() {
//         console.log(this.color);
//     }
// }
//
// const printColor = colors.printColor();
//
// printColor();
