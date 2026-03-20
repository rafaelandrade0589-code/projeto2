/* ===================================================
   WORKNET EVENTOS — Global JS
   =================================================== */

// ---- Mobile Menu ----
const toggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
if (toggle && navList) {
  toggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    const spans = toggle.querySelectorAll('span');
    if (navList.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
}

// ---- Fade-up on scroll ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ---- Counter animation ----
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const isDecimal = String(target).includes('.');
  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const value = ease * target;
    el.textContent = isDecimal
      ? value.toFixed(1)
      : Math.floor(value).toLocaleString('pt-BR');
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.counted) {
      e.target.dataset.counted = true;
      const target = parseFloat(e.target.dataset.target);
      animateCounter(e.target, target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ---- Active nav link ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-nav a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});
