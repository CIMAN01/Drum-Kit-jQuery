// Javascript/DOM for drums

// creating an event listener for each button in the document using a for loop
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  // create an event listener for the mouse clicks corresponding to the 7 different available buttons 
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // a function call for a particular sound
    makeSound(this.innerHTML);
    // a function call for an animation  
    buttonAnimation(this.innerHTML);
  });
}

// create an event listener for each of the 7 different available keys when using a keyboard instead a of mouse
document.addEventListener("keypress", function(event) {
  // a function call for a particular sound
  makeSound(event.key);
  // a function call for an animation 
  buttonAnimation(event.key);
});


// Audio files
var audioW = new Audio("sounds/tom-1.mp3");
var audioA = new Audio("sounds/tom-2.mp3");
var audioS = new Audio("sounds/tom-3.mp3");
var audioD = new Audio("sounds/tom-4.mp3");
var audioJ = new Audio("sounds/snare.mp3");
var audioK = new Audio("sounds/crash.mp3");
var audioL = new Audio("sounds/kick-bass.mp3");

// a function for playing a sound after a key is pressed
function makeSound(key) {
  // switch-statement
  switch (key) {
    
    case "w":
      audioW.play();
      break;

    case "a":
      audioA.play();
      break;

    case "s":
      audioS.play();
      break;

    case "d":
      audioD.play();
      break;

    case "j":
      audioJ.play();
      break;

    case "k":
      audioK.play();
      break;

    case "l":
      audioL.play();
      break;

    default: console.log(key);
  }
}

// animation function
function buttonAnimation(currentKey) {
  // add animation
  document.querySelector("." + currentKey).classList.add("pressed");
  // remove animation after a 0.1 second
  setTimeout(function() {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);

}
