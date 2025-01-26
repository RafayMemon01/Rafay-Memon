window.onload = ()=>{
    setTimeout(()=>{
        document.querySelector(".spinnerContainer").style.display = "none";
        document.querySelector(".container").style.display = "block";
    },1000) //3 sec normal decrrease for developmenr
}

// Create the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Update cursor position on mousemove
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});


  

//   color changing 
// Function to switch theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
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
  