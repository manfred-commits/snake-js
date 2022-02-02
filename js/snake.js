let gameBoard=document.getElementById("snake_playground");

let boardLength=10;

let pseudoBoard=[];

// creates a pseudo board, that will contain the positions (x,y) of all the cells composing the snake_playground
for(let i=0;i<boardLength;i++){
    for(let j=0; j<boardLength;j++){
        pseudoBoard.push([i,j]);
    }
}
//console.log(pseudoBoard);

// prints the pseudo board in the inner html of the snake_playground div
for(let i=0;i<boardLength;i++){
    for(let j=0; j<boardLength;j++){
        gameBoard.innerHTML+=`
        <div class="cell" data-x="${i}" data-y="${j}"></div>
        `;
    }
}
