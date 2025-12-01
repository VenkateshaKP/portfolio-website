// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light' || (!savedTheme && prefersLight)) document.body.classList.add('light');

function setTheme(mode) {
  if (mode === 'light') document.body.classList.add('light');
  else document.body.classList.remove('light');
  localStorage.setItem('theme', mode);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light');
    setTheme(isLight ? 'dark' : 'light');
    themeToggle.innerHTML = `<i class="fa-solid ${isLight ? 'fa-moon' : 'fa-sun'}"></i>`;
  });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Smooth scroll (native CSS is fine, but ensure close nav on click)
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (dummy handler)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';
    const data = Object.fromEntries(new FormData(contactForm).entries());

    // Simulate network delay and success
    await new Promise(r => setTimeout(r, 900));

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      formStatus.textContent = 'Please fill out all fields.';
      formStatus.style.color = '#e11d48';
      return;
    }
    formStatus.textContent = 'Message sent! I will get back to you soon.';
    formStatus.style.color = '#10b981';
    contactForm.reset();
  });
}
