import GameBoard from "./gameBoard";
import Position from "./position";

export default class Tree {
	constructor(x, y) {
		this.gameBoard = new GameBoard();
		this.knight = new Position(this.gameBoard.array, x, y, 0);
		this.root = this.buildTree(this.knight);
	}

    levelOrder(tree, array = [], values = [], queue = []) {
        if (tree === null || tree === undefined) return;
        if (tree.depth > 6) return;
        if (values.includes(tree.value) === false) {
            array.push(tree);
            values.push(tree.value);
            queue.push(tree.a);
            queue.push(tree.b);
            queue.push(tree.c);
            queue.push(tree.d);
            queue.push(tree.e);
            queue.push(tree.f);
            queue.push(tree.g);
            queue.push(tree.h);
        }
		
		while (queue.length) {
			const current = queue.shift();
			this.levelOrder(current, array, values, queue);
		}
		return array;
	}

	buildTree(position) {
        if (position.depth > 6) return;
		const board = this.gameBoard.array;
        const {x} = position;
        const {y} = position;
        if (y === 0) {
            if (x === 0) {
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1, position));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1, position));
            }
            if (x === 1) {
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1, position));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1, position));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1, position));
            }
            if (x >= 2 && x <= 5) {
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1, position));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1, position));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1, position));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1, position));
            }
            if (x === 6) {
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1, position));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1, position));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1, position));
            }
            if (x === 7) {
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1, position));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1, position));
            }
        }
        if (y === 1) {
            if (x === 0) {
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1, position));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1, position));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1, position));
            }
            if (x === 1) {
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1, position));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1, position));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1, position));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1, position));
            }
            if (x >= 2 && x <= 5) {
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1, position));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1, position));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1, position));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1, position));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1, position));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1, position));
            }
            if (x === 6) {
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1, position));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1, position));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1, position));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1, position));
            }
            if (x === 7) {
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1, position));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1, position));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1, position));
            }
        }
        if (y >= 2 && y <= 5) {
            if (x === 0) {
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1, position));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1, position));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1, position));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1, position));
            }
            if (x === 1) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1, position));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1, position));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1, position));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1, position));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1, position));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1, position));
            }
            if (x >= 2 && x <= 5) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1, position));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1, position));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1, position));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1, position));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1, position));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1, position));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1, position));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1, position));
            }
            if (x === 6) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1, position));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1, position));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1, position));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1, position));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1, position));
                position.h = this.buildTree(new Position(board, x + 1, y + 2, position.depth + 1, position));
            }
            if (x === 7) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1, position));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1, position));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1, position));
                position.d = this.buildTree(new Position(board, x - 1, y + 2, position.depth + 1, position));
            }
        }
        if (y === 6) {
            if (x === 0) {
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1, position));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1, position));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1, position));
            }
            if (x === 1) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1, position));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1, position));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1, position));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1, position));
            }
            if (x >= 2 && x <= 5) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1, position));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1, position));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1, position));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1, position));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1, position));
                position.g = this.buildTree(new Position(board, x + 2, y + 1, position.depth + 1, position));
            }
            if (x === 6) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1, position));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1, position));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1, position));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1, position));
            }
            if (x === 7) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1, position));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1, position));
                position.c = this.buildTree(new Position(board, x - 2, y + 1, position.depth + 1, position));
            }
        }
        if (y === 7) {
            if (x === 0) {
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1, position));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1, position));
            }
            if (x === 1) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1, position));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1, position));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1, position));
            }
            if (x >= 2 && x <= 5) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1, position));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1, position));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1, position));
                position.f = this.buildTree(new Position(board, x + 2, y - 1, position.depth + 1, position));
            }
            if (x === 6) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1, position));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1, position));
                position.e = this.buildTree(new Position(board, x + 1, y - 2, position.depth + 1, position));
            }
            if (x === 7) {
                position.a = this.buildTree(new Position(board, x - 1, y - 2, position.depth + 1, position));
                position.b = this.buildTree(new Position(board, x - 2, y - 1, position.depth + 1, position));
            }
        }
        return position;
	}
}
