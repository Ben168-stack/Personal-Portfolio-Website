function shake(){

    var ball= document.getElementById("ball")
    var messageText = document.getElementById("message")
 
    //remove previous message if it exists
    if(messageText != null){
     messageText.parentNode.removeChild(messageText);
    }
    
    //Make the ball shake by adding the css class
    ball.classList.add("shake");
 
    //Remove the shake class after it stops shaking
    setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
    
    //call the fortune function to get your fortune only after 1.5sec
    setTimeout(function(){ getFortune(); }, 1500);
 }

function getFortune(){
    var fortunes = ["Better not tell you now.","Better not tell you now.","Reply hazy and try again",
                    "Cannot predict now.","Don't count on it.","My sources say no.","Outlook not so good.",
                    'Signs point to yes.']


    var fortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    // Gets a random fortunes from the list of fortunes

    var parent = document.getElementById("fortune")
    // finds the div(can be any element with the id of 'fortune'
    var newMessage = document.createElement('div')
    // Creates a div('it will help display the fortune)
    newMessage.setAttribute('id','message')
    // Gives an id of 'message'
    newMessage.innerHTML = "\""+fortune+"\""
    parent.appendChild(newMessage)
}