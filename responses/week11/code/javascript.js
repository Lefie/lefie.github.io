const eater = document.querySelector("div#unique");
eater.style.position = "relative";


eater.style.height = "15vh"
eater.style.width = "15vh"

const btns = document.getElementsByClassName("btn-size");

for(let i = 0 ; i < btns.length;i++){
    btns[i].style.fontSize = "1.8em";
    btns[i].style.height = "100px";
    btns[i].style.width = "150px";
    btns[i].style.backgroundColor = "yellow";
    btns[i].style.border = "none";
    btns[i].style.borderRadius = "20px";
    btns[i].style.transition = "all 0.6s";

    btns[i].addEventListener("mouseover",()=>{
        btns[i].style.backgroundColor = "pink";
        btns[i].style.cursor = "pointer";
        btns[i].style.height = "115px";
        btns[i].style.width = "150px";
    })

    btns[i].addEventListener("mouseout",()=>{
        btns[i].style.backgroundColor = "yellow";
        btns[i].style.cursor = "default";
        btns[i].style.height = "100px";
        btns[i].style.width = "150px";
    })


}



const dot = document.querySelector("div#dot");


const leftBtn = document.querySelector("button#left");
const rightBtn = document.querySelector("button#right");
const topBtn = document.querySelector("button#top");
const bottomBtn = document.querySelector("button#bottom");



leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);
topBtn.addEventListener("click", moveUp);
bottomBtn.addEventListener("click", moveDown);

function deserialize(pxString) {
  // ####px
  pxString = pxString.replace("px", "");
  return parseInt(pxString);
}

function serialize(pxVal) {
  return `${pxVal}px`;
}

function moveLeft(e) {
  console.log(eater.style.left);
  let val = deserialize(eater.style.left);
  if(!val) val = 0;
  eater.style.left = serialize(val - 10);

}

function moveRight(e) {
    let val = deserialize(eater.style.left);
  if(!val) val = 0;
  eater.style.left = serialize(val + 10);
 
}

function moveUp(){
    let val = deserialize(eater.style.top);
    if(!val) val = 0;
    eater.style.top = serialize(val - 10);

}

function moveDown(){
    let val = deserialize(eater.style.top);
    if(!val) val = 0;
    eater.style.top = serialize(val + 10);
    
}


