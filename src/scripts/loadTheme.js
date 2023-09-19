// Get the current theme from local storage
const currentTheme = localStorage.getItem("theme");

// If the current local storage doesn't exit, set it to light
if (currentTheme === null) {
    // Set the body data-theme attribute to match the local storage item
    document.documentElement.setAttribute("data-theme", "light");
}
