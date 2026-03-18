// =================== LOADER ===================
const loaderTexts = ['Initializing Studio','Loading Assets','Preparing Canvas','Awakening Systems','Ready'];
let ltIdx = 0;
const lt = document.getElementById('lt');
const lf = document.getElementById('lf');
const ll = [document.getElementById('ll-s'), document.getElementById('ll-r'), document.getElementById('ll-c')];

// Animate letters in
ll.forEach((l, i) => setTimeout(() => { l.style.opacity = '1'; l.style.transform = 'translateY(0)'; }, 200 + i * 150));

// Fill bar
setTimeout(() => { lf.style.width = '100%'; }, 300);

// Cycle text
const ltTimer = setInterval(() => {
  ltIdx = (ltIdx + 1) % loaderTexts.length;
  lt.style.opacity = '0';
  setTimeout(() => { lt.textContent = loaderTexts[ltIdx]; lt.style.opacity = '1'; }, 200);
}, 400);

lt.style.transition = 'opacity .2s';

// Hide loader
setTimeout(() => {
  clearInterval(ltTimer);
  document.getElementById('loader').classList.add('gone');
  document.body.style.overflow = '';
}, 2200);

document.body.style.overflow = 'hidden';

// =================== CUSTOM CURSOR ===================
const cur = document.getElementById('cur');
const cur2 = document.getElementById('cur2');
let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
});

(function animCursor() {
  cx += (mx - cx) * .15; cy += (my - cy) * .15;
  cur2.style.left = cx + 'px'; cur2.style.top = cy + 'px';
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a,button,.t-card,.svc,.proj,.src-g-l,.stat-box').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

// =================== PARTICLE BG CANVAS ===================
const bgC = document.getElementById('bgCanvas');
const bgCtx = bgC.getContext('2d');
let W, H, particles = [], mouse = { x: -999, y: -999 };

function resizeCanvases() {
  W = bgC.width = window.innerWidth;
  H = bgC.height = window.innerHeight;
}
resizeCanvases();
window.addEventListener('resize', resizeCanvases);
document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - .5) * .4;
    this.vy = (Math.random() - .5) * .4;
    this.r = Math.random() * 1.5 + .3;
    this.alpha = Math.random() * .4 + .05;
    this.colors = ['rgba(212,168,67,', 'rgba(255,61,26,', 'rgba(0,255,194,'];
    this.col = this.colors[Math.floor(Math.random() * 3)];
    this.pulse = Math.random() * Math.PI * 2;
    this.pulseSpeed = .02 + Math.random() * .02;
  }
  update() {
    // Mouse repulsion
    const dx = this.x - mouse.x, dy = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 120) {
      const force = (120 - dist) / 120;
      this.vx += (dx / dist) * force * .3;
      this.vy += (dy / dist) * force * .3;
    }
    this.vx *= .98; this.vy *= .98;
    this.x += this.vx; this.y += this.vy;
    this.pulse += this.pulseSpeed;
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
  }
  draw() {
    const a = this.alpha * (.7 + .3 * Math.sin(this.pulse));
    bgCtx.beginPath();
    bgCtx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    bgCtx.fillStyle = this.col + a + ')';
    bgCtx.fill();
  }
}

// Init particles
for (let i = 0; i < 180; i++) particles.push(new Particle());

// Connection lines
function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 90) {
        bgCtx.beginPath();
        bgCtx.moveTo(particles[i].x, particles[i].y);
        bgCtx.lineTo(particles[j].x, particles[j].y);
        bgCtx.strokeStyle = `rgba(212,168,67,${(1 - d / 90) * .08})`;
        bgCtx.lineWidth = .5;
        bgCtx.stroke();
      }
    }
  }
}

function animBg() {
  bgCtx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animBg);
}
animBg();

// =================== HERO CANVAS (Geometric) ===================
const hC = document.getElementById('heroCanvas');
const hCtx = hC.getContext('2d');
let hW, hH, hMx = hC.offsetWidth / 2, hMy = hC.offsetHeight / 2;
let heroAngle = 0;

