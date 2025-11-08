for (var i = 0 ; i < document.querySelectorAll(".drum").length; i++)
document.querySelectorAll(".drum")[i].addEventListener("click", () => {
  
  console.log(this);

    if (this.document.activeElement.className == 'w drum') {
        const audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    if (this.document.activeElement.className == 'a drum') {
        const audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
     if (this.document.activeElement.className == 's drum') {
        const audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }
     if (this.document.activeElement.className == 'd drum') {
        const audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
    if (this.document.activeElement.className == 'j drum') {
        const audio = new Audio('sounds/crash.mp3');
        audio.play();
    }
    if (this.document.activeElement.className == 'k drum') {
        const audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
    if (this.document.activeElement.className == 'l drum') {
        const audio = new Audio('sounds/snare.mp3');
        audio.play();
    }

}); 

document.addEventListener("keydown", function (event) {
 // alert("Keydown");
  console.log(event.key)

  if (event.key=='w') {
     const audio = new Audio('sounds/tom-1.mp3');
        audio.play();
  }
   if (event.key == 'a') {
        const audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
     if (event.key == 's') {
        const audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }
     if (event.key == 'd') {
        const audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
    if (event.key == 'j') {
        const audio = new Audio('sounds/crash.mp3');
        audio.play();
    }
    if (event.key == 'k') {
        const audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
    if (event.key == 'l') {
        const audio = new Audio('sounds/snare.mp3');
        audio.play();
    }
} );



 
