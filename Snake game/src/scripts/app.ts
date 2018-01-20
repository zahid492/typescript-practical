import {Painter} from './classes/painter';
import {Board} from './classes/board';
import {Snake} from './classes/snake';
import {Food} from "./classes/food";

let canvas: any = document.getElementById('mycanvas');

let startButton: any = document.getElementById('start-btn');
let pauseButton: any = document.getElementById('pause-btn');
let resumeButton: any = document.getElementById('resume-btn');


let lblScore: any = document.getElementById('lblScore');
let highScore: any = document.getElementById('highScore');
lblScore.innerHTML = 0;
highScore.innerHTML = window.localStorage.getItem('highScore') || 0;


startButton.addEventListener("click", function () {
    init();
});


pauseButton.addEventListener("click", function () {
   // startButton.setAttribute('disabled', false);
   // pauseButton.setAttribute('disabled', true);
    //debugger;
    clearInterval(gameLoop);
});

resumeButton.addEventListener("click", function () {
    // startButton.setAttribute('disabled', false);
    //pauseButton.setAttribute('disabled', true);

    //var snake = new Snake(4, 'green', 'darkgreen');
    //debugger;
    var aq = gameLoop;
});
var gameLoop:any;
let resumeGame: any;



function init(): void {
    //startButton.setAttribute('disabled', true);
    let painter = new Painter(canvas);
    var snake = new Snake(4, 'green', 'darkgreen');
    var food = new Food();
    var board = new Board(painter, snake, food, 350, 350, 10);
    board.init();
    board.drawScore();
    gameLoop = setInterval(function () {
        board.init();
        snake.move();
       // 

        if(board.checkBoundary()){
            gameLoop = clearInterval(gameLoop);
            alert("Game over");
        }

        if (snake.checkCollision()) {
            //debugger;
        }

        if (snake.eatFood(food.position)) {
           // debugger;
            food.createFood();
            board.drawFood();
            board.drawScore();
        }

        document.onkeydown = function (event) {
            let keyCode: number = event.keyCode;
            console.log("Move");
            console.log(food.position);
            snake.changeDirection(keyCode)
        }
        board.drawSnake();
        board.drawFood();
    }, 150)

    resumeGame = function () {
        console.log("Resume");
        //snake.move();
        //board.drawSnake();
        //board.drawFood();
       /* gameLoop = setInterval(function () {
            board.init();
            snake.move();


            if (board.checkBoundary()) {
                gameLoop = clearInterval(gameLoop);
                alert("Game over");
            }

            if (snake.checkCollision()) {
                //debugger;
            }

            if (snake.eatFood(food.position)) {
                // debugger;
                food.createFood();
                board.drawFood();
                //board.drawSnakeinLength();
            }

            document.onkeydown = function (event) {
                let keyCode: number = event.keyCode;
                console.log("Move");
                console.log(food.position);
                snake.changeDirection(keyCode)
            }
            board.drawSnake();
            board.drawFood();
        }, 150)
        // gameLoop();
        if (!gameLoop) {
            gameLoop();
        } else {
            gameLoop();
        }*/
    }
}

