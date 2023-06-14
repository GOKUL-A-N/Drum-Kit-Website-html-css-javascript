
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i=0;i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTMl=this.innerHTML;
    switch(buttonInnerHTMl){
      case "w":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "s":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "d":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "j":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "k":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "l":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    }
  });
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
});
function makeSound(event){
  switch(event){
    case "w":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "a":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    case "s":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "d":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "j":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "k":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "l":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
  }
}