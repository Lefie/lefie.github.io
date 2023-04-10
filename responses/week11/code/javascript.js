
const p = document.createElement("p");
p.setAttribute("id","special");
const txt = document.createTextNode("I am p");
p.appendChild(txt);
document.body.appendChild(p);

const btn = document.querySelector("button#unique");

let main = document.getElementById("main");


btn.addEventListener("click",message);

function message(){
    console.log("you clicked");
    main.style.backgroundColor = "yellow"
}
