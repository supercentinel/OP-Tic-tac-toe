const Player = (() => {
    let score = 0;
    let playerTurn = false;

    const increaseScore = () => {
        score++;
    }

    const flipTurn = () => {
        playerTurn = !playerTurn;
    }

    return {
        score,
        playerTurn,
        increaseScore,
        flipTurn,
    }
})();

const GameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
    }
    const setX = (position) => {
        board[position] = 'x';
    }
    const setO = (position) => {
        board[position] = 'O';
    }
    const checkWinner = function() {

    }

    return {
        board,
        resetBoard,
        setX,
        setO,
        checkWinner,
    };
})();

console.log(GameBoard.board)

GameBoard.setO(2);
console.log(GameBoard.board)
const player1 = Player;
console.log(player1.playerTurn);
player1.flipTurn();
console.log(player1.playerTurn);
