let different = ["MERN STACK DEVELOPER", "WEBSITE DEVELOPER", "LEARNER", "CODER"];

let index = 0; 
let heroTextElement = document.getElementById("heroText");

function typeText(text, callback) {
    let currentIndex = 0;
    heroTextElement.innerHTML = ""; 
    let typingInterval = setInterval(function() {
        heroTextElement.innerHTML += text[currentIndex];
        currentIndex++;
        if (currentIndex === text.length) {
            clearInterval(typingInterval);
            setTimeout(callback, 2000); 
        }
    }, 100); 
}

function changeText() {
    typeText(different[index], function() {
        index = (index + 1) % different.length; 
        changeText(); 
    });
}

changeText();