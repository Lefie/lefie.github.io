
gsap.set("h1", {
    yPercent:100
})

gsap.set(".line", {
    scaleX:0,
    transformOrigin:"left"
})

gsap.set(".img-set p", {
    yPercent:60
})

gsap.set(".img-set span", {
    opacity:0
} )

gsap.set('.imgs', {
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
})

gsap.set(".mask", {
    borderTopWidth:"0px",
    borderLeftWidth: "0px",
    borderBottomWidth:"0px",
    borderRightWidth:"0px"
})

tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.middle',
        markers:false,
        start:"top 50%",
        end:"bottom bottom",
        toggleActions: "play none play reverse",
        pin:true,
    },
    defaults: {
        ease: "power4.inOut",
    }
})

tl
.to("h1", {
    yPercent:0
})
.to('.imgs', {
    clipPath:'polygon(0 0, 100% 0, 100% 80%, 0 30%)',
    stagger:.1,
    duration:1,
},"-=.8")
.to('.imgs', {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    stagger:.1,
    duration:1
},"<")
.to(".line", {
    scaleX:1
},"-=.8")
.to(".img-set p", {
    yPercent:-80
},"-=.8")
.to(".img-set span", {
    opacity:1
},"<")
.to(".mask", {
    borderTopWidth:"5px",
    borderRightWidth:"5px"
})


let imgSets = gsap.utils.toArray('.img-set')

imgSets.forEach(imgSet => {
    let img = imgSet.querySelector('.imgs')
    let btn = imgSet.querySelector('.btn')
    
    imgSet.addEventListener("mouseenter", () => {
        console.log("hovering")
        
        gsap.fromTo(img, {
            filter: "brightness(100%)",
        },
        {
           filter: "brightness(50%)",
           ease: "power4.in",
           duration: .2
        })
       
        gsap.to(btn, {
            autoAlpha: 1,
            duration: .1,
            ease: "power2.out"
        })
    })

    imgSet.addEventListener("mouseleave", () => {
        gsap.to(img, {
            filter: "brightness(100%)",
            duration: .4
        })

        gsap.to(btn, {
            autoAlpha: 0,
            duration: .1,
            ease: "power2.in"
        })
    })
})

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)




