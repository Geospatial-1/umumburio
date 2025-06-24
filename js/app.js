// Initialize SPA Routing
document.addEventListener('DOMContentLoaded', () => {
    // Load particles.js
    particlesJS.load('particles-js', 'assets/particles-config.json');
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', toggleTheme);
    
    // Navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('href').substring(1);
            showPage(pageId);
        });
    });
    
    // Show default page
    showPage('dashboard');
});

// Show page with animation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');
    
    // Smooth fade-in effect
    activePage.style.opacity = 0;
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) clearInterval(fadeIn);
        activePage.style.opacity = opacity;
        opacity += 0.05;
    }, 20);
}

// Dark/Light mode toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}
