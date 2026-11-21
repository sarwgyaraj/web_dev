
let canvas = document.querySelector("canvas");
let pen = canvas.getContext("2d");

let arr = [[0, 0]];
let cell = 10;
let direction = "right";
let gameOver = false;

let width = canvas.width;
let height = canvas.height;

let id = setInterval(() => {
    if (gameOver) {
        clearInterval(id);
        // pen.fillStyle = "red";
        // pen.font = "30px Arial";
        // pen.fillText("Game Over!", width / 2 - 80, height / 2);
        return;
    }

    update();
    shape();
}, 250);

document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowUp" && direction != "down") {
        direction = "up";
    }
    else if (e.key == "ArrowDown" && direction != "up") {
        direction = "down";
    }
    else if (e.key == "ArrowLeft" && direction != "right") {
        direction = "left";
    }
    else if (e.key == "ArrowRight" && direction != "left") {
        direction = "right";
    }
});

function shape() {
    pen.clearRect(0, 0, width, height);

    for (let i of arr) {
        pen.fillStyle = "yellow";
        pen.fillRect(i[0], i[1], cell, cell);
    }
}

function update() {
    let headX = arr[arr.length - 1][0];
    let headY = arr[arr.length - 1][1];

    let newX = headX;
    let newY = headY;

    if (direction == "up") {
        newY = headY - cell;
    }
    else if (direction == "down") {
        newY = headY + cell;
    }
    else if (direction == "left") {
        newX = headX - cell;
    }
    else if (direction == "right") {
        newX = headX + cell;
    }

    // Check whether the snake hits a wall
    if (
        newX < 0 ||
        newY < 0 ||
        newX + cell > width ||
        newY + cell > height
    ) {
        gameOver = true;
        return;
    }

    // Check whether the snake hits itself
    for (let i of arr) {
        if (newX == i[0] && newY == i[1]) {
            gameOver = true;
            return;
        }
    }

    arr.push([newX, newY]);
    arr.shift();
}
