const playerFactory = () => {
    let score = 0;
    let playerTurn = true;
    const flipTurn = () => {
        playerTurn = !playerTurn;
    }

    return {
        score,
        playerTurn,
        flipTurn,
    }
};

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
const player1 = playerFactory();
const player2 = playerFactory();

player1.flipTurn();
console.log(player1.playerTurn);
