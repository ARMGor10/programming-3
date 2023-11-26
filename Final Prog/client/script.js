let socket = io();
let side = 40;
// let rows = 20;
// let cols = 20;

let grassColor = "green"
let grassEaterColor = "yellow"
let waterColor = "blue"
let predatorColor = "red"
let soilColor = "#994C00"
let tornadoColor = "#000000"

function setup() {
        frameRate(15);
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


        socket.emit("Summer")

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

        socket.emit("Autumn")
}

let buttonWi = document.getElementById("WiElement");
buttonWi.addEventListener("click", handleWinterClick);

function handleWinterClick() {
        grassColor = "#FFFFFF"
        grassEaterColor = "#FF0000"
        waterColor = "#0F00E4"
        predatorColor = "#6005A9"
        soilColor = '#532703'
        tornadoColor = '#061255'

        socket.emit("Winter")
}

let buttonDi = document.getElementById("DiElement");
buttonDi.addEventListener("click", handleDiseaseClick);


function handleDiseaseClick() {
        grassColor = "#978A50"
        grassEaterColor = "gray"
        waterColor = "#000000"
        predatorColor = "#gray"
        soilColor = '#280909'
        tornadoColor = '#302A0E'
}











// let buttonBO = document.getElementById("BOElement");
// buttonBO.addEventListener("click", handleBOOMClick);

// function handleBOOMClick() {
       
// }

    // button to clear
//     let buttonBo = document.getElementById('BOElement');
//     buttonBo.addEventListener("click", handleBOOMClick);
    
// //     // button to set random initial state
//     let randomButton = document.getElementById("BOOM");
//     randomButton.addEventListener = randomButtonClick;


// function handleBOOMClick() {
    
//     cleaButtonrHandler();
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j+) {
//             let isLive = Math.round(Math.random());
//             if (isLive == 1) {
//                 let cell = document.getElementById(i + "_" + j);
//                 cell.setAttribute("class", "live");
//                 grid[i][j] = 1;
//             }
//         }
//     }
// }