import {User} from "../models/User";
import {View} from "./View";

export class UserForm extends View {


    eventMap(): {[key: string]: () => void} {
        return {
             // 'click:button': this.onButtonClick,
             // 'mouseenter:h1': this.onHeaderHover,
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,

        }
    }

    onSetNameClick = () : void => {
        const input  = this.parent.querySelector('input');

        if(input) {
            const name = input.value;

            this.model.set({name});
        }


}

    onSetAgeClick = () : void => {
        this.model.setRansomAge()
    }
    // onHeaderHover(): void {
    //     console.log('Hi was Hovered over');
    // }
    // onButtonClick() : void {
    //     console.log('Hi There');
    // }

    template(): string {
        return `
        <div>
        <h1>User Form</h1>
        <div> User Name: ${this.model.get('name')}</div>
        <div> User age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Click Me</button>
        <button class="set-age">Set Random Age</button>
        </div>
        `;
    }


}