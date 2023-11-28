export default class Position {
	constructor(board, x, y) {
		this.value = board[x][y];
		// this.a = board[x - 1][y - 2] || null;
		// this.b = board[x - 2][y - 1] || null;
		// this.c = board[x - 2][y + 1] || null;
		// this.d = board[x - 1][y + 2] || null;
		// this.e = board[x + 1][y - 2] || null;
		// this.f = board[x + 2][y - 1] || null;
		// this.g = board[x + 2][y + 1] || null;
		// this.h = board[x + 1][y + 2] || null;
	}
}
