let parentButton = document.querySelector('.calc_button');
let buttons = document.querySelectorAll('.button');
let inputNumbers = document.querySelector('.input');
let inputSaveNumbers = document.querySelector('.save-input');
let numders = [];
let numbersTwo = [];

function removeLastSpan(){
    inputNumbers.removeChild(inputNumbers.firstChild);
    numders.pop();
//проработать ошибку постого удаления
}
//функция удаляет поле ввода основное
function removeInputLine(){
    while(inputNumbers.firstChild){
        inputNumbers.removeChild(inputNumbers.firstChild);
    }
    return numders = [];
}
//функция удаляет все поля ввода
function removeAllFields(){
    while(inputNumbers.firstChild){
        inputNumbers.removeChild(inputNumbers.firstChild)
  
    }
    while(inputSaveNumbers.firstChild){
        inputSaveNumbers.removeChild(inputSaveNumbers.firstChild)
    }
    return numders = [];
}




parentButton.addEventListener('click', function(e){
    if(e.target.innerHTML > -1 && e.target.innerHTML <= 9 || e.target.innerHTML == ','){
        setNumbers(e.target.innerHTML);
    }else if(e.target.innerHTML == 'CE'){
        removeInputLine()
    }else if(e.target.innerHTML == 'C'){
        removeAllFields()
    }else if(e.target.innerHTML == '←'){
        removeLastSpan()
    }else if (e.target.innerHTML == '+'){
        numbersTwo = numders.slice();
        //вот тут доделать нужно, когда плюс нажимаем
    }
console.log(e.target.innerHTML)
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

let arr = [1, 2, 3]
let arr2 = []

arr2 = arr.slice();

arr2[3] = 4;

console.log(arr)
console.log(arr2)