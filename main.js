document.addEventListener("DOMContentLoaded", function (event) {
    const elements = document.getElementsByTagName("path");
    let counter = 0;
    const group = 14;
    let positiveStatusCounter = group;
    let isPositive = true;
    [...elements].forEach(el => {
        counter += 20;
        if (--positiveStatusCounter == 0) {
            isPositive = !isPositive;
            positiveStatusCounter = group;
            console.log(isPositive)
        }
        if (el) {
            setScale(el, isPositive);
            // el.style.display = "none";
            setTimeout(() => {
                //   el.style.display = "block";
                el.style.transform = "scale(1)";
                el.style.transition = "2s linear 1s";
            }, counter);
        }
    });
});

function setScale(el, isPositive) {
    el.style.transform = isPositive? "scaleY(1.1)" : "scaleY(0.99)";
}