const playerFactory = () => {
    let name = '';
    let score = 0;

    const addScore = () => {
        score++;
    }

    return {
        name,
        getScore: () => score,
        addScore,
    }
};

const GameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];
    const player1 = playerFactory();
    const player2 = playerFactory();

    player1.addScore();

    player1.name = document.getElementById('player1').children[1].addEventListener("input", function() {
        player1.name = document.getElementById('player1').children[1].value;
    });
    player2.name = document.getElementById('player2').children[1].addEventListener("input", function() {
        player2.name = document.getElementById('player2').children[1].value;
    });

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        let gboard = document.getElementById('board');

        player1.name = document.getElementById('player1').children[1].value;
        player2.name = document.getElementById('player2').children[1].value;

        for (let i = 0; i < 9; i++) {
            gboard.children[i].children[0].src = `img/noun-dot.svg`;
        }

        resertButton = document.getElementById('reset');
        resertButton.addEventListener('click', function() {
            GameBoard.resetBoard();
            GameBoard.game('o');
        });
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

        let gboard = document.getElementById('board');

        for (let i = 0; i < 9; i++) {
            gboard.children[i].children[0].src = `img/noun-dot.svg`;

            gboard.children[i].addEventListener('click', function() {
                if (GameBoard.board[i] == '') {
                    GameBoard.set(i, currentPlayer);

                    switch (currentPlayer) {
                        case 'x':
                            gboard.children[i].children[0].src = `img/x.svg`;
                            currentPlayer = 'o';

                            document.getElementById('turn').innerHTML = 'O Turn';
                            break;
                        case 'o':
                            gboard.children[i].children[0].src = `img/o.svg`;
                            currentPlayer = 'x';

                            document.getElementById('turn').innerHTML = 'X Turn';
                            break;
                    }

                    if (GameBoard.checkWinner() != '') {
                        if (GameBoard.checkWinner() == 'x') {
                            player1.addScore();
                            document.getElementById('player2').children[3].innerHTML = player2.getScore().toString();
                            document.getElementById('turn').innerHTML = `${player2.name} WINS`;
                        } else {
                            player2.addScore();
                            document.getElementById('turn').innerHTML = `${player1.name} WINS`;
                            document.getElementById('player1').children[3].innerHTML = player1.getScore().toString();
                            console.log(player1.getScore());
                        }

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
GameBoard.resetBoard();
