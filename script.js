console.log("Dein Mutter");

// Toggle the dropdown visibility when the theme button is clicked
document.querySelector(".theme-button").addEventListener("click", function(event) {
  event.stopPropagation(); // Prevents the click event from bubbling up to the document
  document.querySelector(".theme-menu").classList.toggle("show");
});

// Close the dropdown if clicked outside of it
document.addEventListener("click", function(event) {
  const themeDropdown = document.querySelector(".theme-dropdown");
  const themeMenu = document.querySelector(".theme-menu");
  // Check if the click was outside the dropdown
  if (!themeDropdown.contains(event.target)) {
    themeMenu.classList.remove("show");
  }
});

// Set the theme based on the user's selection
function setTheme(theme) {
  // Save the selected theme in localStorage
  localStorage.setItem("theme", theme);
  applyTheme(theme);

  // Close the dropdown after a choice is selected
  document.querySelector(".theme-menu").classList.remove("show");
}

// Apply the saved or selected theme
function applyTheme(theme) {
  const profileImg = document.getElementById("profile-img");

  if (theme === "light") {
    document.body.style.backgroundColor = "#f0f0f0";
    document.body.style.backgroundImage = "url('light-background.png')";
    profileImg.src = "/photos/profile-light.png";  // Switch to light profile image
  } else if (theme === "dark") {
    document.body.style.backgroundColor = "#1a1a1a";
    document.body.style.backgroundImage = "url('dark-background.png')";
    profileImg.src = "/photos/profile-dark.png";  // Switch to dark profile image
  } else {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    if (prefersLight) {
      document.body.style.backgroundColor = "#f0f0f0";
      document.body.style.backgroundImage = "url('light-background.png')";
      profileImg.src = "/photos/profile-light.png";  // Default to light profile image
    } else {
      document.body.style.backgroundColor = "#1a1a1a";
      document.body.style.backgroundImage = "url('dark-background.png')";
      profileImg.src = "/photos/profile-dark.png";  // Default to dark profile image
    }
  }
}

// Load the saved theme when the page loads
document.addEventListener("DOMContentLoaded", function() {
  const savedTheme = localStorage.getItem("theme") || "auto";
  applyTheme(savedTheme);
});
