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
        // The logic is the following:
        // Only one player wins if one of the middle cells form a line with the other two cells
        // Thus we only need to check the middle cells 1, 3, 4, 5, 7
        //X case
        if (board[1] == 'x') {
            if (board[0] == 'x' && board[2] == 'x') {
                return 'x';
            }
            if (board[4] == 'x' && board[7] == 'x') {
                return 'x';
            }
        }
        if (board[3] == 'x') {
            if (board[4] == 'x' && board[5] == 'x') {
                return 'x';
            }
            if (board[0] == 'x' && board[6] == 'x') {
                return 'x';
            }
        }
        if (board[4] == 'x') {
            if (board[2] == 'x' && board[6] == 'x') {
                return 'x';
            }
            if (board[1] == 'x' && board[7] == 'x') {
                return 'x';
            }
            if (board[3] == 'x' && board[5] == 'x') {
                return 'x';
            }
            if (board[0] == 'x' && board[8] == 'x') {
                return 'x';
            }
        }
        if (board[5] == 'x') {
            if (board[2] == 'x' && board[8] == 'x') {
                return 'x';
            }
            if (board[3] == 'x' && board[4] == 'x') {
                return 'x';
            }
        }
        if (board[7] == 'x') {
            if (board[6] == 'x' && board[8] == 'x') {
                return 'x';
            }
            if (board[1] == 'x' && board[4] == 'x') {
                return 'x';
            }
        }
        //O case
        if (board[1] == 'o') {
            if (board[0] == 'o' && board[2] == 'o') {
                return 'o';
            }
            if (board[4] == 'o' && board[7] == 'o') {
                return 'o';
            }
        }
        if (board[3] == 'o') {
            if (board[4] == 'o' && board[5] == 'o') {
                return 'o';
            }
            if (board[0] == 'o' && board[6] == 'o') {
                return 'o';
            }
        }
        if (board[4] == 'o') {
            if (board[2] == 'o' && board[6] == 'o') {
                return 'o';
            }
            if (board[1] == 'o' && board[7] == 'o') {
                return 'o';
            }
            if (board[3] == 'o' && board[5] == 'o') {
                return 'o';
            }
            if (board[0] == 'o' && board[8] == 'o') {
                return 'o';
            }
        }
        if (board[5] == 'o') {
            if (board[2] == 'o' && board[8] == 'o') {
                return 'o';
            }
            if (board[3] == 'o' && board[4] == 'o') {
                return 'o';
            }
        }
        if (board[7] == 'o') {
            if (board[6] == 'o' && board[8] == 'o') {
                return 'o';
            }
            if (board[1] == 'o' && board[4] == 'o') {
                return 'o';
            }
        }
        //If no winner is found empty string is returned
        return '';
    }
    const game = (startingPlayer) => {
        let currentPlayer = startingPlayer;
        document.getElementById('turn').innerHTML = `${currentPlayer.toUpperCase()} Turn`;

        let gboard = document.getElementById('board');

        for (let i = 0; i < 9; i++) {
            gboard.children[i].children[0].src = `img/noun-dot.svg`;

            if(board[i] == ''){
                gboard.children[i].addEventListener('click', () => {
                    if (currentPlayer == 'x') {
                        gboard.children[i].children[0].src = `img/x.svg`;
                        GameBoard.set(i, 'x');
                        currentPlayer = 'o';
                        document.getElementById('turn').innerHTML = `${currentPlayer.toUpperCase()} Turn`;
                    } else {
                        gboard.children[i].children[0].src = `img/o.svg`;
                        GameBoard.set(i, 'o');
                        currentPlayer = 'x';
                        document.getElementById('turn').innerHTML = `${currentPlayer.toUpperCase()} Turn`;
                    }
                });
            }
        }

        gboard.addEventListener('click', () => {
            let winner = GameBoard.checkWinner();
            if (winner == 'o') {
                alert(`${player1.name} wins`);
                player2.addScore();
                document.getElementById('player1').children[3].innerHTML = player1.getScore();
                GameBoard.resetBoard();
            }
            if (winner == 'x') {
                alert(`${player2.name} wins`);
                player2.addScore();
                document.getElementById('player2').children[3].innerHTML = player2.getScore();
                GameBoard.resetBoard();
            }
        });
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
