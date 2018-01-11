import '../styles/base.scss';

import { IStudentScore, addScore, deleteScore, getRecords} from './service/crudService';


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
    }
    public addStudent(obj: IStudentScore): void {
        addScore(obj);
    }
    public deleteStudent(obj: number): void {
        deleteScore(obj);
        studentScore.displayResult();
    }

    public displayResult(): void {
        clearStudentTable();
        this.totalStudents = this.orderByArray(getRecords(),'score');
        for (let item of this.totalStudents) {
            printTask(item);
        };
    };

    public orderByArray(values: any[], orderType: any) {
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
            return 0;
        });
}
}

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
        if (studentScore.order === 'asc') {
            studentScore.order = 'dsc';
        } else {
            studentScore.order = 'asc';
        }
        sortButton.value = "Sort " + studentScore.order;
        studentScore.displayResult();
    });

    function deleteStudentFunc(id: number): void {
        studentScore.deleteStudent(id);
    }

    function printTask(student: IStudentScore): void {
        var studentTable: HTMLTableElement = <HTMLTableElement>document.getElementById("studentTable");
        var studentNameCol: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.createElement("td");
        var studentScoreCol: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.createElement("td");
        var studentCommandCol: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.createElement("td");


        var studentDeleteButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");

        studentDeleteButton.id = student.id.toString();

        studentDeleteButton.innerText = "Delete";

        studentDeleteButton.onclick = () => {
            if (confirm('Do you want to delete this todo item?')) {
                deleteStudentFunc(student.id);
            }
        };
        studentCommandCol.width = "200px";
        studentCommandCol.appendChild(studentDeleteButton);

        var studentNameSpan: HTMLSpanElement = <HTMLSpanElement>document.createElement("span");
        studentNameSpan.innerHTML = student.fullName;
        studentNameCol.appendChild(studentNameSpan);


        var studentScoreSpan: HTMLSpanElement = <HTMLSpanElement>document.createElement("span");
        studentScoreSpan.innerHTML = student.score.toString();
        studentScoreCol.appendChild(studentScoreSpan);

        var studentRow: HTMLTableRowElement = <HTMLTableRowElement>document.createElement("tr");

        studentRow.insertCell(0).appendChild(studentNameCol);
        studentRow.insertCell(1).appendChild(studentScoreCol);
        studentRow.insertCell(2).appendChild(studentCommandCol);
        studentTable.tBodies[0].appendChild(studentRow);
    }

    function clearStudentTable(): void {
        var studentTable: HTMLTableElement = <HTMLTableElement>document.getElementById("studentTable");
        var oldTbody = studentTable.tBodies[0];
        var newTbody = document.createElement('tbody');
        studentTable.replaceChild(newTbody, oldTbody);
    }






