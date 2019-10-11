class TicTacToe {
    constructor() {
        this.tic = [[null, null, null],
        [null, null, null],
        [null, null, null]];
        this.curr = "x";
    }

    getCurrentPlayerSymbol() {
        return this.curr;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.tic[rowIndex][columnIndex] === null) {
            this.tic[rowIndex][columnIndex] = this.curr;
            if (this.curr === "x") {
                this.curr = "o";
            } else this.curr = "x";
        }
    }

    isFinished() {
        if (this.getWinner() != undefined || this.isDraw() == true) return true
        else return false
    }

    getWinner() {
        let winner;
        function win(arr) {
            for (let i = 0; i < arr.length; i++) {
                if (!arr[i].includes(null)) {
                    //строки
                    if (arr[i].filter(j => j === "x").length === 3) {
                        winner = "x";
                    }
                    if (arr[i].filter(j => j === "o").length === 3) {
                        winner = "o";
                    }
                }
            }
        }
        win(this.tic);
        win(this.tic[0].map((column, i) => this.tic.map(row => row[i])));
        if (winner !== undefined) return winner;

        if (
            ((this.tic[0][0] === this.tic[1][1]) && (this.tic[1][1] === this.tic[2][2])) ||
            ((this.tic[0][2] === this.tic[1][1]) && (this.tic[1][1] === this.tic[2][0]))
        ) {
            winner = this.tic[1][1]
            return winner;
        } else return null;
    }

    noMoreTurns() {
        if ([].concat(...this.tic).indexOf(null) === -1) return true
        else return false
    }

    isDraw() {
        if (this.noMoreTurns() == true && this.getWinner() == undefined) return true;
        else return false
    }

    getFieldValue(rowIndex, colIndex) {
        return this.tic[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
