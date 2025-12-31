
function getComps(){
    let x = Math.floor(Math.random() * 3) + 1;
    if(x == 1){
        return "ROCK"
    }
    else if(x == 2){
        return "PAPER"
    }
    else{
        return "SCISSOR"
    }
}

function getHum(){
    let x = (prompt("ENTER: ROCK || PAPER || SCISSOR"))
    x = x.toUpperCase();
    return x;
}

var human = 0;
var computer = 0;

function playRound(){
    const comps = getComps();
    const hum = getHum();

    if (hum !== "ROCK" && hum !== "PAPER" && hum !== "SCISSOR") {
        console.log("Invalid input");
        return;
    }

    if(comps == hum){
        console.log("TIE: POINTS TO BOTH")
        computer++;
        human++;
        return;
    }

    if((comps == "PAPER" && hum == "ROCK") || (comps == "ROCK" && hum == "PAPER")){
        if((comps == "PAPER" && hum == "ROCK")){
            console.log("You Lose! PAPER BEATS ROCK")
            computer++;
        }
        else{
            console.log("You Win! PAPER BEATS ROCK")
            human++;
        }
        return;
    }

    if((comps == "PAPER" && hum == "SCISSOR") || (comps == "SCISSOR" && hum == "PAPER")){
        if((comps == "PAPER" && hum == "SCISSOR")){
            console.log("You Win! SCISSOR BEATS PAPER")
            human++;
        }
        else{
            console.log("You Lose! SCISSOR BEATS PAPER")
            computer++;
        }
        return;
    }

    if((comps == "SCISSOR" && hum == "ROCK") || (comps == "ROCK" && hum == "SCISSOR")){
        if((comps == "SCISSOR" && hum == "ROCK")){
            console.log("You Win! ROCK BEATS SCISSOR")
            human++;
        }
        else{
            console.log("You Lose! ROCK BEATS SCISSOR")
            computer++;
        }
        return;
    }
}


function playGame(){
    for(let i = 0; i < 5; i++){
        playRound();
    }

    console.log("===== FINAL SCORE =====");
    console.log(`Computer :  ${computer}`)
    console.log(`Human :  ${human}`)

    alert("Computer : " + computer + " You: " + human);
}

playGame();