// jQuery implementation


// Keyboard event handler
$(document).on("keypress", function(event) { // $(document).keypress(function(event) {...} @deprecated 
    // a function call for a particular sound
    makeSound(event.key);
    // a function call for an animation 
    buttonAnimation(event.key);
});


// Mouse event handler 
$(".drum").on("click", function() { // $(".drum").click(function() {...} @deprecated  
    var buttonClicked = $(this).html(); // jQuery syntax for this.innerHTML
    makeSound(buttonClicked);
 });


// Audio files
var audioW = new Audio("sounds/tom-1.mp3");
var audioA = new Audio("sounds/tom-2.mp3");
var audioS = new Audio("sounds/tom-3.mp3");
var audioD = new Audio("sounds/tom-4.mp3");
var audioJ = new Audio("sounds/snare.mp3");
var audioK = new Audio("sounds/crash.mp3");
var audioL = new Audio("sounds/kick-bass.mp3");


// makeSound function
function makeSound(key) {
    
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
    $("." + currentKey).addClass("pressed");
    // remove animation after a 0.1 second
    setTimeout(function() {
      $("." + currentKey).removeClass("pressed");
    }, 100);
}

 
