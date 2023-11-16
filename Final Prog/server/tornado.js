let LivingCreature = require('./LivingCreature')

module.exports = class Tornado extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 7;
    }


    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character ,character1,character2,character3,character4) {
        this.getNewCordinates()
       return super.chooseCell(character, character1,character2,character3,character4)
    }


    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 6
            //Tor == Tornado
            let grTor = new Tornado(newX, newY)
            tornadoArr.push(grTor)



        }
    }
    eat() {
        let foods = this.chooseCell(1, 2,3,4,5)//utelu qanak
        let food = random(foods)

        if (food) {
            this.energy++

            let newX = food[0]
            let newY = food[1]

            for (let i in grassArray) {
                if (newX == grassArray[i].x && newY == grassArray[i].y) {
                    grassArray.splice(i, 1)
                    break;
                }
            }
            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
            for (let i in waterArr) {
                if (newX == waterArr[i].x && newY == waterArr[i].y) {
                    waterArr.splice(i, 1)
                    break;
                }
            }
           
            for (let i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }
            for (let i in soilArr) {
                if (newX == soilArr[i].x && newY == soilArr[i].y) {
                    soilArr.splice(i, 1)
                    break;
                }
            }
           
           
            matrix[newY][newX] = 6

            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            if (this.energy >= 8) {
                this.mul()
            }



        } else {
            this.move()
        }
    }

    move() {
        this.energy--;
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell);

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];


            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }

        if (this.energy <= 0) {
            this.die()
        }

    }

    die() {
        matrix[this.y][this.x] = 0;

        for (let i in tornadoArr) {
            if (this.x == tornadoArr[i].x && this.y == tornadoArr[i].y) {
                tornadoArr.splice(i, 1);
                break;
            }
        }
    }






}




