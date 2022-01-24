let btnNumber = document.getElementsByName("number");
let btnOperator = document.getElementsByName("operator");
let btnEqual = document.getElementsByName("equal")[0];
let btnClear = document.getElementsByName("clear")[0];
let result = document.getElementById("result");

let opCurrent = "";
let opPrevious = "";
let operation = undefined;

btnNumber.forEach(function(boton){
    boton.addEventListener("click", function(){
        addNumber(boton.innerText);
    })
})

btnOperator.forEach(function(boton){
    boton.addEventListener("click", function(){
        selectOperator(boton.innerText);
    })
})

btnEqual.addEventListener("click", function(){
    calculate();
    updateDisplay();
})

btnClear.addEventListener("click", function(){
    clear();
    updateDisplay();
})

function addNumber(num){
    opCurrent = opCurrent.toString() + num.toString();
    updateDisplay();
}

function selectOperator(op){ 
    if(opCurrent === "") return;
    if(opPrevious !== ""){        
        calculate();
    }
    operation = op.toString();
    opPrevious = opCurrent;   
    opCurrent = "";
}

function calculate(){
    let calculo;
    const previous = parseFloat(opPrevious);
    const current = parseFloat(opCurrent);
    if(isNaN(previous) || isNaN(current)) return;
    switch(operation){
        case "+":
            calculo = previous + current;
            break;
        case "-":
            calculo = previous - current;
            break;
        case "*":
            calculo = previous * current;
            break;
        case "/":
            calculo = previous / current;
            break;
        default: return;
    }
    opCurrent = calculo;
    operation = undefined;
    opPrevious = "";
}

function clear(){
    opCurrent = "";
    opPrevious = "";
    op = undefined;   
}

function updateDisplay(){
    result.value = opCurrent;
}

clear();