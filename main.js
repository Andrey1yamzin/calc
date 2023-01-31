let parentButton = document.querySelector('.calc_button');
let buttons = document.querySelectorAll('.button');
let inputNumbers = document.querySelector('.input');
let inputSaveNumbers = document.querySelector('.save-input');
let numders = [];


function setNumbers(num){
// console.log( typeof +num)
}

function solutionMethod(meth){

}
parentButton.addEventListener('click', function(e){
    if(e.target.innerHTML > -1 && e.target.innerHTML <= 9){
        numders.push(e.target.innerHTML);
        // console.log(e.target.innerHTML)
        let setText = document.createElement('span')
        setText.innerHTML = e.target.innerHTML;
        inputNumbers.append(setText)
        // inputNumbers.textContent = e.target.innerHTML;
    }else{
        console.log('no')
    }
});