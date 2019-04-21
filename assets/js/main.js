// document.addEventListener("DOMContentLoaded", function () {
//     scaleSVG("svganim");
// });

function scaleSVG(svgId) {
    console.log("scale SVG")
    const elements = document.querySelectorAll(`svg#${svgId} path`);
    const delay = 100; //timeout delay value
    //sort elements by their "d" attribute length (shorter paths first)
    const list = [...elements].sort((a, b) =>a.getAttribute("d").length - b.getAttribute("d").length);
    let scaleValue = 1.0; //initial value for scale (default 1)
    let scaleStep = 0; //Initial step for decreasing value

    //Set initial (distorted) scales
    list.forEach(el => {
        scaleStep += 0.0002; //increase scale step
        scaleValue = scaleValue - scaleStep.toFixed(4); //decrease value by step
        el.style.transform = `scaleY(${scaleValue}) scaleX(${scaleValue})`;
        el.style["transform-origin"] = `center center`;
        el.style.transition = "linear";
    });

    //Restore default scales after some delay to make changes visible
    setTimeout(() => {
        list.forEach(el => {
            el.style.transform = "scale(1)"; //set to original scale
            el.style.transition = "1s linear 1s";
        })
    }, delay);
}