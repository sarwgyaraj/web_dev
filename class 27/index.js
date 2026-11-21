let canvas = document.querySelector("canvas")
let pen = canvas.getContext("2d")
let arr = [[0, 0]]
let cell = 10
let direction = "right"
let gameOver=false
let id = setInterval(() => {
    shape()
    update()
},200)
document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowUp") {
        direction = "up"
    }
    else if (e.key == "ArrowDown") {
        direction = "down"
    } 
    else if (e.key == "ArrowLeft") {
        direction = "left"
    }
    else {
        direction = "right"
    }
})
function shape() {
    if (gameOver==true) {
        clearInterval(id);
        return;
    }
    pen.clearRect(0, 0, 1200, 600)
    for (let i of arr) {
        pen.fillStyle = "yellow"
        pen.fillRect(i[0],i[1],cell,cell)
    }
}
function update() {
    let headX = arr[arr.length - 1][0]
    let headY = arr[arr.length - 1][1]
    let newX 
    let newY
    if (direction == "up") {
        newY = headY-cell
        newX = headX
        
    }
    else if (direction == "down") {
        newY = headY+cell
        newX = headX
        
    }
    else if (direction == "left") {
       newX = headX-cell
        newY = headY
        
    }
    else {
        newX = headX+cell
        newY = headY
        
    }
   
    arr.push([newX, newY])
    arr.shift()
    
}




