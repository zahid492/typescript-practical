import {IPainter} from '../interfaces/ipainter';
import {IFood} from '../interfaces/ifood';
import {ISnake} from '../interfaces/isnake';
import {IBoard} from '../interfaces/iboard';


let highScore: any = document.getElementById('highScore');

export class Board implements IBoard{
    painter: IPainter;
    snake: ISnake;
    height:number;
    width: number;
    size:number;
    food: IFood;
    score: number;
    _localStorage: Storage;
    constructor(painter: IPainter, snake: ISnake, food: IFood, h: number, w: number, s: number, score:number){
        this.height = h;
        this.width = w;
        this.size = s;
        this.painter = painter;
        this.snake = snake;
        this.food = food;
        this.score= score;
        this._localStorage = window.localStorage;
    }
    drawSnake():void{
        for (var i = 0; i < this.snake.cells.length; i++) {
            var cell = this.snake.cells[i];
            if(i==0){
                this.drawSnakeCell(cell.x, cell.y, true);
            } else {
                this.drawSnakeCell(cell.x, cell.y, false);
            }

        }
    }
    drawSnakeCell(x:number, y:number, isHead:boolean){
        if(isHead){
            this.painter.fillArea(x*this.size, y*this.size, this.size, this.size, "black");
            this.painter.strokeArea(x * this.size, y * this.size, this.size, this.size, "black");
        } else {
            this.painter.fillArea(x * this.size, y * this.size, this.size, this.size, "white");
            this.painter.strokeArea(x * this.size, y * this.size, this.size, this.size, "black");
        }
    }
    drawFood(): void{
        this.painter.fillArea(this.food.position.x*this.size, this.food.position.y*this.size, this.size, this.size, "black");
        this.painter.strokeArea(this.food.position.x*this.size, this.food.position.y*this.size, this.size, this.size, "black");

    }
    drawScore(): void{
        let lblScore: any = document.getElementById('lblScore');
        let tempScore = this.score++;
        if (!this._localStorage.getItem('highScore')) {
            this._localStorage.setItem('highScore', '1');
            this.drawHighScore();
        } else {
            var storagehighScore:any= this._localStorage.getItem('highScore');
            if (Number(storagehighScore) > tempScore) {
                this._localStorage.setItem('highScore', storagehighScore);
                highScore.innerHTML = storagehighScore;
            } else {
                this._localStorage.setItem('highScore', tempScore.toString());
                this.drawHighScore();
            }
        }
        lblScore.innerHTML = tempScore||0;
        
    }
    drawHighScore(): void {
        highScore.innerHTML = window.localStorage.getItem('highScore') || 0;
    }
    checkBoundary(): boolean{
        return this.snake.checkBoundary(-1,  this.width/this.size,-1, this.height/this.size);
    }

    drawSnakeinLength(): void {
        var cell = this.snake.cells[1];
        console.log(cell);
        this.drawSnakeCell(cell.x, cell.y, false);
    }
    init(): void{
        this.painter.fillArea(0, 0, this.width, this.height, "white");
        this.painter.strokeArea(0, 0, this.width, this.height, "black");
    }
}