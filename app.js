
// const opt = document.querySelectorAll('.operator');
// const numbDisplay = document.createElement('div');
// numbDisplay.style.display = 'flex';

// const equal = document.querySelector('.equal');
// const btnNumb = document.querySelectorAll('.number');
// const mainDiv = document.querySelector('.container');

// let firstValue = '';
// let operator= '';
// let secondValue= '';


// btnNumb.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//          if (operator === ''){
//             firstValue += btn.textContent
//             numbDisplay.textContent = firstValue;
//          } else 
//          {
//             secondValue += btn.textContent 
//             numbDisplay.textContent = secondValue;
//          } 

//         //  if(operator !== '' || secondValue !== '') {
             
//         //  }
        
//         mainDiv.appendChild(numbDisplay);
//     } )
// });


// opt.forEach(function(operhand){
//     operhand.addEventListener('click',function(e){ 
//            operator = operhand.textContent;
           
//     })
// });

// equal.addEventListener('click', function(e){

//     const newDiv = document.createElement('div');E
//     newDiv.textContent = `${operate(operator,+firstValue,+secondValue)}`
//      numbDisplay.textContent = newDiv.textContent;       
      
// });

// const clearAll = document.querySelector('.clear');

// clearAll.addEventListener('click', function(e){
//     mainDiv.removeChild(numbDisplay);
//     firstValue = '';
//      operator= '';
//     secondValue= '';

// })



// function add(a,b) { 
//     return a + b;
// };


// function subtract(a,b) {
//     return a - b ;
// };

// function multiply (a,b){
//     return a * b;
// };

// function divide(a,b){
//     return a/b;
// };

// function operate(operator, a, b){
//     switch(operator){
//         case '+':
//         return add(a,b);
//         case '-':
//         return subtract(a,b);
//         case '*':
//         return multiply(a,b);
//         case '/' :
//         return divide(a,b);
//     }
// };

// //function for displaying the button value; 

//define variables for DOM values 

const result = document.querySelector('.result');
const numberButtons = document.querySelectorAll('.numbers .num');// To get a NodeList of the elements
const operatorButtons = document.querySelectorAll('.operators .operator');//To get a NodeList of the elements
const equalButton = document.querySelector('.btn-equal');
const allClearButton = document.querySelector('.btn-all-clear');

// store the displayed values in a variable;
let firstValue = '';
let op = '';
let nextValue = '';
let newValue = '';

//Write codes to display the target value on result 

numberButtons.forEach(function(button){
    button.addEventListener('click',function(e){
        //check if both op & newVal exists
        if ( op && newValue !== ''){
            //assign firstValue as newValue
            firstValue = newValue;
            //store nextValue to the target number
            nextValue += e.target.textContent.trim();
            //display the calculated value(newValue) + newly got nextValue;

             result.textContent = firstValue + op + nextValue;
        } else if (op){ 
               //storing the nextValue when op is defined.
            nextValue += e.target.textContent.trim();
            //update the result 
            result.textContent = firstValue +op + nextValue;
        } else {
            
            // storing clicked values as the firstValue
            firstValue += e.target.textContent.trim();
            //display the value
            result.textContent = firstValue;
        }
    });
}); 

operatorButtons.forEach(function(button){
    button.addEventListener('click',function(e){
        // check if the operator already exists 
        if(op){
            //if then operate the first and second vallues and then assign it to newVal
            newValue = valueOperator(Number(firstValue),op,Number(nextValue));
             //assign op with new value
             op = e.target.textContent.trim()
            //display newValue plus new op
             result.textContent = newValue + op;
            //empty the nextVal 
            nextValue = '';
           

        }else {
            // store the operator value in op
            op = e.target.textContent.trim();
            
            //update the stored result including the op;
            result.textContent = firstValue+op;
            console.log(op)
        }
    });
});

equalButton.addEventListener('click',function(e){ 
          newValue = valueOperator(Number(firstValue),op,Number(nextValue));
         //Display newValue 
          result.textContent = newValue;
     
});

//when clicked AC button
allClearButton.addEventListener('click',function(e){ 
    // clearing all the stored data;
    //  firstValue = '';
    //  op = '';
    //  newValue = '';
    //  nextValue = '';
    //  //displayed the clear data;
    //  result.textContent = firstValue + op + nextValue;
     location.reload();

});



function valueOperator(a,operator,b){
        
   switch(operator){
        case '+':
        return a + b;

        case '-':
        return a - b;

        case '*':
        return a * b;

        case '/' :
        if(b == 0){
            return `Told ya not to skip Maths classes.`
        } else {
          return a/b;
        }
        
        
        default :
       return 'Invalid Operator';
    }
};

