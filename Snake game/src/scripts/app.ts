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
lblScore.innerHTML = 0;
highScore.innerHTML = window.localStorage.getItem('highScore') || 0;


startButton.addEventListener("click", function () {
    init('start');
    startButton.style.visibility = "hidden";
    pauseButton.style.visibility = "visible";
});


pauseButton.addEventListener("click", function () {
    pauseButton.style.visibility = "hidden";
    startButton.style.visibility = "visible";
    clearInterval(gameLoop);
});

/*resumeButton.addEventListener("click", function () {
    init('resume');
});*/

let board: any, painter: any, snake: any, food: any;
window.onload = function (e) {
    pauseButton.style.visibility = "hidden";
    painter = new Painter(canvas);
    snake = new Snake(4, 'green', 'darkgreen');
    food = new Food();
    board = new Board(painter, snake, food, 350, 350, 10,0);
    board.init();
    //board.drawScore();
};
let gameLoop: any;

function init(status: string): void {
        gameLoop = setInterval(function () {
            board.init();
            snake.move();
            if (board.checkBoundary()) {
                gameLoop = clearInterval(gameLoop);
                //alert("Game over");
               
               painter.drawGameOver(board.score);
               setTimeout(function () {
               if (confirm("Play again !!")) {
                    location.reload();
                } else {
                    location.reload();
                    }
                }, 100);
            }

            if (snake.checkCollision()) {
                alert("Touch in With Anyone");
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
        }, 150)
}


