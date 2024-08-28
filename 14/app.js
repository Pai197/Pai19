let like = document.querySelector("svg");
let click = document.querySelector(".contenar");
let likeLogo = document.querySelector(".like-img")
let piyu = 45;
let Islike = true;



click.addEventListener("dblclick" , () => {
    if(Islike) {
    like.style = "transform: scale(1);"
    like.style.opacity=0.8;
    piyu++;
    
    likeLogo.innerHTML= `<i style="color: red
                ;"  class="ri-heart-fill"></i>
    <span id="count">${piyu}</span>`
    

setTimeout(() => {
   like.style.opacity=0;  
},1000);
setTimeout(() =>{
    like.style = "transform: scale(0);"
},1500)
Islike = false;

    }
}) 

likeLogo.addEventListener("click" , () => {

    if(Islike===false) {
    piyu--;
    likeLogo.innerHTML= `<i   class="ri-heart-line"></i>
<span id="count">${piyu}</span>`
Islike = true;
    }
})