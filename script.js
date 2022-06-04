document.write("<h1> JS file created sucessfully</h1>");

document.write("<h2 style='color:blue;'> My name is Abdul</h2>");
document.write("<hr/>");

 function computerPlay(){
    const randomNumber = Math.floor(Math.random()* 3)+1;
   
    /*switch(randomNumber){
        case 1:
            //computer = "ROCK";
            console.log("ROCK");
            break;
        case 2:
            //computer = "paper";
            console.log("paper");
            break;
        case 3:
            //computer = "Scissors";
            console.log("Scissors");
            break;       
    }*/
    if(randomNumber == 1){
        return 1;
    }else if(randomNumber == 2){
        return 2;
    }else if(randomNumber == 3){
        return 3;
    }else{
        console.log("Error");
    }
} 
var rock = "rock"; // rock is assinged as the number 1 for computer
var paper = "paper"; // paper is assinged as the numbere 2 for computer
var scissors = "scissors"; // scissors is assinged as the number 3 for computer


function play(playerSelection, computerSelection, CsCount, P1Count){
    if(playerSelection.toLowerCase() == rock || paper || scissors){

        switch(computerSelection){
            case 1:
                if(playerSelection.toLowerCase() == paper){
                    console.log("Player1 you win ! **Paper beats Rock**");
                    P1Count++;
                }else if(playerSelection.toLowerCase() == scissors){
                    console.log("Computer you win ! **Rock beats scissors**");
                    CsCount++;
                }else{
                    console.log("Draw!");
                }
                break;
            case 2:
                if(playerSelection.toLowerCase() == scissors){
                    console.log("Player1 you win ! **scissors beats Paper**");
                    P1Count++;
                }else if(playerSelection.toLowerCase() == rock){
                    console.log("Computer you win ! **Paper beats Rock**");
                    CsCount++;
                }else{
                    console.log("Draw!");
                }
                break;
            case 3:
                if(playerSelection.toLowerCase() == rock){
                    console.log("Player1 you win ! **Rock beats Scissors**");
                    P1Count++;
                }else if(playerSelection.toLowerCase() == paper){
                    console.log("Computer you win ! **Scissors beats paper**");
                    CsCount++;
                }else{
                    console.log("Draw!");
                }
                break;                 
        }
    }else{
        console.log("Error check your input again! ");
    }  
}
function game(){
    let x = 1;
    let CsCount = 0;
    let P1Count = 0;


    for(let i =0;i<5;i++){
        
        const playerSelection = window.prompt("Enter a move Player1:");
        const computerSelection = computerPlay();

        console.log("** Round "+x+" **");
        x++;

        /*
        Display what move the computer made from the 
        random number chosen function (1-3) which corresponds to a move we alinged it.
        */
        if (computerSelection == 1){
            console.log("Computer chose the move, rock");
        }else if(computerSelection == 2){
            console.log("Computer chose the move, paper");
        }else{
            console.log("Computer chose the move, scissors");
        }
        
        console.log("Player1 chose the move, "+playerSelection);
        console.log("-------------------------------");
        console.log(play(playerSelection,computerSelection,CsCount,P1Count));
    }
    if(CsCount > P1Count){
        console.log("Computer you win the game!, Score of "+CsCount+"-"+P1Count);
    }else if(CsCount < P1Count){
        console.log("Player1 you win the game!, Score of "+P1Count+"-"+CsCount);
    }else{
        console.log("Its a draw, score of "+P1Count+"-"+CsCount);
    }
}
console.log(game());

/*

*/



/*
var phrase = "Pet dog, Jax";
var age = 23;
var gpa = 3.1;
var isMale = true;
var flaws = null;
var description = undefined;
document.write(phrase);
//document.write(age+gpa);

document.write(phrase.length);
document.write(phrase.toUpperCase());
*/

//assingment 2

/*
Square measurements
var length = 9;
var x = Math.sqrt(2);

var result = (length*x);
*/

/*
Traingle measurements
var sides = 5*6*7;
var result1 = (1/2)*(sides);
*/ 
/*
Circumference & surface area

*/

/*
document.write("Diagonal for this square is:<br/>");
document.write(result);

document.write("<br/>Area of this triangle is:<br/>");
document.write(result1+"<br/>");
*/
/*
var name = window.prompt("Enter a move:");
document.write("You entered "+ name);

function sayHi(name){

    document.write("<h1>Hello "+name+"</h1>");
}
sayHi("Abdul");
*/

//Assingment 3

/*
var x = window.prompt("Enter a number.");
var y = window.prompt("Enter a second number.");

if( x > y){
    document.write(x+" is the larger number !");
}else if(x==y){
    document.write("The same number....");
}
else
{
    document.write(y+" is the Larger number")
}
*/
/*
var input = window.prompt("Enter a number.");

if( input % 2 == 1){
    document.write(input+" is an odd number !");
}else{
    document.write(input+" is an even number !");
}
*/