function resizeHero() {
  hW = hC.width = hC.offsetWidth;
  hH = hC.height = hC.offsetHeight;
}
resizeHero();
window.addEventListener('resize', resizeHero);
document.getElementById('hero').addEventListener('mousemove', e => {
  const rect = hC.getBoundingClientRect();
  hMx = e.clientX - rect.left;
  hMy = e.clientY - rect.top;
});

function drawHero() {
  hCtx.clearRect(0, 0, hW, hH);
  heroAngle += .003;

  const cx = hW / 2, cy = hH / 2;

  // Parallax offset from mouse
  const ox = (hMx - cx) * .04, oy = (hMy - cy) * .04;

  // Outer rotating rings
  for (let ring = 0; ring < 5; ring++) {
    const r = 120 + ring * 80;
    const rot = heroAngle * (ring % 2 === 0 ? 1 : -1) * (1 + ring * .2);
    hCtx.save();
    hCtx.translate(cx + ox * (ring + 1) * .2, cy + oy * (ring + 1) * .2);
    hCtx.rotate(rot);
    const grad = hCtx.createLinearGradient(-r, 0, r, 0);
    if (ring === 0) { grad.addColorStop(0, 'rgba(255,61,26,.12)'); grad.addColorStop(1, 'rgba(255,61,26,.0)'); }
    else if (ring === 2) { grad.addColorStop(0, 'rgba(0,255,194,.08)'); grad.addColorStop(1, 'rgba(0,255,194,.0)'); }
    else { grad.addColorStop(0, 'rgba(212,168,67,.07)'); grad.addColorStop(1, 'rgba(212,168,67,.0)'); }
    hCtx.strokeStyle = grad;
    hCtx.lineWidth = 1;
    hCtx.setLineDash(ring % 2 === 0 ? [6, 12] : [2, 8]);
    hCtx.beginPath();
    hCtx.arc(0, 0, r, 0, Math.PI * 2);
    hCtx.stroke();
    hCtx.setLineDash([]);
    hCtx.restore();
  }

  // Orbiting dots
  const orbs = [
    { dist: 120, speed: 1, size: 4, col: '#FF3D1A', trail: 6 },
    { dist: 200, speed: -.6, size: 3, col: '#00FFC2', trail: 4 },
    { dist: 280, speed: .4, size: 5, col: '#D4A843', trail: 8 },
    { dist: 360, speed: -.3, size: 3, col: '#FF3D1A', trail: 5 },
    { dist: 440, speed: .5, size: 4, col: '#00FFC2', trail: 6 },
  ];

  orbs.forEach((orb, i) => {
    const angle = heroAngle * orb.speed + (i * Math.PI * 2 / orbs.length);
    const x = cx + ox * (i + 1) * .15 + Math.cos(angle) * orb.dist;
    const y = cy + oy * (i + 1) * .15 + Math.sin(angle) * orb.dist;

    // Trail
    for (let t = 0; t < orb.trail; t++) {
      const ta = angle - t * .08;
      const tx = cx + ox * .15 + Math.cos(ta) * orb.dist;
      const ty = cy + oy * .15 + Math.sin(ta) * orb.dist;
      hCtx.beginPath();
      hCtx.arc(tx, ty, orb.size * (1 - t / orb.trail) * .6, 0, Math.PI * 2);
      hCtx.fillStyle = orb.col.replace(')', '').replace('rgb', 'rgba') + `${(1 - t / orb.trail) * .15})`;
      if (orb.col.startsWith('#')) {
        const hex = orb.col;
        const alpha = ((1 - t / orb.trail) * .15).toFixed(2);
        hCtx.fillStyle = hex + Math.round(alpha * 255).toString(16).padStart(2, '0');
      }
      hCtx.fill();
    }

    // Glow
    const grd = hCtx.createRadialGradient(x, y, 0, x, y, orb.size * 4);
    grd.addColorStop(0, orb.col + 'CC');
    grd.addColorStop(1, orb.col + '00');
    hCtx.beginPath();
    hCtx.arc(x, y, orb.size * 3, 0, Math.PI * 2);
    hCtx.fillStyle = grd;
    hCtx.fill();

    // Dot
    hCtx.beginPath();
    hCtx.arc(x, y, orb.size, 0, Math.PI * 2);
    hCtx.fillStyle = orb.col;
    hCtx.fill();
  });

  // Central glow
  const cg = hCtx.createRadialGradient(cx, cy, 0, cx, cy, 80);
  cg.addColorStop(0, 'rgba(212,168,67,.08)');
  cg.addColorStop(1, 'rgba(212,168,67,0)');
  hCtx.beginPath();
  hCtx.arc(cx, cy, 80, 0, Math.PI * 2);
  hCtx.fillStyle = cg;
  hCtx.fill();

  requestAnimationFrame(drawHero);
}
drawHero();

