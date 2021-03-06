import { Painter } from './classes/painter';
import { Board } from './classes/board';
import { Snake } from './classes/snake';
import { Food } from "./classes/food";

let canvas: any = document.getElementById('mycanvas');

var startButton: any = document.getElementById('start-btn');
var pauseButton: any = document.getElementById('pause-btn');
var resumeButton: any = document.getElementById('resume-btn');


let lblScore: any = document.getElementById('lblScore');
let highScore: any = document.getElementById('highScore');



startButton.addEventListener("click", function () {
    init(150);
    startButton.style.visibility = "hidden";
    pauseButton.style.visibility = "visible";
});

pauseButton.addEventListener("click", function () {
    painter.drawMessage("Pause");
    pauseButton.style.visibility = "hidden";
    startButton.style.visibility = "visible";
    clearInterval(gameLoop);
});
let board: any, painter: any, snake: any, food: any;
window.onload = function (e) {
    painter = new Painter(canvas);
    snake = new Snake(4, 'green', 'darkgreen');
    food = new Food();
    board = new Board(painter, snake, food, 300, 300, 10,1);
    board.init();
    startButton.style.visibility = "visible";
    board.drawHighScore();
    lblScore.innerHTML = 0;
};
let gameLoop: any;
let counter: number=0;

function init(intervalTime:number): void {
    counter++;
    gameLoop = setInterval(function () {
            board.init();
            snake.move();
            if (board.score > 3 * counter) {
                clearInterval(gameLoop);
                intervalTime = intervalTime-20;
                console.log(intervalTime);
                if (intervalTime < 70) {
                    intervalTime=70
                }
                init(intervalTime)
            }
            if (board.checkBoundary() || snake.checkCollision()) {
                gameLoop = clearInterval(gameLoop);


                var message = 'Game Over! \n Your Score:' + (board.score-1);
                painter.drawMessage(message);
                   setTimeout(function () {
                   if (confirm("Play again !!")) {
                        location.reload();
                    } else {
                        location.reload();
                        }
                    }, 100);
            }

            if (snake.eatFood(food.position)) {
                food.createFood();
                board.drawFood();
                board.drawScore();
            }

            document.onkeydown = function (event) {
                let keyCode: number = event.keyCode;
                snake.changeDirection(keyCode)
            }
            board.drawSnake();
            board.drawFood();
    }, intervalTime)
}


