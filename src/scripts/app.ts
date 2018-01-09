import '../styles/base.scss';

import { Greeter } from './greeter';

const greeter: Greeter = new Greeter('class1-assignment');
const fullNameTextBox: HTMLElement = document.getElementById('fullName');
const scoreTextBox: HTMLElement = document.getElementById('score');
const addScoreButton: HTMLElement = document.getElementById('addScore');

addScoreButton.addEventListener('click', ()=> {
    console.log(fullNameTextBox.value);
});


const el = document.getElementById('greeting');
if (el) {
    el.innerHTML = greeter.greet();
}



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


/*interface Subject {
    registerObserver(o: Observer): any;
    removeObserver(o: Observer): any;
    notifyObservers(): any;
}

interface Observer {
    update(temperature: number): any;
}

// ------------------------------------------------------
class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number;

    registerObserver(o: Observer) {
        this.observers.push(o);
    }

    removeObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    setTemperature(temp: number) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }
}

// ------------------------------------------------------
class TemperatureDisplay implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number) {
        console.log('TemperatureDisplay: I need to update my display');
    }
}

class Fan implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number) {
        if (temperature > 25) {
            console.log('Fan: Its hot here, turning myself on...');
        } else {
            console.log('Fan: Its nice and cool, turning myself off...');
        }
    }
}

let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);*/