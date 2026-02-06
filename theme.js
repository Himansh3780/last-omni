// theme.js - Copy this exactly

// 1. Immediately check for saved theme (prevents white flash)
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})();

// 2. Function to switch theme when you click the button
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    
    // Set the theme on the page
    html.setAttribute('data-theme', newTheme);
    
    // Save to browser memory
    localStorage.setItem('theme', newTheme);
    
    // Update the icon
    const icon = document.getElementById('theme-icon');
    if(icon) {
        icon.className = newTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

// 3. Update icon when page loads
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const icon = document.getElementById('theme-icon');
    if(icon) {
        icon.className = currentTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
});
