
    for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            this.style.color = "blue";
        });

    }

















    // var numberOfButtons = document.querySelectorAll(".drum").length;

    // for (let i = 0; i < numberOfButtons; i++) {
         
    //    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
           
    //         this.style.color = "blue";

            

    //    }); 
    // };