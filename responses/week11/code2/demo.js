
const html = document.querySelector("html");
html.style.overflow = "hidden"
html.style.height = "100%";
const body = document.querySelector("body");
const container = document.querySelector(".scroll-container");
container.style.border = "5px solid white";
container.style.overflow = "scroll";
container.style.flexBasis = "50%"
container.style.height = "60%"
container.style.width = "80%"
container.style.padding = "20px";
container.style.rowGap = "150px"
body.style.fontSize = "2em"
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.justifyContent = "center"
body.style.alignItems="center"
body.style.backgroundColor = "pink";
body.style.color = "#4c3228";
body.style.height = "100%";
body.style.position = "asbolute"
body.style.overflow = "hidden"







container.addEventListener("dblclick", () => {
    const message = document.querySelector("p#message")
    message.innerHTML = "💀You are trapped in here forever 💀 "
    container.style.border = "none";
container.style.overflow = "none";
container.style.flexBasis = "none"
container.style.height = "none"
container.style.padding = "none";
body.style.backgroundColor = "gray"
body.style.color = "#453d35"
body.style.fontWeight = "900"
body.style.fontFamily = "Impact,Charcoal,sans-serif";
document.querySelector("#red").style.color = "red";
document.querySelector("#red").style.backgroundColor = "pink";
document.querySelector("#red").style.fontSize = "3em";
const p1 = document.querySelector("#p1")
p1.style.backgroundColor = "#675e50"
p1.style.color ="#e3cfb6"
p1.style.direction = "rtl";
p1.style.fontSize = "2.3em"
document.querySelector("#green").style.color = "#e3cfb6";
document.querySelector("#green").style.backgroundColor = "#675e50";
document.querySelector("#green").style.fontSize = "2.6em";
const p3 = document.querySelector("#p3")
p3.style.backgroundColor = "pink"
p3.style.color ="red"
p3.style.fontSize = "2.3em"
document.querySelector("#purple").style.color = "purple";
document.querySelector("#purple").style.backgroundColor = "red";
document.querySelector("#purple").style.fontSize = "2.1em";

const media = document.querySelector("#media")
const p4 = document.querySelector("#p4")
const img = document.createElement("img");
const click = document.createElement("p")
click.style.color = "black"
click.innerHTML = "click on img to spin|| double click anywhere in container to add more"
img.src = "../img/cns.png"
img.style.display="block"
media.insertBefore(img,p4);
media.insertBefore(click,p4);
img.style.maxWidth = "40%"
img.addEventListener("click",()=>{
    img.classList.add('rotating')
});


});

//images
const image1 = document.createElement("img");
image1.src = "../img/book.jpeg";

const image2 = document.createElement("img");
image2.src = "../img/camera.jpg";

const image3 = document.createElement("img");
image3.src = "../img/movie.jpg";

const image4 = document.createElement("img");
image4.src = "../img/wheel.jpg";

const image5 = document.createElement("img");
image5.src = "../img/scooter.jpg";

const image6 = document.createElement("img");
image6.src = "../img/bike.jpg";

const image7 = document.createElement("img");
image7.src = "../img/bags.jpg";

const image8 = document.createElement("img");
image8.src = "../img/pen.jpg";

const image9 = document.createElement("img");
image9.src = "../img/utensils.jpg";

//choices

const choice1 = document.getElementById("eye-extension");
const choice2 = document.getElementById("foot-extension");
const choice3 = document.getElementById("hand-extension");

choice1.style.fontSize = "1em";
choice2.style.fontSize = "1em"
choice3.style.fontSize = "1em"

const sanityCheck = (attribute, img1, img2, img3) => {
  if (document.querySelector(attribute).contains(img1)) {
    document.querySelector(attribute).removeChild(img1);
  }

  if (document.querySelector(attribute).contains(img2)) {
    document.querySelector(attribute).removeChild(img2);
  }

  if (document.querySelector(attribute).contains(img3)) {
    document.querySelector(attribute).removeChild(img3);
  }
};

const match = (val1, val2, attribute, img1, img2, img3, img) => {
  if (val1 === val2) {
    sanityCheck(attribute, img1, img2, img3, img);
    img.style.display = "block";
    img.style.height = "40vh";
    img.style.width = "auto";
    img.style.padding = "20px"

    document.querySelector(attribute).appendChild(img);
  }
};

choice1.addEventListener("change", (event) => {

  if (event.target.value === "none") {
    sanityCheck("#c1", image1, image2, image3);
  }

  match(event.target.value, "books", "#c1", image1, image2, image3, image1);
  match(event.target.value, "camera", "#c1", image1, image2, image3, image2);
  match(event.target.value, "movies", "#c1", image1, image2, image3, image3);
});

choice2.addEventListener("change", (event) => {
  if (event.target.value === "none") {
    sanityCheck("#c2", image4, image5, image6);
  }

  match(event.target.value, "wheel", "#c2", image4, image5, image6, image4);
  match(event.target.value, "bike", "#c2", image4, image5, image6, image6);
  match(event.target.value, "scooter", "#c2", image4, image5, image6, image5);
});

choice3.addEventListener("change", (event) => {
  if (event.target.value === "none") {
    sanityCheck("#c3", image7, image8, image9);
  }

  match(event.target.value, "bags", "#c3", image7, image8, image9, image7);
  match(event.target.value, "utensils", "#c3", image7, image8, image9, image9);
  match(event.target.value, "pens", "#c3", image7, image8, image9, image8);
});
