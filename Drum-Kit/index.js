/*var set_no=document.querySelectorAll(".set .drum").length;
for (var i=0;i<=set_no;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var bn= this.innerHTML;
   makesound(bn);
   ButtonAnimation(bn);

   });
}
   

document.addEventListener("keypress", function(event){
   makesound(event.key);
   ButtonAnimation(event.key);
});
   
   function makesound(key){

      switch (key) {
         case 'w':
            var audio1=new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
         case 'a':
            var audio2=new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
         case 's':
            var audio3=new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;   
         case 'd':
            var audio4=new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
         case 'j':
            var audio5=new Audio("sounds/crash.mp3");
            audio5.play();
            break; 
         case 'k':
            var audio6=new Audio("sounds/kick-bass.mp3");
            audio6.play();
            break;           
         case 'l':
            var audio7=new Audio("sounds/snare.mp3");
            audio7.play();
            break;
         default: console.log(key);
            break;
}
}

function ButtonAnimation(currentKey){

   var ck=document.querySelector("."+currentKey);
   ck.classList.add("pressed");
   setTimeout(function(){
      ck.classList.remove("pressed");
   }, 100);
}*/

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress",function(event){
  
  makeSound(event.key);
  buttonAnimation(event.key);
});

 



function makeSound(key) {

  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}



