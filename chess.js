// Simple Chess Game with checkmate and king safety
const boardElement = document.getElementById('chessboard');
const statusElement = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

const PIECES = {
    wK: '♔', wQ: '♕', wR: '♖', wB: '♗', wN: '♘', wP: '♙',
    bK: '♚', bQ: '♛', bR: '♜', bB: '♝', bN: '♞', bP: '♟',
};

let board, selected, turn, gameOver;

function getInitialBoard() {
    return [
        ['bR','bN','bB','bQ','bK','bB','bN','bR'],
        ['bP','bP','bP','bP','bP','bP','bP','bP'],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        ['wP','wP','wP','wP','wP','wP','wP','wP'],
        ['wR','wN','wB','wQ','wK','wB','wN','wR']
    ];
}

function renderBoard() {
    boardElement.innerHTML = '';
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const square = document.createElement('div');
            square.className = 'square ' + ((r + c) % 2 === 0 ? 'light' : 'dark');
            square.dataset.row = r;
            square.dataset.col = c;
            if (selected && selected[0] === r && selected[1] === c) {
                square.classList.add('selected');
            }
            const piece = board[r][c];
            if (piece) square.textContent = PIECES[piece];
            if (!gameOver) {
                square.addEventListener('click', onSquareClick);
            }
            boardElement.appendChild(square);
        }
    }
}

function onSquareClick(e) {
    if (gameOver) return;
    const r = parseInt(this.dataset.row);
    const c = parseInt(this.dataset.col);
    const piece = board[r][c];
    if (selected) {
        if (isValidMove(selected, [r, c])) {
            board[r][c] = board[selected[0]][selected[1]];
            board[selected[0]][selected[1]] = null;
            turn = turn === 'w' ? 'b' : 'w';
            if (isCheckmate(turn)) {
                statusElement.textContent = (turn === 'w' ? 'White' : 'Black') + ' is checkmated! Game over.';
                gameOver = true;
            } else if (isInCheck(turn)) {
                statusElement.textContent = (turn === 'w' ? 'White' : 'Black') + ' is in check!';
            } else {
                statusElement.textContent = (turn === 'w' ? 'White' : 'Black') + "'s turn";
            }
        }
        selected = null;
    } else if (piece && piece[0] === turn) {
        selected = [r, c];
    }
    renderBoard();
}

function isValidMove(from, to) {
    const [fr, fc] = from;
    const [tr, tc] = to;
    const piece = board[fr][fc];
    if (!piece) return false;
    if (fr === tr && fc === tc) return false;
    if (board[tr][tc] && board[tr][tc][0] === piece[0]) return false;
    // Pawn
    if (piece[1] === 'P') {
        const dir = piece[0] === 'w' ? -1 : 1;
        if (fc === tc && !board[tr][tc] && tr - fr === dir) return true;
        if (fc === tc && !board[tr][tc] && ((piece[0] === 'w' && fr === 6 && tr === 4 && !board[5][fc]) || (piece[0] === 'b' && fr === 1 && tr === 3 && !board[2][fc]))) return true;
        if (Math.abs(fc - tc) === 1 && tr - fr === dir && board[tr][tc] && board[tr][tc][0] !== piece[0]) return true;
        return false;
    }
    // Rook
    if (piece[1] === 'R') {
        if (fr === tr) {
            for (let i = Math.min(fc, tc) + 1; i < Math.max(fc, tc); i++) if (board[fr][i]) return false;
            return true;
        }
        if (fc === tc) {
            for (let i = Math.min(fr, tr) + 1; i < Math.max(fr, tr); i++) if (board[i][fc]) return false;
            return true;
        }
        return false;
    }
    // Bishop
    if (piece[1] === 'B') {
        if (Math.abs(fr - tr) === Math.abs(fc - tc)) {
            let dr = tr > fr ? 1 : -1;
            let dc = tc > fc ? 1 : -1;
            let r = fr + dr, c = fc + dc;
            while (r !== tr && c !== tc) {
                if (board[r][c]) return false;
                r += dr; c += dc;
            }
            return true;
        }
        return false;
    }
    // Queen
    if (piece[1] === 'Q') {
        if (fr === tr || fc === tc) {
            if (fr === tr) {
                for (let i = Math.min(fc, tc) + 1; i < Math.max(fc, tc); i++) if (board[fr][i]) return false;
                return true;
            }
            if (fc === tc) {
                for (let i = Math.min(fr, tr) + 1; i < Math.max(fr, tr); i++) if (board[i][fc]) return false;
                return true;
            }
        }
        if (Math.abs(fr - tr) === Math.abs(fc - tc)) {
            let dr = tr > fr ? 1 : -1;
            let dc = tc > fc ? 1 : -1;
            let r = fr + dr, c = fc + dc;
            while (r !== tr && c !== tc) {
                if (board[r][c]) return false;
                r += dr; c += dc;
            }
            return true;
        }
        return false;
    }
    // Knight
    if (piece[1] === 'N') {
        return (Math.abs(fr - tr) === 2 && Math.abs(fc - tc) === 1) || (Math.abs(fr - tr) === 1 && Math.abs(fc - tc) === 2);
    }
    // King
    if (piece[1] === 'K') {
        // Prevent kings from being adjacent
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const nr = tr + dr, nc = tc + dc;
                if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
                    if (board[nr][nc] && board[nr][nc][1] === 'K' && board[nr][nc][0] !== piece[0]) return false;
                }
            }
        }
        // Can't move into check
        const backup = board[tr][tc];
        board[tr][tc] = piece;
        board[fr][fc] = null;
        const inCheck = isAttacked(tr, tc, piece[0] === 'w' ? 'b' : 'w');
        board[fr][fc] = piece;
        board[tr][tc] = backup;
        if (inCheck) return false;
        return Math.abs(fr - tr) <= 1 && Math.abs(fc - tc) <= 1;
    }
    return false;
}

