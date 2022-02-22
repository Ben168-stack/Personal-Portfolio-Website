// Typing animation
var i =0;
var txt = "Nice to meet you"
var speed= 150;
function type(){
    document.getElementById("type").innerHTML
        +=txt.charAt(i);
        
    i++;
    setTimeout(type,speed);
    //This basically means every 0.15 seconds it will run the function
    // Meaning a word is typed every 0.15 seconds or every 150 miliseconds

}
type()

// Navbar code
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll('.nav__link')

// () => is an arrow function
// () =>{} and function(){} are the same

navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open')
    // toggle if the class exist it removes the class if not it adds the class
});
// The forEach() method calls a function once for each element in an array, in order.
navLinks.forEach(link =>{
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open')
    })
})
// for each link it will add an event listener when you click on
// any of the links it will remove the class of .nav-open which is how
// the navbar closes when a navigation link is clicked






