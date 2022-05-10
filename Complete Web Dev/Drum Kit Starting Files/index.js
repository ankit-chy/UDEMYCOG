var drumBtn = document.querySelectorAll(".drum")

for(var i = 0; i<drumBtn.length; i++){
    drumBtn[i].addEventListener("click", function (){
        alert("I got Clicked");
    })
}