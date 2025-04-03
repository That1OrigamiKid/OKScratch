// Toggle the dropdown visibility when the theme button is clicked
document.querySelector(".theme-button").addEventListener("click", function() {
    document.querySelector(".theme-menu").classList.toggle("show");
  });
  
  // Set the theme based on the user's selection
  function setTheme(theme) {
    // Save the selected theme in localStorage
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  }
  
  // Apply the saved or selected theme
  function applyTheme(theme) {
    if (theme === "light") {
      document.body.style.backgroundColor = "#f0f0f0";
      document.body.style.backgroundImage = "url('light-background.png')";
    } else if (theme === "dark") {
      document.body.style.backgroundColor = "#1a1a1a";
      document.body.style.backgroundImage = "url('dark-background.png')";
    } else {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      if (prefersLight) {
        document.body.style.backgroundColor = "#f0f0f0";
        document.body.style.backgroundImage = "url('light-background.png')";
      } else {
        document.body.style.backgroundColor = "#1a1a1a";
        document.body.style.backgroundImage = "url('dark-background.png')";
      }
    }
  }
  
  // Load the saved theme when the page loads
  document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme") || "auto";
    applyTheme(savedTheme);
  });
  