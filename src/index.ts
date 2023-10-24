import {User} from "./models/User";

const user = new User({name: 'eldad', age: 25})

user.set({name: 'new NAME', age: 9999})

console.log(user.get('name'));
console.log(user.get('age'));