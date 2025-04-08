const prompts = [
    "Cat",
    "Dog",
    "House",
    "Tree",
    "Car",
    "Bird",
    "Sun",
    "Moon",
    "Star",
    "Boat",
    "Ice cream",
    "Pizza",
    "Laptop",
    "Computer",
    "Guitar",
    "Football",
    "Soccer ball",
    "Cloud",
    "Rainbow",
    "Dragon",
    "Superman",
    "Princess",
    "King",
    "Queen",
    "Witch",
    "Vampire",
    "Zombie",
    "Shark",
    "Elephant",
    "Giraffe",
    "Pineapple",
    "Banana",
    "Monkey",
    "Snowman",
    "Christmas tree",
    "Pumpkin",
    "Birthday cake",
    "Castle",
    "Angel",
    "Devil",
    "Wizard",
    "Cactus",
    "Unicorn",
    "Hot dog",
    "Hamburger",
    "Frisbee",
    "Football helmet",
    "Mummy",
    "Treasure chest",
    "Spaceship"
];

const pPrompts = document.querySelector("#prompts") as HTMLParagraphElement;
const pPrompt = document.querySelector("#prompt") as HTMLParagraphElement;
const newPrompt = document.querySelector("#new-prompt") as HTMLButtonElement;
const goHome = document.querySelector("#go-home") as HTMLButtonElement;

goHome.addEventListener("click", () => {
    window.location.href = "index.html"
});

newPrompt.addEventListener("click", () => {
    pPrompt.innerHTML = `Prompt: ${prompts[Math.floor(Math.random() * prompts.length)]}`;
});

window.addEventListener("load", () => {    

    for (let i = 0; i < prompts.length; i++) {
        pPrompts.innerHTML += `<li>${prompts[i]}</li>`;
    }

    pPrompt.innerHTML = `Prompt: ${prompts[Math.floor(Math.random() * prompts.length)]}`;

});
