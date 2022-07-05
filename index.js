//detecting if the buttons are pressed ???? 

for(var i=0; i<document.querySelectorAll(".meme").length;i++){
    document.querySelectorAll(".meme")[i].addEventListener("click", function () {

    var buttonInnerHtml = this.innerHTML;
        makesound(buttonInnerHtml);   
        buttonAnimation(buttonInnerHtml);
    });
}

//next 3 lines detect if keyboard buttons are pressed ??
document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});


function makesound(key){
    switch (key) {
        case "w" :
            var meme1 = new Audio("sounds/meme1.mp3");
            meme1.play();
            break;
        case "a":
            var meme2 = new Audio("sounds/meme2.mp3");
            meme2.play();
            break;
        case "s":
            var meme3 = new Audio("sounds/meme3.mp3");
            meme3.play();
            break;
        case "d":
            var meme4 = new Audio("sounds/meme4.mp3");
            meme4.play();
            break;
        case "j":
            var meme5 = new Audio("sounds/meme5.mp3");
            meme5.play();
            break;
        case "k":
            var meme6 = new Audio("sounds/meme6.mp3");
            meme6.play();
            break;
        case "l":
            var meme7 = new Audio("sounds/meme7.mp3");
            meme7.play();
            break;
        case "W" :
            var meme8 = new Audio("sounds/meme1.mp3");
            meme8.play();
            break;
        case "A":
            var meme9 = new Audio("sounds/meme2.mp3");
            meme9.play();
            break;
        case "S":
            var meme10 = new Audio("sounds/meme3.mp3");
            meme10.play();
            break;
        case "D":
            var meme11 = new Audio("sounds/meme4.mp3");
            meme11.play();
            break;
        case "J":
            var meme12 = new Audio("sounds/meme5.mp3");
            meme12.play();
            break;
        case "K":
            var meme13 = new Audio("sounds/meme6.mp3");
            meme13.play();
            break;
        case "L":
            var meme14 = new Audio("sounds/meme7.mp3");
            meme14.play();
            break;
        default: console.log(buttonInnerHtml);
            
    }
}


//adding shadow to the button clicked/key pressed using css class and queryselector
function buttonAnimation(currentkey){
    var actievButton = document.querySelector("." + currentkey);

    actievButton.classList.add("pressed");
    setTimeout(function (){
        actievButton.classList.remove("pressed")
    }, 100);
}