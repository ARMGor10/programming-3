let LivingCreature = require('./livingCreature')

module.exports = class Water extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 8



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

    chooseCell(character) {
        this.getNewCordinates()
        return super.chooseCell(character)
    }

    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 3
            let grWat = new Water(newX, newY)
            waterArr.push(grWat);

        }
    }


    add() {
        let adds = this.chooseCell(1)
        let add = adds[Math.floor(Math.random() * adds.length)]

        if (add) {
            this.energy++

            let newX = add[0]
            let newY = add[1]

            for (let i in grassArray) {
                if (newX == grassArray[i].x && newY == grassArray[i].y) {
                    grassArray.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 3

            matrix[this.y][this.x] = 1

            this.x = newX
            this.y = newY

            if (this.energy >= 13) {
                this.mul()
            }



        } else {
            this.move()
        }
    }
    move() {
        this.energy--;
        let emptyCells = this.chooseCell(0);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];


            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }

        if (this.energy <= 0) {
            this.die()
        }

    }

    die() {
        matrix[this.y][this.x] = 1;

        for (let i in waterArr) {
            if (this.x == waterArr[i].x && this.y == waterArr[i].y) {
                waterArr.splice(i, 1);
                break;
            }
        }
    }





}




