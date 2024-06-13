let tefficLight = "green";
let message = " ";

switch (tefficLight){
case "red":
message = "Stop immediately";
break;

case " yellow":
message = " Prepare to stop";
break;

case "grenn":
message = "Proceed or continue driving";
break;

default:
message = "Ivalid traffic light color.";

}

console.log(messag);


//Syntax of the swicht...case Statemnt

switch (expression){

case value1:
        //code block to be executed
        //if expression matches value1
        break;


case value2: 
    //code block to be executed
        //if expression matches value1
        break;

        default:
           // code block to be executed
        // if expression doesn't match any case 
        

}