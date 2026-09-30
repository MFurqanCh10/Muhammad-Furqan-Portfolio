const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn?.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.toggle('hidden');
  menuBtn.setAttribute('aria-expanded', String(!isHidden));
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('copyEmail')?.addEventListener('click', async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText('mfurqanch.dev@gmail.com');
    button.textContent = 'Copied ✓';
    setTimeout(() => button.textContent = 'Copy email', 1600);
  } catch (error) {
    window.location.href = 'mailto:mfurqanch.dev@gmail.com';
  }
});
