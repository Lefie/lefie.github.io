

const mask = document.querySelector(".mask")
const btn = document.querySelector(".btn")

gsap.set(mask, {
    backgroundColor:"rgb(140, 197, 244)"
})

tween = gsap.to(mask, {
    scaleX:0,
    transformOrigin:"left",
    delay:0.5,
    duration:2,
    opacity:1,
    onComplete: () => {
        gsap.to("span", {
            opacity:1,
            stagger: .2,
            duration: 1.3,
            onComplete: () => {
              gsap.to("span", {
                y:-20,
                yoyo:true,
                duration:1.4,
                ease: "sine.inOut",
                repeat:-1
              })

              gsap.to(".read", {
                opacity:1,
                y:100
              })
            }
        })
    },
    paused: true
})

btn.addEventListener("click", () => {
    tween.play()
    document.querySelector(".btn").remove()
})






