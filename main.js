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

//функция сложения
function getAddition(){
    // console.log(numders)
    // numbersTwo = numders.slice().join('');
    // numders = [];
    // console.log(numbersTwo)
    // console.log(numders)


    // let saveText = document.createElement('span')
    //     saveText.innerHTML = `+ ${numbersTwo}`;
    //     inputSaveNumbers.prepend(saveText);
    //     while(inputNumbers.firstChild){
    //         inputNumbers.removeChild(inputNumbers.firstChild);
    //     }


    //     parentButton.addEventListener('click', function(e){
    //         if(e.target.innerHTML == "="){
    //             while(inputNumbers.firstChild){
    //                 inputNumbers.removeChild(inputNumbers.firstChild);
    //             }
    //             console.log(numbersTwo)
    //             console.log(numders)
    //             // let answer = document.createElement('span')
    //             // // console.log(1)
    //             // answer.innerHTML = +numbersTwo + +numders.join('');
    //             // console.log(numbersTwo)//разобраться почему 2 раза идёт цикл
    //             // console.log(numders)
    //             // console.log(+numbersTwo + +numders.join(''))
    //             // inputNumbers.prepend(answer);

    //             while(inputSaveNumbers.firstChild){
    //                 inputSaveNumbers.removeChild(inputSaveNumbers.firstChild);
    //             }
                
    //         }
            
    //     })
    let numTxt = document.querySelectorAll('.numTxt');
        for(let i = 0; i < numTxt.length; i++){
            console.log(numTxt[i].innerHTML)
        }
        //нужно засунуть элементы в массив, и отправить на 2 строчку как текст
}


parentButton.addEventListener('click', function(e){

    if(numders.length == 0){
        while(inputNumbers.firstChild){
            inputNumbers.removeChild(inputNumbers.firstChild);
        }
    }
    if(e.target.innerHTML > -1 && e.target.innerHTML <= 9 || e.target.innerHTML == '.'){
        setNumbers(e.target.innerHTML);
    }else if(e.target.innerHTML == 'CE'){
        removeInputLine()
    }else if(e.target.innerHTML == 'C'){
        removeAllFields()
    }else if(e.target.innerHTML == '←'){
        removeLastSpan()
    }else if (e.target.innerHTML == '+'){
        getAddition()
        // console.log(`${numbersTwo.join('')}${e.target.innerHTML}`)
    }
// console.log(e.target.innerHTML)
});

function setNumbers(num){
    if(numders.length > 16){
        
    }else{
        numders.push(num);
        let setText = document.createElement('span');
        setText.classList = 'numTxt';
        setText.innerHTML = num;
        inputNumbers.prepend(setText)
    }   
}


