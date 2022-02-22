// NavBar code
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
var txt = "Hit me up!"
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

// Form JavaScript
    var form = document.getElementById("my-form");
    var status2 = document.getElementById('status')

    form.addEventListener("submit",function(e){
        success()
        setTimeout(reset,6000)
        // upon submit it runs the success function
    })


    function success(){
        status2.classList.add('success')
        
    }
    function reset(){
        status2.classList.remove('success')
        status2.classList.remove('error')
        status2.innerHTML=''
    }
    
    
    
    async function handleSubmit(event) {
      event.preventDefault();
      //event.preventDefault() prevents the link from activating which brings you to the thank you page.
    //   Not necessary to use the word event its just a name .preventDefault is what prevents the page from exiting
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      // the fetch api can retrieve the json file
      // firstly makes the request to retrieve the json file and take the json content
      // and pass it as a regular js object
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
            // to test error message remove this accept,(warning only 50 submissions a month )
            //even if there is an error this counts as a submission
        }
      // .then and catch are like a try and except in python, if there is an error
      // maybe link is wrong or server is down it will give an error with .catch
      // however if everything is normal it will show the success message with .then
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        status2.classList.add('error')
      });
    }
    form.addEventListener("submit", handleSubmit)
    // When you submit the form, it runs the function 'handleSubmit'
   