//Example2:


const ps = require("prompt-sync");
const prompt = ps();

//take user input for two numbers
let number1 =Number(prompt("Enter the value of number1:"));
let number2 =Number(prompt("Enter the value of number2:"));

//take user input to select an operator
const operator = prompt ("Enter operator (either + , -, *, or / ):" );

switch(operator){

    case "+" :
        result = number1 + number2;
        console.log (`${number1} + ${number2}  = ${result}`);
        break;

        case "-":
            result =number1 - number2;
            console.log (`${number1} - ${ number2}  = ${result}`);
            break;

         
         case  "*":
         result = number1 * number2;
         console.log (`${number1} * ${number2}  =  ${result}`);
           break;

            case "/":
                result = number1 /number2;
                console.log(`${number1} / ${number2} = ${result}`);
                break;

         
            
}


if (result % 2 === 0) {
    return console.log(`El numero ${result} es Par`);
  } else {

    console.log(`El numero ${result}  no es Par`);

  }


