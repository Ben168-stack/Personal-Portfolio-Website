var cardsArray = [
    {    'name': '8ball',    'img': 'img/8ball.png',  },
    {    'name': 'cat',    'img': 'img/cat2.jpg',  },
    {    'name': 'JS',    'img': 'img/CodeJS.png',  },
    {    'name': 'Professor',    'img': 'img/Professor.jpg',  },
    {    'name': 'puzzle',    'img': 'img/puzzle.png',  },
    {    'name': 'gun',    'img': 'img/gun.svg',  },
    {    'name': 'headphones',    'img': 'img/headphones.svg',  },
    {    'name': 'hunter',    'img': 'img/hunter.svg',  },
    {    'name': 'schoolgirl',    'img': 'img/schoolgirl.svg',  },
    {    'name': 'bear',    'img': 'img/bear.svg',  },
    {    'name': 'Magic Broom',    'img': 'img/broom.png',  },
    {    'name': 'Developer Icon',    'img': 'img/DeveloperIcon.svg',  },
  ];


// Dupicate cardsArray to create a match for each card
var gameGrid = cardsArray.concat(cardsArray);
var score = 0
// Declare variable score
var checkScore = 0
// To check when the game ends
var Win = document.querySelector('#winMessage')
var scoreSpan = document.querySelector('span')
scoreSpan.append(score)
// Randomize game grid on each load
gameGrid.sort(function() {
    return 0.5 - Math.random();
})
// .sort can accept a function with determines the randomization of the game-grid
// By default .sort() will return numbers from lowst to highest, however since it an
// accept a function as an argument the array will be randomised with .sort hence randomizing the cards.

// .sort will return the lowest first number it sees to highest for e.g in an array numbers = [1,5,4,2,3,10,-1,-21,-2]
// numbers.sort() will return [-1,-2,-21,1,10,2,3,4,5]

// Remember Math.random will return a number between 0 and 1

// Creates a section, with a class of grid and appends it to the div with id of 'game-board'

//Grab the div with an id of game-board and assign to a variable game
var game = document.getElementById('game-board');
// Create a section element and assign it to variable grid
var grid = document.createElement('section');
//Give section element and assign it to variable grid
grid.setAttribute('class','grid')
//Give section element a class of grid
game.appendChild(grid)
//Append the grid section to the game-board div


//Adding all the cards with a for loop 

//Loop through each item in our cards array
for(i = 0; i< gameGrid.length; i++){
// Create a div element and assign to a variable card
var card = document.createElement('div');
// Apply a card class to that div
card.classList.add('card');
// Set the data attribute(or data-name check elements in inspect mode) of the div to the cardsArray name
card.dataset.name = gameGrid[i].name;
// The card's data set name is the name set in the array gameGrid

// Create front of card
var front = document.createElement('div');
front.classList.add('front');

// Create back of card
var back = document.createElement('div');
back.classList.add('back');
back.style.backgroundImage = `url(${gameGrid[i].img})`;

// Adds the image of the card 

// Append card to grid
grid.appendChild(card);
card.appendChild(front);
card.appendChild(back);

}//end of for loop

var firstGuess = '';
var secondGuess = '';
// Set count to 0
var count = 0;
var previousTarget = null
var delay = 1200 //This stands for 1.2 seconds btw


// Add match CSS(for when you hit a match)
var match = function(){
    var selected = document.querySelectorAll('.selected')
    scoreSpan.innerHTML=score
    // loop through the array like object containing selected class
    for(i = 0; i< selected.length; i++){
        selected[i].classList.add('match')
        // Loops througgh all selected cards(only 2 cards)
        //divs(cards) with the .selected class will be given a .match class
        // This will make it invisable in the css code where the front of the card
        // is the background color hence making it 'invisable'
    }
    if(checkScore===12){
      Win.innerHTML="You Win"
      document.getElementById("restart").style.visibility="visible"
      // When scores reaches 12(all cards flipped) a win message will appear
      // along with a restart button
    }
}
// Reset guesses after two attempts
var resetGuesses = function(){
    firstGuess = '';
    // firstGuess resets back to an empty string
    secondGuess = '';
    // secondGuess resets back to an empty string
    count = 0;
    // Resets the count back to 0
    previousTarget = null;
    // set previousTarget as null

    var selected = document.querySelectorAll('.selected')
    for (i =0; i < selected.length; i++){
      // Loops through the array selected to remove all selected class.
        selected[i].classList.remove('selected');

    }
};

// Add event listener to grid

grid.addEventListener('click', function(event){
    // Declare variable('clicked') to target our clicked item
    var clicked = event.target;
    // Do not allow the grid section itself to be selected
    // only select divs inside the grid
    // Do not allow the same item to be selected twice
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')){
        // If nodeName(attribute for e.g h1,section tag,p tag) of variable clicked 
        // equals to the attribute section, it returns nothing
        // clicked == previousTarget ensures the same card can't be clicked twice
        
        return;
        // return nothing
    }
    // We only want to add 'selected' class if the current count is less than 2
    if(count < 2){
        // When clicked the count will go up however if the counter is above 2,
        // it will not run the code in the if statement
        count++;

        if (count === 1) {
            // Assign first guess
            firstGuess = clicked.parentNode.dataset.name;
            // Add selected class
            clicked.parentNode.classList.add('selected');
          } else {
            // Assign second guess
            secondGuess = clicked.parentNode.dataset.name;
            // Add selected class
            clicked.parentNode.classList.add('selected');
          }

          // If both guesses are not empty
         //   If don't assign this it will always be a match
          if (firstGuess !== '' && secondGuess !== '') {
            // And the firstGuess matches secondGuess
            if (firstGuess === secondGuess) {
              score+=1
              checkScore+=1
              // Run the match function
            //   Which in turn gives the card or div the class .match
            // in turn making the card 'invisible'(color of front of cards is same as background color)
              setTimeout(match, delay);
              // remember you set delay as a variable of 1.2s or 1200ms
              // Runs the match function after a delay of 1.2 seonds if both cards match
              // Remember the match function runs only when the first guess equals to the second guess(same data-set name means a match)
              // The match function adds a class of 'match' to all cards with the selected class
              // This trigger the css code which gives the front the cards a color of the background color
              setTimeout(resetGuesses, delay);
              // Remember delay is a variable set to 1200 miliseconds or 1.2 seconds
              // If its a match it will run the resetGuesses function to reset the cards
              // there is also a delay of 1.2 seconds before it resets
            } else{
                setTimeout(resetGuesses, delay)
                // Even if its not a match it will run the resetGuesses function to reset the cards
                // there is also a delay of 1.2 seconds before it resets
            }
          }
previousTarget = clicked
// Ensures the same card can't be clicked twice
    }
})



