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
        score: 10
    }
];

export function addScore(studentScore:IStudentScore):void{

    studentScores.push(studentScore);
    console.log(studentScores);
    getRecords();
}

export function deleteScore(studentScore: IStudentScore): void {
     //const obj: IStudentScore[];
  //  console.log(obj);
    debugger;
    getRecords();

}

export function getRecords(): IStudentScore[] {
    console.log("Call 1st Time");
    return <IStudentScore[]> studentScores;
}
export function sortScore(studentScore: IStudentScore): any {


}