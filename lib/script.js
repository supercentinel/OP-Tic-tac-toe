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
        if (board[0] == 'x' && board[1] == 'x' && board[2] == 'x') {
            return 'x';
        }
        if (board[3] == 'x' && board[4] == 'x' && board[5] == 'x') {
            return 'x';
        }
        if (board[6] == 'x' && board[7] == 'x' && board[8] == 'x') {
            return 'x';
        }
        if (board[0] == 'x' && board[3] == 'x' && board[6] == 'x') {
            return 'x';
        }
        if (board[1] == 'x' && board[4] == 'x' && board[7] == 'x') {
            return 'x';
        }
        if (board[2] == 'x' && board[5] == 'x' && board[8] == 'x') {
            return 'x';
        }
        if (board[0] == 'x' && board[4] == 'x' && board[8] == 'x') {
            return 'x';
        }
        if (board[2] == 'x' && board[4] == 'x' && board[6] == 'x') {
            return 'x';
        }
        if (board[0] == 'o' && board[1] == 'o' && board[2] == 'o') {
            return 'o';
        }
        if (board[3] == 'o' && board[4] == 'o' && board[5] == 'o') {
            return 'o';
        }
        if (board[6] == 'o' && board[7] == 'o' && board[8] == 'o') {
            return 'o';
        }
        if (board[0] == 'o' && board[3] == 'o' && board[6] == 'o') {
            return 'o';
        }
        if (board[1] == 'o' && board[4] == 'o' && board[7] == 'o') {
            return 'o';
        }
        if (board[2] == 'o' && board[5] == 'o' && board[8] == 'o') {
            return 'o';
        }

        return '';
    }
    const game = (startingPlayer) => {
        let currentPlayer = startingPlayer;
        document.getElementById('turn').innerHTML = `${currentPlayer.toUpperCase()} Turn`;

        board = document.getElementById('board');

        for (let i = 0; i < 9; i++) {
            board.children[i].children[0].src = `../img/noun-dot-2366606.svg`;

            board.children[i].addEventListener('click', function() {
                if (GameBoard.board[i] == '') {
                    GameBoard.set(i, currentPlayer);

                    switch (currentPlayer) {
                        case 'x':
                            board.children[i].children[0].src = `../img/${currentPlayer}.svg`;
                            currentPlayer = 'o';

                            document.getElementById('turn').innerHTML = 'O Turn';
                            break;
                        case 'o':
                            board.children[i].children[0].src = `../img/${currentPlayer}.svg`;
                            currentPlayer = 'x';

                            document.getElementById('turn').innerHTML = 'X Turn';
                            break;
                    }

                    if (GameBoard.checkWinner() != '') {
                        document.getElementById('turn').innerHTML = `${GameBoard.checkWinner().toUpperCase()} Wins!`;

                        alert(`${GameBoard.checkWinner().toUpperCase()} Wins!`);
                    }
                }
            });
        }
    }

    return {
        board,
        resetBoard,
        set,
        checkWinner,
        game,
    };
})();

GameBoard.game('o');
console.log(GameBoard.board)
const player1 = playerFactory();
const player2 = playerFactory();
