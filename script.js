// Function to toggle theme menu
document.querySelector(".theme-button").addEventListener("click", function() {
    document.querySelector(".theme-menu").classList.toggle("show");
  });

  function setTheme(theme) {
    localStorage.setItem("theme", theme);
    document.body.setAttribute('data-theme', theme);
  }

  // Apply the theme based on localStorage or system preference
  const savedTheme = localStorage.getItem('theme') || 'auto';
  document.body.setAttribute('data-theme', savedTheme);