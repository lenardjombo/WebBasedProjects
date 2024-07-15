const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const snakeSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let dx = 0;
let dy = 0;
let score = 0;
let gameover = false;

function draw() {
    if (gameover) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.fillText("Game Over", 120, 200);
        ctx.fillText("Score: " + score, 140, 250);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "lime";
    snake.forEach(segment => {
        ctx.fillRect(segment.x * snakeSize, segment.y * snakeSize, snakeSize, snakeSize);
    });

    ctx.fillStyle = "red";
    ctx.fillRect(food.x * snakeSize, food.y * snakeSize, snakeSize, snakeSize);

    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        generateFood();
    } else {
        snake.pop();
    }

    if (head.x < 0 || head.x >= canvas.width / snakeSize || head.y < 0 || head.y >= canvas.height / snakeSize || checkCollision()) {
        gameover = true;
    }
}

function generateFood() {
    food = {
        x: Math.floor(Math.random() * (canvas.width / snakeSize)),
        y: Math.floor(Math.random() * (canvas.height / snakeSize))
    };
}

function checkCollision() {
    return snake.slice(1).some(segment => {
        return segment.x === snake[0].x && segment.y === snake[0].y;
    });
}

function changeDirection(event) {
    const keyPressed = event.keyCode;
    if (keyPressed === 37 && dx === 0) {
        dx = -1;
        dy = 0;
    }
    if (keyPressed === 38 && dy === 0) {
        dx = 0;
        dy = -1;
    }
    if (keyPressed === 39 && dx === 0) {
        dx = 1;
        dy = 0;
    }
    if (keyPressed === 40 && dy === 0) {
        dx = 0;
        dy = 1;
    }
}

document.addEventListener("keydown", changeDirection);

setInterval(draw, 100);
