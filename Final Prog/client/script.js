let socket = io();
let side = 40;

let grassColor = "green"
let grassEaterColor = "yellow"
let waterColor = "blue"
let predatorColor = "red"
let soilColor = "#994C00"
let tornadoColor = "#000000"

function setup() {
        frameRate(7);
        createCanvas(20 * side, 20 * side);
}


function drawGame(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill(grassColor)
                        } else if (matrix[y][x] == 2) {
                                fill(grassEaterColor)
                        } else if (matrix[y][x] == 3) {
                                fill(waterColor)
                        } else if (matrix[y][x] == 4) {
                                fill(predatorColor)
                        } else if (matrix[y][x] == 5) {
                                fill(soilColor)
                        } else if (matrix[y][x] == 6) {
                                fill(tornadoColor)
                        } else {
                                fill("gray")
                        }
                        rect(x * side, y * side, side, side)
                }
        }

}

// function click (matrix) {
//         for (let y = 0; y < matrix.length; y++) {
//                 for (let x = 0; x < matrix[y].length; x++) {
//                         if (matrix[y][x] == 1) {
//                                 fill("#207C10")
//                         } else if (matrix[y][x] == 2) {
//                                 fill("#FBFF92")
//                         } else if (matrix[y][x] == 3) {
//                                 fill("#0048BE")
//                         } else if (matrix[y][x] == 4) {
//                                 fill("orange")
//                         } else if (matrix[y][x] == 5) {
//                                 fill('#93FF47')
//                         } else if (matrix[y][x] == 6) {
//                                 fill('#494949')
//                         } else {
//                                 fill("gray")
//                         }
//                         rect(x * side, y * side, side, side)
//                 }
//         }

// }


setInterval(
        function () {
                socket.on('send matrix', drawGame)
        }, 1000
)

let buttonSp = document.getElementById("SpElement");
buttonSp.addEventListener("click", handleSpringClick);

function handleSpringClick() {
        grassColor = "#0B6005"
        grassEaterColor = "#FBFF92"
        waterColor = "#00028B"
        predatorColor = "orange"
        soilColor = '#93FF47'
        tornadoColor = '#494949'
}

let buttonSu = document.getElementById("SuElement");
buttonSu.addEventListener("click", handleSummerClick);

function handleSummerClick() {
        grassColor = "#EDEC32"
        grassEaterColor = "#ED7332"
        waterColor = "#7032ED"
        predatorColor = "#040F60"
        soilColor = '#6B4100'
        tornadoColor = '#FF0909'
}

let buttonAu = document.getElementById("AuElement");
buttonAu.addEventListener("click", handleAutumnClick);

function handleAutumnClick() {
        grassColor = "#FFC709"
        grassEaterColor = "#6F88A8"
        waterColor = "#2E6BA8"
        predatorColor = "#373737"
        soilColor = '#586722'
        tornadoColor = '#731717'
}

let buttonWi = document.getElementById("WiElement");
buttonWi.addEventListener("click", handleWinterClick);

function handleWinterClick() {
        grassColor = "#1BC3C4"
        grassEaterColor = "#FF0000"
        waterColor = "#0F00E4"
        predatorColor = "#6005A9"
        soilColor = '#532703'
        tornadoColor = '#061255'

        socket.emit("winter")
}