// =================== NAV SCROLL ===================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

// =================== SCROLL REVEAL ===================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Skill bars
      entry.target.querySelectorAll('.sb-fill').forEach(b => {
        setTimeout(() => { b.style.width = b.dataset.w + '%'; }, 300);
      });
    }
  });
}, { threshold: .12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// =================== COUNTER ANIMATION ===================
const cObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const t = parseInt(el.dataset.t), s = el.dataset.s;
    let cur = 0, step = t / 45;
    const timer = setInterval(() => {
      cur = Math.min(cur + step, t);
      el.textContent = Math.floor(cur) + s;
      if (cur >= t) clearInterval(timer);
    }, 28);
    cObs.unobserve(el);
  });
}, { threshold: .5 });
document.querySelectorAll('.stat-n[data-t]').forEach(el => cObs.observe(el));

// =================== MAGNETIC HOVER ===================
document.querySelectorAll('.cta-main, .cta-sec, .nav-btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const bx = e.clientX - rect.left - rect.width / 2;
    const by = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${bx * .25}px, ${by * .35}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0,0)';
    btn.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
    setTimeout(() => btn.style.transition = '', 500);
  });
});

// =================== PARALLAX ON SCROLL ===================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const orbital = document.getElementById('orbitalWrap');
  if (orbital) orbital.style.transform = `translateY(calc(-50% + ${scrollY * .15}px))`;
  const heroFloats = document.querySelectorAll('.hero-float');
  heroFloats.forEach((f, i) => {
    f.style.transform = `translateY(${scrollY * (.05 + i * .02)}px)`;
  });
});

// =================== TEXT SCRAMBLE ON HERO ===================
function scramble(el, final) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&';
  let iteration = 0;
  const interval = setInterval(() => {
    el.textContent = final.split('').map((c, i) => {
      if (i < iteration) return final[i];
      return c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
    }).join('');
    if (iteration >= final.length) clearInterval(interval);
    iteration += .6;
  }, 40);
}

// Scramble logo on hover
const logo = document.querySelector('.nav-logo');
if (logo) logo.addEventListener('mouseenter', () => scramble(logo, 'SRC STUDIO'));

// =================== CLICK RIPPLE ===================
document.addEventListener('click', e => {
  const ripple = document.createElement('div');
  ripple.style.cssText = `
    position:fixed;left:${e.clientX}px;top:${e.clientY}px;
    width:4px;height:4px;border-radius:50%;
    background:rgba(212,168,67,0.6);pointer-events:none;z-index:9990;
    transform:translate(-50%,-50%);
    animation:clickRipple .6s ease-out forwards;
  `;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// Add ripple keyframes
const style = document.createElement('style');
style.textContent = `@keyframes clickRipple{from{transform:translate(-50%,-50%) scale(1);opacity:1}to{transform:translate(-50%,-50%) scale(30);opacity:0}}`;
document.head.appendChild(style);

// =================== SECTION TINT ON SCROLL ===================
const sections = document.querySelectorAll('section');
const tints = {
  'hero': 'rgba(3,3,10,1)',
  'story': 'rgba(3,3,10,1)',
  'team': 'rgba(8,8,18,1)',
  'work': 'rgba(3,3,10,1)',
  'services': 'rgba(8,8,18,1)',
  'process': 'rgba(8,8,18,1)',
};
