// Scroll-reveal animation
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Scroll progress bar — fills as the user scrolls down the page
const scrollProgress = document.getElementById('scrollProgress');
if (scrollProgress) {
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = pct + '%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
}

// Clicking the "Saqib Anwar" logo scrolls smoothly back to the top
const brandLink = document.getElementById('brandLink');
if (brandLink) {
  brandLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Animated constellation background in the hero — drifting dots with connecting lines
(function initConstellation() {
  const canvas = document.getElementById('constellationCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const header = canvas.closest('header');
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w, h, points;
  const LINK_DIST = 140;
  const POINT_COUNT_DIVISOR = 14000; // lower = denser

  function resize() {
    const rect = header.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(18, Math.min(55, Math.floor((w * h) / POINT_COUNT_DIVISOR)));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);
    for (const p of points) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(139,92,246,${(1 - dist / LINK_DIST) * 0.35})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }
    for (const p of points) {
      ctx.fillStyle = 'rgba(167,139,250,0.7)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop() {
    step();
    if (!reduceMotionQuery.matches) requestAnimationFrame(loop);
  }

  resize();
  step();
  if (!reduceMotionQuery.matches) requestAnimationFrame(loop);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); step(); }, 150);
  });
})();

// Subtle tilt effect on project/skill/achievement cards
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  document.querySelectorAll('.card, .skill-card, .cert-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${(-y * 3.5).toFixed(2)}deg) rotateY(${(x * 3.5).toFixed(2)}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

// Nav background intensifies on scroll
const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navEl.style.background = window.scrollY > 20 ? 'rgba(5,6,11,0.92)' : 'rgba(5,6,11,0.7)';
});

// Mobile hamburger menu
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Back-to-top button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
