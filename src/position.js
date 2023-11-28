export default class Position {
	constructor(board, x, y, depth) {
        this.x = x;
        this.y = y;
		this.value = board[x][y];
        this.depth = depth;
		this.a = null;
		this.b = null;
		this.c = null;
		this.d = null;
		this.e = null;
		this.f = null;
		this.g = null;
		this.h = null;
	}
}
