const carrossel = document.querySelector(".carrossel"),
firstImg = carrossel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstimgwidth = firstImg.clientWidth + 665; 


arrowIcons.forEach (icon => {
icon.addEventListener("click", () => {
    if(icon.id == "left"){
        carrossel.scrollLeft -= firstimgwidth;
    } else {
        carrossel.scrollLeft += firstimgwidth;
    }
   }); 
});

