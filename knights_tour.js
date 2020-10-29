const board = []
//creats board filled with zeroes
for(let i= 0; i< 5; i++){
	board.push([]);
	for(let j= 0; j< 5; j++){
		board[i].push(0)
	}
}

const pathRow = [2, 1, -1, -2, -2, -1, 1, 2];
const pathCol = [1, 2, 2, 1, -1, -2, -2, -1];



const findKnightsTour = (board, row, col, move ) =>{
 /* A utility function that will print the final result */
  if(move  === 25){
    for(let i = 0; i < 5; i ++){
      for(let j = 0; j < 5; j ++){
        continue;
      }
		}
		console.log(board)
		return true;

	} else {
		board[row][col] = move
		for(let index= 0; index < pathRow.length; index++){
			let newRow = row+pathRow[index];
			let newCol = col+pathCol[index];
			if(ifValidMove(board, newRow, newCol)){
				move++

        board[newRow][newCol] = move;
        //this is the recursive part
				if(findKnightsTour(board, newRow, newCol, move)){
					return true;
        }
        //this is the bakctracking part
				move--;
				board[newRow][newCol] = 0
			}
		}
	}
	return false;
}

const ifValidMove = (board, newRow, newCol) => {
	if(newRow >= 0 && newRow < 5 && newCol >= 0 && newCol < 5 && board[newRow] [newCol] === 0){
		return true
	}
	return false
}

console.log(findKnightsTour(board, 0, 0, 1))
