const home = document.querySelector("#home") as HTMLButtonElement;
const divImages = document.querySelector("#div-images") as HTMLDivElement;
const scores = document.querySelector("#scores") as HTMLParagraphElement;

home.addEventListener("click", () => {
    console.log('go home')
    divImages.innerHTML = `<img src="images/icon-3.png"></img><br/>`;
    window.location.href = "index.html"
});


window.addEventListener("load", () => {

    const correct = parseInt(localStorage.getItem("correct") || `0`);
    const skipped = parseInt(localStorage.getItem("skipped") || `0`);
    scores.innerText = `Correct: ${correct}\nSkipped: ${skipped}`;

    const numberOfImages = parseInt(localStorage.getItem("number-of-images") || `0`);
    for (let i = 1; i <= numberOfImages; i++) {
        const img = localStorage.getItem(`image-${i}`) || "";
        console.log(img)
        divImages.innerHTML += `<img src="${img}" width="80%"></img><br/>`;
    }

});