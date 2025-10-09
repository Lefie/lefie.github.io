
const mysteries = document.querySelector(".mysteries")
const rosary_img = document.querySelector(".rosary-img")
const joyful = document.querySelector(".joyful")
const sorrowful = document.querySelector(".sorrowful")
const glorious = document.querySelector(".glorious")
const luminous = document.querySelector(".luminous")
const explanation1 = document.querySelector(".explanation1")
const explanation2 = document.querySelector(".explanation2")

joyful.addEventListener("mouseenter",()=>{
    mysteries.style.backgroundColor = "#f9cb34"
    mysteries.style.transition = "0.3s ease-in-out"
    gsap.to(joyful, {
        scaleY:1.2,
        scaleX:1.2
    })
})

joyful.addEventListener("mouseleave",()=>{
    mysteries.style.backgroundColor = "#ffc0cbfa"
    mysteries.style.transition = "0.3s ease-in-out"
    gsap.to(joyful, {
        scaleY:1,
        scaleX:1
    })
})

sorrowful.addEventListener("mouseenter",()=>{
    mysteries.style.backgroundColor = "#234C6A"
    mysteries.style.transition = "0.3s ease-in-out"
    gsap.to(sorrowful, {
        scaleY:1.2,
        scaleX:1.2
    })
})

sorrowful.addEventListener("mouseleave",()=>{
    mysteries.style.backgroundColor = "#ffc0cbfa"
    mysteries.style.transition = "0.3s ease-in-out"
    gsap.to(sorrowful, {
        scaleY:1,
        scaleX:1
    })
})

luminous.addEventListener("mouseenter",()=>{
    mysteries.style.backgroundColor = "#fbfbfb"
    mysteries.style.transition = "0.3s ease-in-out"
    gsap.to(luminous, {
        scaleY:1.2,
        scaleX:1.2
    })
})

luminous.addEventListener("mouseleave",()=>{
    mysteries.style.backgroundColor = "#ffc0cbfa"
    mysteries.style.transition = "0.3s ease-in-out"
    gsap.to(luminous, {
        scaleY:1,
        scaleX:1
    })
})

glorious.addEventListener("mouseenter",()=>{
    mysteries.style.backgroundColor = "#FA812F"
    mysteries.style.transition = "0.3s ease-in-out"
    gsap.to(glorious, {
        scaleY:1.2,
        scaleX:1.2
    })
})

glorious.addEventListener("mouseleave",()=>{
    mysteries.style.backgroundColor = "#ffc0cbfa"
    mysteries.style.transition = "0.3s ease-in-out"
    gsap.to(glorious, {
        scaleY:1,
        scaleX:1
    })
})

const tl = gsap.timeline({defaults:{
    ease:"power3.out",
    duration:3}})

gsap.set(rosary_img, {
    width:"300px"
})

gsap.set(mysteries, {
    scaleY:0
})

gsap.set(".text-container", {
    y: "-22em",
    x: "15em",
})

tl
.to(rosary_img, {
    width:"150px",
},"+=1.5")
.to(rosary_img, {
    x:"-15em"
},"-=1.5")
.to([explanation1, explanation2], {
    x:0,
    stagger:.2,
    ease: "power4.out",
    
},"-=2")
.to(mysteries, {
    scaleY:1,
    transformOrigin:"top",
    y:-200
},"-=2.5")
.to(joyful, {
    x:0
},"-=1.5")
.to(sorrowful, {
    x:0
},"-=2.1")
.to(luminous, {
    x:0
},"-=1.5")
.to(glorious, {
    x:0
},"-=1.5")


