import {Collection} from "./models/Collection";
import {User, UsersProps} from "./models/User";


const collection  = User.buildUserCollection();

collection.on('change', () => {
    console.log(collection);
})

collection.fetch();

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
