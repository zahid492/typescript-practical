import '../styles/base.scss';

import { IStudentScore, addScore, deleteScore, getRecords, sortScore } from './service/crudService';


const fullNameTextBox = <HTMLInputElement>document.getElementById('fullName');
const scoreTextBox = <HTMLInputElement>document.getElementById('score');
const addScoreButton = <HTMLButtonElement>document.getElementById('addScore');
const deleteButton = <HTMLButtonElement>document.getElementById('deleteButton');
const sortButton = <HTMLInputElement>document.getElementById('sortButton');
const listItem = <HTMLElement>document.getElementById('demo');


class StudentScore {
    public totalStudents: any[];
    public order: string = 'asc';
    constructor() {
        this.displayResult();
        /*let objStudent = {
            id: 3,
            fullName: 'XXX',
            score: 10
        };
        if (deleteButton) {
            deleteButton.addEventListener("click", (e: Event) => this.deleteStudent(objStudent));
        }*/
        
    }
    public addStudent(obj: IStudentScore): void {
        addScore(obj);
    }
    public deleteStudent(obj: number): void {
        deleteScore(obj);
    }

    public displayResult():void {
        this.totalStudents = this.OrderByArray(getRecords(),'score');

        let singleListItem ='';
        for (let item of this.totalStudents) {
            singleListItem = singleListItem + `<li>
                      <span>
                        <span>${item.fullName}</span>
                        <span>${item.score}</span>
                        <button id="deleteButton">Delete</button>
                      </span>
                   </li>`;
        }
        listItem.innerHTML = singleListItem;
        console.log(listItem);
    };

    public OrderByArray(values: any[], orderType: any) {
        console.log(this.order);
        return values.sort((a, b) => {
            if (this.order === 'asc') {
                if (a[orderType] > b[orderType]) {
                    return 1;
                }
            }
            if (this.order === 'dsc') {
                if (a[orderType] < b[orderType]) {
                    return 1;
                }
            }
        return 0
    });
}
}

window.onload = () => {
    let studentScore = new StudentScore();
    addScoreButton.addEventListener('click', () => {
        let objStudent = {
            id: Math.random() % 100,
            fullName: fullNameTextBox.value,
            score: parseInt(scoreTextBox.value)
        };
        studentScore.addStudent(objStudent);
        studentScore.displayResult();
    });

    sortButton.addEventListener('click', () => {
        console.log(studentScore.order);
        if (studentScore.order === 'asc') {
            studentScore.order = 'dsc'
        } else {
            studentScore.order = 'asc'
        }
        sortButton.value = "Sort " + studentScore.order;
        studentScore.displayResult();
    });

}


