let parentButton = document.querySelector('.calc_button');
let buttons = document.querySelectorAll('.button');
let inputNumbers = document.querySelector('.input');
let inputSaveNumbers = document.querySelector('.save-input');
let numders = [];
let numbersTwo = [];

// function solutionMethod(meth){

// }
parentButton.addEventListener('click', function(e){
    if(e.target.innerHTML > -1 && e.target.innerHTML <= 9){
        setNumbers(e.target.innerHTML);
    }else if(e.target.innerHTML == '='){
        console.log(numders)
    }

});

function setNumbers(num){
    if(numders.length > 16){
    }else{
        numders.push(num);
        let setText = document.createElement('span')
        setText.innerHTML = num;
        inputNumbers.prepend(setText)
    }   
}