class Tornado {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 7;
        this.directions = []
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

    chooseCell(character, character1,character2,character3,character4) {
        this.getNewCordinates()
        var found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == character1 || matrix[y][x] == character2|| matrix[y][x] == character3|| matrix[y][x] == character4) {
                    found.push(this.directions[i]);
                }

            }

        }
        return found;

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




