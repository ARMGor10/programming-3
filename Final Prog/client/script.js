
let side = 40;

///creature arrays
let grassArray = [];
let grassEaterArr = [];
let waterArr = [];
let predatorArr = [];
let soilArr = [];
let tornadoArr = [];

function setup() {
        console.log("Hello world")
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
                                let grSoil = new Soil(x, y)
                                soilArr.push(grSoil)
                        } else if (matrix[y][x] == 6) {
                                let grTor = new Tornado(x, y)
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
                        } else {
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
        for (let i in waterArr) {
                waterArr[i].add()
        for (let i in soilArr) {
                soilArr[i].eat()
        }
        for (let i in tornadoArr) {
                tornadoArr[i].eat()
        }

}                                                                       }

// 
// //խոտին ուտում է խոտակերը
// //խոտին ու խոտակերին գիշատիչը 
// //ջուրը ավելացնելու է խոտ
// //հողը վերացնում է ջրին
// //փոթորիկը վերացնում է ամբողջը 




// let student = {
//         name: "Gor",
//         age: 16,
//         isTumoStudent: true,
//         showInfo() {
//                 console.log(this.name,this.age)
//         }
// }

// student.showInfo()

// let erexa = new Child("Gor",16,"male");
// erexa.jump()
// erexa.speak()
// erexa.walk()


// console.log(erexa.name,erexa.gen);