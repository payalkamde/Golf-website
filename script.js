// GSAP is a JavaScript library for building high-performance animations that work in **every** major browser. 
// Animate CSS, SVG, canvas, React, Vue, WebGL, colors, strings, motion paths, generic objects...anything JavaScript can touch!
//  No other library delivers such advanced sequencing,
//  reliability, and tight control while solving real-world problems on millions of sites. 
// GSAP works around countless browser inconsistencies; your animations **just work**.
//   At its core, GSAP is a high-speed property manipulator, updating values over time with extreme accuracy.
//  It's up to 20x faster than jQuery! See https://greensock.com/why-gsap/ for what makes GSAP so special.

const crsr = document.querySelector("#cursor");
const cblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    cblur.style.left = dets.x-150+"px";
    cblur.style.top = dets.y-150+"px";
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers: true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})