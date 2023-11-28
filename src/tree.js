import GameBoard from "./gameBoard";
import Position from "./position";

let depth = 0;

export default class Tree {
	constructor(x, y) {
		this.gameBoard = new GameBoard();
		this.knight = new Position(this.gameBoard.array, x, y, depth);
		this.root = this.buildTree(this.knight);
	}

	buildTree(position) {
        if (position.depth > 6) return;
		const board = this.gameBoard.array;
        const x = position.x;
        const y = position.y;
        if (y === 0) {
            if (x === 0) {
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1));
            }
            if (x === 1) {
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1));
            }
            if (x >= 2 && x <= 5) {
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1));
            }
            if (x === 6) {
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1));
            }
            if (x === 7) {
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1));
            }
        }
        if (y === 1) {
            if (x === 0) {
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1));
            }
            if (x === 1) {
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1));
            }
            if (x >= 2 && x <= 5) {
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1));
            }
            if (x === 6) {
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1));
            }
            if (x === 7) {
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1));
            }
        }
        if (y >= 2 && y <= 5) {
            if (x === 0) {
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1));
            }
            if (x === 1) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1));
            }
            if (x >= 2 && x <= 5) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1));
            }
            if (x === 6) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1));
            }
            if (x === 7) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1));
            }
        }
        if (y === 6) {
            if (x === 0) {
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1));
            }
            if (x === 1) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1));
            }
            if (x >= 2 && x <= 5) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1));
            }
            if (x === 6) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1));
            }
            if (x === 7) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1));
            }
        }
        if (y === 7) {
            if (x === 0) {
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1));
            }
            if (x === 1) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1));
            }
            if (x >= 2 && x <= 5) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1));
            }
            if (x === 6) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1));
            }
            if (x === 7) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1));
            }
        }
        return position;
	}
}
