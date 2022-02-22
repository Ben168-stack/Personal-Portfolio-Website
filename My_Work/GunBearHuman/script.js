let userScore = 0
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p")
//This means it will select the div with class result and all p
//elements within it.


const smallUserWord = 'user'.fontsize(3).sup();
const smallCompWord = 'comp'.fontsize(3).sup();

const gun_div = document.getElementById("g");
const bear_div = document.getElementById("b");
const human_div = document.getElementById("h");

// We are storing all these things in variables to use them later
function getComputerChoice(){
    const choices = ['g','b','h'];
    const randomNumber = (Math.floor(Math.random()*3))
    return choices[randomNumber]
}

function win(userChoice, computerChoice){
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // Updates user score when win
}
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // Updates computer score when it wins
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "gb":
            win(userChoice,computerChoice)
            
            result_p.innerHTML=`Gun${smallUserWord} Beats Bear${smallCompWord}<br>You have Shot a bear You Win!`
            break;
        case "bh":
            win(userChoice,computerChoice)
            result_p.innerHTML=`Bear${smallUserWord} Beats Human${smallCompWord}<br>You have mauled a human. You Win!`
            break;
        case "hg":
            win(userChoice,computerChoice)
            
            result_p.innerHTML=`Human${smallUserWord} Beats Gun${smallCompWord}<br>You have disarmed a gun, You Win!`
            break;  
        case 'bg':
            lose(userChoice,computerChoice)
            
            result_p.innerHTML=`Gun${smallCompWord} Beats Bear${smallUserWord}<br>You Have been Shot by a Gun. You Lose!`
            break
        case "hb":
            lose(userChoice,computerChoice)
            
            result_p.innerHTML=`Bear${smallCompWord} Beats Human${smallUserWord}<br>You have been mauled by a Bear. You Lose!`
            break;
        case "gh":
            lose(userChoice,computerChoice)
            
            result_p.innerHTML=`Human${smallCompWord} Beats Gun${smallUserWord}<br>You have been disarmed.You Lose!`
            break
        case 'gg':
        case "bb":
        case "hh":
            result_p.innerHTML="Its a Draw!"
            break
    }
    
}


function main(){
    gun_div.addEventListener('click',function(){
        game('g')
        // on click gets user choice of gun or g
    })
    bear_div.addEventListener('click',function(){
        game('b')
        // on click gets user choice of bear or b
    })
    human_div.addEventListener('click',function(){
        game('h')
        // on click gets user choice of human or h
    })

}
main();


