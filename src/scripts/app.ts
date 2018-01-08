/*
import '../styles/base.scss';

import { Greeter } from './greeter';

//const greeter: Greeter = new Greeter('class1-assignment');

const prettySure: any = {title: 'Fetch Data', component: "Pag1" };


/*interface IStudent {
    firstName: string;
    score: number;
}#1#

/*class Student implements IStudent {
    fullname:string;
    firstName: "hello";
    score: 10;
    constructor(firstName: string, score: number) {
        this.fullname = firstName + " " + score;
    }
}

function greeter(person: Student) {
    return "Hello, " + person.fullname + " " + person.score;
}

const user: IStudent = new Student("Jane", 10);
//debugger;#1#



class SweetSweetBasil {
    constructor(name: string) {
        console.log("Hello " + name);
    }
    color() {
        console.log("Green");
    }
}

let world = new SweetSweetBasil("World");
let basil = new SweetSweetBasil("basil");
basil.color();
world.color();
*/





//document.getElementById("demo").innerHTML  = greeter(<Student>user);
import '../styles/base.scss';

import { Greeter } from './greeter';

const greeter: Greeter = new Greeter('class1-assignment');

const el = document.getElementById('greeting');
if (el) {
    el.innerHTML = greeter.greet();
}