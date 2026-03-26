/* ===================================================
   WORKNET EVENTOS — Global JS
   =================================================== */

// ---- Fade-up on scroll ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
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
      animateCounter(e.target, parseFloat(e.target.dataset.target));
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ---- Navbar-dependent code (runs AFTER components.js renders the navbar) ----
document.addEventListener('DOMContentLoaded', () => {
  const toggle  = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if (!toggle || !navList) return;

  // Helper: reset hamburger icon to closed state
  function resetToggleIcon() {
    const spans = toggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity  = '';
    spans[2].style.transform = '';
  }

  // Helper: close menu fully
  function closeMenu() {
    navList.classList.remove('open');
    resetToggleIcon();
    // also collapse any open submenu
    navList.querySelectorAll('li.open').forEach(li => li.classList.remove('open'));
  }

  // Bug 1 fix: hamburger toggle
  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    const spans  = toggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      closeMenu();
    }
  });

  // Bug 3 fix: tap "Serviços" on mobile to toggle submenu
  navList.querySelectorAll('li').forEach(li => {
    const megaMenu = li.querySelector('.mega-menu');
    if (!megaMenu) return;
    li.querySelector('a').addEventListener('click', (e) => {
      if (window.innerWidth <= 968) {
        e.preventDefault();
        li.classList.toggle('open');
      }
    });
  });

  // Bug 4 fix: close menu when clicking any real link
  navList.querySelectorAll('a[href]:not([href="#"])').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navList.querySelectorAll('a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });
});
