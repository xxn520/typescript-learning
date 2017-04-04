class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    fullName: string;
}

function greeter(person: Person) {
    return 'Hello ' + person.fullName;
}

// var user = 'm2mbob';
// var user = [0, 1, 2];
// var user = { firstName: 'fu', lastName: 'xiao' };
var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);