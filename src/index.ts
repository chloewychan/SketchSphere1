
const numberOfPlayers = document.querySelector("#number-of-players") as HTMLInputElement;
const teamName = document.querySelector("#team-name") as HTMLInputElement;
const startGame = document.querySelector("#start-game") as HTMLButtonElement;
const viewPrompts = document.querySelector("#view-prompts") as HTMLButtonElement;

startGame.addEventListener("click", () => {
    localStorage.setItem("number-of-players", numberOfPlayers.value);
    localStorage.setItem("team-name", teamName.value);
    window.location.href = "sketch.html"
});

viewPrompts.addEventListener("click", () => {
    window.location.href = "prompts.html"
});
