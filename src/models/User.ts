interface UsersProps {
    name: string,
    age: number
}

export class User {

    constructor(private data: UsersProps ) {
    }

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(update: UsersProps ) : void {
    Object.assign(this.data, update);
    }
}
