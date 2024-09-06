var n = document.querySelectorAll(".piano").length;

for (var i = 0; i < n; i++){
    document.querySelectorAll(".piano")[i].addEventListener("click", function(){
        var pianoInnerHTML = this.innerHTML;


        makeSound(pianoInnerHTML);

    });
}

document.addEventListener("keypress", function(event) {
   makeSound(event.key); 
});

function makeSound(key) {
   switch (key) {
    case "a":
        var piano1 = new Audio("sounds/panio1.mp3");
        piano1.play();
        break;
        case "s":
        var piano2 = new Audio("sounds/panio2.mp3");
        piano2.play();
        break;
        case "d":
        var piano3 = new Audio("sounds/panio3.mp3");
        piano3.play();
        break;
        case "j":
        var piano4 = new Audio("sounds/panio4.mp3");
        piano4.play();
        break;
        case "k":
        var piano5 = new Audio("sounds/panio5.mp3");
        piano5.play();
        break;
        case "l":
        var piano6 = new Audio("sounds/panio6.mp3");
        piano6.play();
        break;
   
    default:
        break;
   }
}