let tic = document.querySelectorAll('.tic');
let turno = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

for (let i = 0; i < tic.length; i++) {
    tic[i].addEventListener('click', function () {
        clickMe(i);
    });
}

function clickMe(i) {
    // console.log("box was clicked");

    if (tic[i]) {
        if (turno) {
            if(tic[i].textContent==""){
                tic[i].textContent = 'O';
            turno = false;
            }
            
            
        } else {
            if(tic[i].textContent==""){
                tic[i].textContent = 'X';
            turno = true;
            }
       
        }
        
        checkWinner();
    }
}

function checkWinner() {
    for (let pattern of winPatterns) {
        let value1 = tic[pattern[0]].textContent;
        let value2 = tic[pattern[1]].textContent;
        let value3 = tic[pattern[2]].textContent;

        if (value1 !== "" && value2 !== "" && value3 !== "") {
            if (value1 == value2 && value2 == value3) {
                // console.log("Winner: ", value1);
                alert(`winner is ${value1}`)
                
            }
           
           
        }
    }
}
        
    


