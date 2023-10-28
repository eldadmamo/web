import {Collection} from "./models/Collection";
import {User, UsersProps} from "./models/User";
import {UserForm} from "./views/UserForm";



const user = User.buildUser({name: 'NAME', age: 20})

const root = document.getElementById('root')

if(root) {
    const userform = new UserForm(root, user);

    userform.render();
} else {
    throw new Error ('Root element not found');
}



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
