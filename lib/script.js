const playerFactory = () => {
    let score = 0;

    const addScore = () => {
        score++;
    }

    return {
        score,
        addScore,
    }
};

const GameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
    }
    const set = (position, token) => {
        if (token == 'x') {
            board[position] = 'x';
        }
        if (token == 'o') {
            board[position] = 'o';
        }
    }
    const checkWinner = function() {

    }

    return {
        board,
        resetBoard,
        set,
        checkWinner,
    };
})();

function Game() {

}

let currentPlayer = 'x';
document.getElementById('turn').innerHTML = 'X Turn';

board = document.getElementById('board');

for (let i = 0; i < 9; i++) {
    board.children[i].children[0].src = `../img/noun-dot-2366606.svg`;

    board.children[i].addEventListener('click', function() {
        if (GameBoard.board[i] == '') {
            GameBoard.set(i, currentPlayer);

            switch (currentPlayer) {
                case 'x':
                    currentPlayer = 'o';
                    board.children[i].children[0].src = `../img/${currentPlayer}.svg`;
                    document.getElementById('turn').innerHTML = 'O Turn';
                break;
                case 'o':
                    currentPlayer = 'x';
                    board.children[i].children[0].src = `../img/${currentPlayer}.svg`;
                    document.getElementById('turn').innerHTML = 'X Turn';
                break;
            }

        }
    });
}

console.log(GameBoard.board)
const player1 = playerFactory();
const player2 = playerFactory();
