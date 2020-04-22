// Theme toggle

const toggle = document.querySelector(".toggle__checkbox");
let isDarkMode = true;

// When dark mode toggle switches, :root data-theme changes
toggle.addEventListener("change", () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    document.documentElement.setAttribute("data-theme", "");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

