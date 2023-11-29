import Tree from "./tree";

export default function knightMoves(start, end, array = []) {
	const tree = new Tree(start[0], start[1]);
	const next = tree.levelOrder(tree.root);
	let depth = 0;

	next.forEach((element) => {
		if (element.x === end[0] && element.y === end[1]) {
			depth = element.depth;
			for (let i = depth; i > -1; i--) {
				array[i] = [element.x, element.y];
				element = element.before;
			}
		}
	});

	console.log(`=> You've made it in ${depth} moves! Here's your path:`);
	array.forEach(element => {
		console.log(element);
	});
}
