gsap.from("#page1 #box", {
      y: 100,
      duration: 2,
      rotet: 360,
      scale: .25,
      opacity: 0,
      scrollTrigger: "#page1 #box"
})
gsap.from("#page2 #box", {
      y: 100,
      duration: 2,
      rotet: 360,
      scale: .25,
      opacity: 0,
      scrollTrigger: {
            trigger: "#page2 #box",
            scroller: "body",
            markers: true,
            start: "top 70%",
            end: "top 30%",
            scrub: 2
      }
})
gsap.to("#page3 h1", {
      transform: "translateX(-80%)",
      scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            markers: true,
            start: "top 0%",
            end: "top -150%",
            scrub: true,
            pin: true
      }

})



gsap.from("#page4 #box", {
      y: 100,
      duration: 2,
      rotet: 360,
      scale: .25,
      opacity: 0,
      scrollTrigger: {
            trigger: "#page4 #box",
            scroller: "body",


      }
})