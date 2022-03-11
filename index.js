
    // this for when you click on the button on the browser.
    for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            makeSound(this.innerHTML);
            buttonAnimation(this.innerHTML);
        });
    }

    // this is for when you use your the key  keyboard
    document.addEventListener("keypress", function () {
        makeSound(event.key);
        buttonAnimation(event.key);
    });

    // this function makes the sounds
    function makeSound(button) {
        switch (button) {
            case  "s":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

             case "d":
                 audio = new Audio("sounds/tom-2.mp3");
                 audio.play();
                 break;

            case "j":
                 audio = new Audio("sounds/tom-3.mp3");
                 audio.play();
                 break;

           case  "k":
                 audio = new Audio("sounds/tom-4.mp3");
                 audio.play();
                 break;
           
           case  "l":
                  audio = new Audio("sounds/snare.mp3");
                  audio.play();
                  break;
                 
          case  "w":
                  audio = new Audio("sounds/kick-bass.mp3");
                  audio.play();
                  break;
          
          case  "a":
                  audio = new Audio("sounds/crash.mp3");
                  audio.play();
                  break;

            default:
                break;
        }
    }

    // this function will add an animation 
    // when a key get pressed by adding a class to the html element
    function buttonAnimation(button) {
        var buttonPressed = document.querySelector("." + button);
        buttonPressed.classList.add("pressed");
        setTimeout(function() {
            buttonPressed.classList.remove("pressed");
        }, 100);
    }