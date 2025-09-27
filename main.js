let title = document.querySelector('.title');
let turn = 'x'
let squares = [];
function endWinner (num1 , num2 , num3) {
    title.innerHTML =  `${squares[num1]} winner`;
    document.getElementById('item' + num1).style.background = 'linear-gradient(135deg, #803457 0%, #951121c9 100%)';
    document.getElementById('item' + num2).style.background = 'linear-gradient(135deg, #803457 0%, #951121c9 100%)';
    document.getElementById('item' + num3).style.background = 'linear-gradient(135deg, #803457 0%, #951121c9 100%)';
}
function winner(){
    for(let i =1 ; i<10 ; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    // صفوف
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "") {
        endWinner(1,2,3);
    }
    if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != "") {
        endWinner(4,5,6);
    }
    if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != "") {
        endWinner(7,8,9);
    }

    // اعمده
    if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != "") {
        endWinner(1,4,7);
    }
    if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != "") {
        endWinner(2,5,8)
    }
    if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != "") {
        endWinner(3,6,9);
    }

    // cross-x
    if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != "") {
        endWinner(1,5,9);
    }
    if(squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != "") {
        endWinner(3,5,7);
    }
}
function game(id){
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    }
    else if(turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }
     winner();
}

function resetGame() {
    // Reset game state
    turn = 'x';
    gameEnded = false;
    title.innerHTML = '<span> X O</span> Game';
    
    // Clear all squares
    for(let i = 1; i <= 9; i++) {
        let element = document.getElementById('item' + i);
        element.innerHTML = '';
        element.style.background = 'linear-gradient(135deg, #ab597f 0%, #ff253ec9 100%)';
    }
}
