/*
//prototype shit code

let defaultDice1=document.querySelector('.dice1')
let defaultDice2=document.querySelector('.dice2')
let dice1='images/dice1.png';
let dice2='images/dice2.png';
let dice3='images/dice3.png';
let dice4='images/dice4.png';
let dice5='images/dice5.png';
let dice6='images/dice6.png';
let startButton=document.querySelector('#roll');

let randomDiceGen=()=>{
    let roll1=Math.floor(Math.random()*6);
    switch(roll1){
        case 0:  defaultDice1.src=dice1;
        break;
        case 1:  defaultDice1.src=dice2;
        break;
        case 2:  defaultDice1.src=dice3;
        break;
        case 3:  defaultDice1.src=dice4;
        break;
        case 4:  defaultDice1.src=dice5;
        break;
        case 5:  defaultDice1.src=dice6;
    }
    
    let roll2=Math.floor(Math.random()*6);
    switch(roll2){
        case 0:  defaultDice2.src=dice1;
        break;
        case 1:  defaultDice2.src=dice2;
        break;
        case 2:  defaultDice2.src=dice3;
        break;
        case 3:  defaultDice2.src=dice4;
        break;
        case 4:  defaultDice2.src=dice5;
        break;
        case 5:  defaultDice2.src=dice6;
    }
     if(roll1===roll2){
         document.querySelector('h2').innerHTML='Tie!';
         document.querySelector('h2').style.color='white'
     }else if(roll1>roll2){
        document.querySelector('h2').innerHTML='Player 1 wins!!';
        document.querySelector('h2').style.color='gold'

    }else{
        document.querySelector('h2').innerHTML='Player 2 wins!!';
        document.querySelector('h2').style.color='#9C060C'

    }
    
}


startButton.onclick=()=>{
    randomDiceGen();
}
*/

//real code

let defaultDice1=document.querySelector('.dice1')
let defaultDice2=document.querySelector('.dice2')
let startButton=document.querySelector('#roll');

let randomDiceGen=()=>{
    let roll1=Math.floor(Math.random()*6)+1;
    defaultDice1.src=`images/dice${roll1}.png`;

    let roll2=Math.floor(Math.random()*6)+1;
    defaultDice2.src=`images/dice${roll2}.png`;
    
    if(roll1===roll2){
         document.querySelector('h2').innerHTML='Tie!';
         document.querySelector('h2').style.color='white'
     }else if(roll1>roll2){
        document.querySelector('h2').innerHTML='Player 1 wins!!';
        document.querySelector('h2').style.color='gold'

    }else{
        document.querySelector('h2').innerHTML='Player 2 wins!!';
        document.querySelector('h2').style.color='#9C060C'

    }
    
}

startButton.onclick=()=>{
    randomDiceGen();
}
