import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

export const hoverGradient = () => {
    const tl =  gsap.timeline({});
    const txt = document.querySelector("#head");
    txt.addEventListener("mouseover",() => tl.to("#head",{backgroundPosition:"1000px 1000px", duration:1}));
    txt.addEventListener("mouseleave",() => tl.to("#head",{backgroundPosition:"0px 0px", duration:1}));
}