function findKing(color) {
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            if (board[r][c] === color + 'K') return [r, c];
        }
    }
    return null;
}

function isAttacked(r, c, byColor) {
    for (let fr = 0; fr < 8; fr++) {
        for (let fc = 0; fc < 8; fc++) {
            const piece = board[fr][fc];
            if (piece && piece[0] === byColor) {
                if (isValidMoveRaw([fr, fc], [r, c], byColor)) return true;
            }
        }
    }
    return false;
}

function isValidMoveRaw(from, to, color) {
    const [fr, fc] = from;
    const [tr, tc] = to;
    const piece = board[fr][fc];
    if (!piece) return false;
    if (fr === tr && fc === tc) return false;
    if (board[tr][tc] && board[tr][tc][0] === piece[0]) return false;
    // Pawn
    if (piece[1] === 'P') {
        const dir = piece[0] === 'w' ? -1 : 1;
        if (fc === tc && !board[tr][tc] && tr - fr === dir) return true;
        if (fc === tc && !board[tr][tc] && ((piece[0] === 'w' && fr === 6 && tr === 4 && !board[5][fc]) || (piece[0] === 'b' && fr === 1 && tr === 3 && !board[2][fc]))) return true;
        if (Math.abs(fc - tc) === 1 && tr - fr === dir && board[tr][tc] && board[tr][tc][0] !== piece[0]) return true;
        return false;
    }
    // Rook
    if (piece[1] === 'R') {
        if (fr === tr) {
            for (let i = Math.min(fc, tc) + 1; i < Math.max(fc, tc); i++) if (board[fr][i]) return false;
            return true;
        }
        if (fc === tc) {
            for (let i = Math.min(fr, tr) + 1; i < Math.max(fr, tr); i++) if (board[i][fc]) return false;
            return true;
        }
        return false;
    }
    // Bishop
    if (piece[1] === 'B') {
        if (Math.abs(fr - tr) === Math.abs(fc - tc)) {
            let dr = tr > fr ? 1 : -1;
            let dc = tc > fc ? 1 : -1;
            let r = fr + dr, c = fc + dc;
            while (r !== tr && c !== tc) {
                if (board[r][c]) return false;
                r += dr; c += dc;
            }
            return true;
        }
        return false;
    }
    // Queen
    if (piece[1] === 'Q') {
        if (fr === tr || fc === tc) {
            if (fr === tr) {
                for (let i = Math.min(fc, tc) + 1; i < Math.max(fc, tc); i++) if (board[fr][i]) return false;
                return true;
            }
            if (fc === tc) {
                for (let i = Math.min(fr, tr) + 1; i < Math.max(fr, tr); i++) if (board[i][fc]) return false;
                return true;
            }
        }
        if (Math.abs(fr - tr) === Math.abs(fc - tc)) {
            let dr = tr > fr ? 1 : -1;
            let dc = tc > fc ? 1 : -1;
            let r = fr + dr, c = fc + dc;
            while (r !== tr && c !== tc) {
                if (board[r][c]) return false;
                r += dr; c += dc;
            }
            return true;
        }
        return false;
    }
    // Knight
    if (piece[1] === 'N') {
        return (Math.abs(fr - tr) === 2 && Math.abs(fc - tc) === 1) || (Math.abs(fr - tr) === 1 && Math.abs(fc - tc) === 2);
    }
    // King
    if (piece[1] === 'K') {
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const nr = tr + dr, nc = tc + dc;
                if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
                    if (board[nr][nc] && board[nr][nc][1] === 'K' && board[nr][nc][0] !== piece[0]) return false;
                }
            }
        }
        return Math.abs(fr - tr) <= 1 && Math.abs(fc - tc) <= 1;
    }
    return false;
}

function isInCheck(color) {
    const kingPos = findKing(color);
    if (!kingPos) return false;
    return isAttacked(kingPos[0], kingPos[1], color === 'w' ? 'b' : 'w');
}

function isCheckmate(color) {
    if (!isInCheck(color)) return false;
    for (let fr = 0; fr < 8; fr++) {
        for (let fc = 0; fc < 8; fc++) {
            const piece = board[fr][fc];
            if (piece && piece[0] === color) {
                for (let tr = 0; tr < 8; tr++) {
                    for (let tc = 0; tc < 8; tc++) {
                        if (isValidMoveRaw([fr, fc], [tr, tc], color)) {
                            const backup = board[tr][tc];
                            board[tr][tc] = board[fr][fc];
                            board[fr][fc] = null;
                            const stillInCheck = isInCheck(color);
                            board[fr][fc] = board[tr][tc];
                            board[tr][tc] = backup;
                            if (!stillInCheck) return false;
                        }
                    }
                }
            }
        }
    }
    return true;
}

function resetGame() {
    board = getInitialBoard();
    selected = null;
    turn = 'w';
    gameOver = false;
    statusElement.textContent = "White's turn";
    renderBoard();
}

resetBtn.addEventListener('click', resetGame);
resetGame();