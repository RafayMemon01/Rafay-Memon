window.onload = ()=>{
    setTimeout(()=>{
        document.querySelector(".spinnerContainer").style.display = "none";
        document.querySelector(".container").style.display = "block";
    },1000) //3 sec normal decrrease for developmenr
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    // const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const newTheme = currentTheme === 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  // Detect the theme preference on load and apply it
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // If no theme is saved, detect the user's system preference
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', userPrefersDark ? 'dark' : 'light');
    }
  });
  
  // Toggle theme on button click
  document.getElementById('mode').addEventListener('click', toggleTheme);

  const burgerBtn = document.getElementById("burgerBtn");
const mobileNav = document.getElementById("mobileNav");

burgerBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
});

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

document.getElementById('copy-button').addEventListener('click', () => {
  const email = document.getElementById('email').innerText;
  navigator.clipboard.writeText(email).then(() => {
    alert('Email address copied to clipboard!');
  });
});


document.getElementById("quoteForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent default form submission

  let form = this;
  let submitButton = form.querySelector(".quote-btn");
  let buttonText = submitButton.querySelector(".btn-text");
  let tickIcon = submitButton.querySelector(".tick-icon");

  // Show "Sending..."
  buttonText.textContent = "Sending...";
  submitButton.disabled = true;

  try {
      let formData = new FormData(form);
      let response = await fetch("https://formspree.io/f/mqapzyjq", {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" },
      });

      if (response.ok) {
          // Show tick ✅
          buttonText.style.display = "none"; // Hide text
          tickIcon.style.display = "inline"; // Show tick
      } else {
          alert("Something went wrong. Please try again.");
          buttonText.textContent = "Request a Quote";
          submitButton.disabled = false;
      }
  } catch (error) {
      alert("Error submitting form!");
      buttonText.textContent = "Request a Quote";
      submitButton.disabled = false;
  }
});