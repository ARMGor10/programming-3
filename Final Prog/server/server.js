let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");

app.use(express.static("../client"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});


function matrixGenerator(matrixSize, grassCount, grassEaterCount, waterCount, predatorCount, soilCount, tornadoCount) {
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0);
        }
    }

    //Grass
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }


    }

    //GrassEater
    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }


    }

    //Water

    for (let i = 0; i < waterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }


    }

    //predator
    for (let i = 0; i < predatorCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }


    }
    //soil
    for (let i = 0; i < soilCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }


    }
    //tornado
    for (let i = 0; i < tornadoCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }


    }



    return matrix;
}

matrix = matrixGenerator(20, 45, 10, 25, 4, 15, 4);

io.sockets.emit('send matrix', matrix)


grassArray = [];
grassEaterArr = [];
waterArr = [];
predatorArr = [];
soilArr = [];
tornadoArr = [];


Grass = require("./grass")
GrassEater = require("./grassEater")
Water = require("./water")
Predator = require("./predator")
Soil = require("./soil")
Tornado = require("./tornado")

function createObject(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y, 1);
                grassArray.push(gr)
            }
            else if (matrix[y][x] == 2) {
                let grEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grEater)
            }
            else if (matrix[y][x] == 3) {
                let grWat = new Water(x, y, 3)
                waterArr.push(grWat)
            }
            else if (matrix[y][x] == 4) {
                let grPred = new Predator(x, y, 4)
                predatorArr.push(grPred)
            }
            else if (matrix[y][x] == 5) {
                let grSoil = new Soil(x, y, 5)
                soilArr.push(grSoil)
            }
            else if (matrix[y][x] == 6) {
                let grTor = new Tornado(x, y, 6)
                tornadoArr.push(grTor)
            }

        }
    }
    io.sockets.emit('send matrix', matrix)
}

function game() {

    for (let i in grassArray) {
        grassArray[i].mul()

    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in waterArr) {
        waterArr[i].add()
    }
    for (let i in soilArr) {
        soilArr[i].eat()
    }
    for (let i in tornadoArr) {
        tornadoArr[i].eat()
    }
    io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1000)

io.on('connection', function () {
    createObject(matrix)
})


let obj = {
  grass:0,
  grassEater:0,
  water:0,
  predator:0,
  soil:0,
  tornado:0

}


function Time() {
        obj.grass =  grassArray.length
        obj.grassEater = grassEaterArr.length
        obj.water = waterArr.length
        obj.predator = predatorArr.length
        obj.soil = soilArr.length
        obj.tornado= tornadoArr.length
        fs.writeFile("statistics.json", JSON.stringify(obj), function (err) {
            console.log("fs.writeFile ended");
        });
        
}

setInterval(Time,2000)

io.on('connection', function (socket) {
    createObject(matrix);
    socket.on("Summer", handleSummer)
    socket.on("Autumn", handleAutumn)
    socket.on("Winter", handleWinter)

})

function handleWinter() {
   for(let i in grassArray){
       grassArray[i].multiply = 30
   }
   for(let i in grassEaterArr){
    grassEaterArr[i].energy = 1
}
for(let i in waterArr){
    waterArr[i].energy = 2
}
for(let i in predatorArr){
    predatorArr[i].energy = 2
}
for(let i in soilArr){
    soilArr[i].energy = 2
}
for(let i in tornadoArr){
    tornadoArr[i].energy = 1
    console.log(tornadoArr[i].energy)
}


}

function handleSummer() {
    console.log("w====>>>");
}

function handleAutumn() {
    console.log("w========>>>");
}



