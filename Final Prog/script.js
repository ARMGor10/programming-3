function matrixGenerator(matrixSize, grassCount, grassEaterCount, waterCount, predatorCount,soilCount,tornadoCount) {
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





let matrix = matrixGenerator(20, 45, 10, 25, 3, 15, 2);
let side = 40;

///creature arrays
let grassArray = [];
let grassEaterArr = [];
let waterArr = [];
let predatorArr = [];
let soilArr = [];
let tornadoArr = [];

function setup() {
        frameRate(7);

        createCanvas(matrix[0].length * side, matrix.length * side);
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y)
                                grassArray.push(gr);
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let grWat = new Water(x, y)
                                waterArr.push(grWat)
                        } else if (matrix[y][x] == 4) {
                                let grPred = new Predator(x, y)
                                predatorArr.push(grPred)
                        } else if (matrix[y][x] == 5) {
                                let grSoil = new Soil (x, y)
                                soilArr.push(grSoil)
                        }else if (matrix[y][x] == 6) {
                                let grTor = new Tornado (x, y)
                                tornadoArr.push(grTor)
                        }


                }
        }

}


function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if (matrix[y][x] == 2) {
                                fill("yellow")
                        } else if (matrix[y][x] == 3) {
                                fill("blue")
                        } else if (matrix[y][x] == 4) {
                                fill("red")
                        } else if (matrix[y][x] == 5) {
                                fill('#994C00')
                        } else if (matrix[y][x] == 6) {
                                fill('#000000')
                        }  else {
                                fill("gray")
                        }
                        rect(x * side, y * side, side, side)
                }
        }


        for (let i in grassArray) {
                grassArray[i].mul()

        }

        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }

        for (let i in predatorArr) {
                predatorArr[i].eat()
        }
        for (let i in soilArr) {
                soilArr[i].eat()
        }
        for (let i in tornadoArr) {
                tornadoArr[i].eat()
        }

}


//խոտին ուտում է խոտակերը
//խոտին ու խոտակերին գիշատիչը 
//ջուրը ավելացնելու է խոտ
//հողը վերացնում է ջրին
//փոթորիկը վերացնում է ամբողջը 