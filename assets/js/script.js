gsap.registerPlugin(ScrollTrigger);

// about me txt fades right
gsap.to(".about-txt", {
  x: 100,
  duration: 1,
  setpin: ".about-txt",
  scrollTrigger: {
          trigger: ".about",
          start: 100,
          setpin: ".about"
  }
})

// headshot pic fades left
gsap.to(".about-img", {
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    start: 100
  }
})

// span fades up
gsap.to(".span", {
  y: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".span",
    start: 400
  }
})

// skills-txt fades right
gsap.to(".skills-txt", {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".skills",
    start: 1000
  }
})

// skills-txt fades up
gsap.to(".skills-txt", {
  y: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".skills",
    start: 600
  }
})

// skills-img fades left
gsap.to(".skills-img", {
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".skills-txt",
    start: 1000
  }
})

// skills-img fades up
gsap.to(".skills-img", {
  y: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".skills-img",
    start: 600
  }
})

// span fades up
gsap.to(".span1", {
  y: -100,
  duration: 2,
  scrollTrigger: {
    trigger: ".span1",
    start: 1500
  }
})

// ed-exp heading fades right
gsap.to(".ed-exp", {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".ed-exp",
    start: 2000
  }
})

// humber fades right
gsap.to(".humber", {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".hr",
    start: 2000
  }
})

// hr line fades right
gsap.to(".hr", {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".hr",
    start: 2000
  }
})

// fanshawe fades right
gsap.to(".fanshawe", {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".fanshawe",
    start: 2500
  }
})

// hr line fades right
gsap.to(".hr1", {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".hr1",
    start: 2500
  }
})

// st-josephs fades right
gsap.to(".st-josephs", {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".st-josephs",
    start: 2750
  }
})

// hr line fades right
gsap.to(".hr2", {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".hr2",
    start: 2750
  }
})

// wrk-exp heading fades right
gsap.to(".wrk-exp", {
  y: -100,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".fantasy",
    start: 3000
  }
})

// fantasy fades right
gsap.to(".fantasy", {
  y: -100,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".fantasy",
    start: 3000
  }
})

// hr line fades right
gsap.to(".hr3", {
  y: -100,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".hr3",
    start: 3000
  }
})

// project work fades right
gsap.to(".project-wrk", {
  y: -100,
  duration: 2,
  scrollTrigger: {
    trigger: ".span2",
    start: 3000
  }
})

// project-txt fades right
gsap.to(".project-txt", {
  y: -100,
  duration: 2,
  scrollTrigger: {
    trigger: ".span2",
    start: 3000
  }
})

// hr line fades right
gsap.to(".hr4", {
  y: -100,
  duration: 2,
  scrollTrigger: {
    trigger: ".span2",
    start: 3000
  }
})

// span fades up
gsap.to(".span2", {
  y: -200,
  duration: 2,
  scrollTrigger: {
    trigger: ".contact",
    start: 3000
  }
})

// footer fades up
gsap.to(".footer", {
  y: -150,
  duration: 4,
  scrollTrigger: {
    trigger: ".copyright",
    start: 1000
  }
})