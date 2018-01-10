export interface IStudentScore {
    id:number,
    fullName: string;
    score: number;
}

let studentScores: IStudentScore[] = [
    {
        id: 1,
        fullName: 'Zahid',
        score: 10
    },
    {
        id: 2,
        fullName: 'Kariim',
        score: 9
    }
];

export function addScore(studentScore:IStudentScore):void{

    studentScores.push(studentScore);
    console.log(studentScores);
    getRecords();
}

export function deleteScore(studentId: number): void {
    debugger;
    for (let i = 0; i < studentScores.length; i++) {
        if (studentScores[i].id == studentId) {
            studentScores.splice(i, 1);
        }
    }
    getRecords();
   

}

export function getRecords(): IStudentScore[] {
    return <IStudentScore[]> studentScores;
}
export function sortScore(studentScore: IStudentScore): any {


}