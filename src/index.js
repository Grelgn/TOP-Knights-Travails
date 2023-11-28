import GameBoard from "./gameBoard";
import Position from "./position";

const gameBoard = new GameBoard();

console.log(gameBoard);

console.log(gameBoard.array[4][3]);

const knight = new Position(gameBoard.array, 4, 3);
console.log(knight);

const knight2 = new Position(gameBoard.array, 1, 1);
console.log(knight2);