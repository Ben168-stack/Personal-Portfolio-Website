// Navbar code
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open')
});

navLinks.forEach(link =>{
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open')
    })
})
// Typing animations
var i =0;
var txt = "Please take a look"
var speed= 150;
function type(){
    
    if(i===6){
        document.getElementById("type").innerHTML+="<br>"
    }else{
        document.getElementById("type").innerHTML+=txt.charAt(i);   
    }
        
        
    i++;
    setTimeout(type,speed);
    //This basically means every 0.15 seconds it will run the function
    // Meaning a word is typed every 0.15 seconds or every 150 miliseconds

}
type()
