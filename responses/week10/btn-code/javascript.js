

const btn = document.querySelector("button#unique");
const whatever = document.querySelector("div#what");
whatever.style.position = "relative";

// btn.style.position = "relative"
// btn.style.bottom = "50px"


let main = document.getElementById("main");


btn.addEventListener("click",message);

let count = 0

function message(){

    if(count == 10){
        console.log("10 times");
        count = 0;
        btn.style = "none"
        return
    }
    count ++;
    console.log("you clicked");
    console.log(count);
    
    if(count == 1){
        btn.style.outline = "thick dotted #0000FF";
        btn.style.backgroundColor = "red";
        btn.style.color = "white";
        whatever.style.marginLeft = "20px"
    }

    if(count == 2){
        btn.style.outline = "thick solid yellow"
        whatever.style.marginLeft = "40px"
    }
    if(count == 3){
        btn.style.outline = "thick solid red"
        whatever.style.marginLeft = "60px"
    }
    if(count == 4){
        btn.style.outline = "thick solid green"
        whatever.style.marginLeft = "80px"
    }

   
}
