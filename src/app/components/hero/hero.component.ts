import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [MagneticDirective],
    template: `
    <section id="hero">
      <canvas #heroCanvas id="heroCanvas"></canvas>

      <!-- Floating UI cards with perspective tilt -->
      <div class="hero-float" style="top:22%;left:4%;animation:floatY 7s ease-in-out infinite">
        <div class="float-card glass-card">
          <div class="fc-label">Projects Shipped</div>
          <div class="fc-val" style="color:var(--gold)">15+ ↑</div>
        </div>
      </div>
      <div class="hero-float" style="top:28%;right:5%;animation:floatY 9s ease-in-out infinite;animation-delay:-3s">
        <div class="float-card glass-card">
          <div class="fc-label">Stack Coverage</div>
          <div class="fc-val" style="color:var(--r)">Full ✦</div>
        </div>
      </div>
      <div class="hero-float" style="bottom:26%;left:6%;animation:floatY2 8s ease-in-out infinite;animation-delay:-5s">
        <div class="float-card glass-card">
          <div class="fc-label">Response Time</div>
          <div class="fc-val" style="color:var(--s)">48H ⚡</div>
        </div>
      </div>
      <div class="hero-float" style="bottom:28%;right:6%;animation:floatY 10s ease-in-out infinite;animation-delay:-2s">
        <div class="float-card glass-card">
          <div class="fc-label">Client Satisfaction</div>
          <div class="fc-val" style="color:var(--c)">100% ★</div>
        </div>
      </div>

      <div class="hero-tag">
        <span class="tag-line"></span>
        <span class="tag-text">Fullstack Product Company — Est. 2024</span>
        <span class="tag-line"></span>
      </div>
      <h1 class="hero-h1">
        <span class="h1-line1">
          <span class="h1-word" style="animation-delay:.6s">We</span>
          <span class="h1-word" style="animation-delay:.7s">Don't</span>
        </span>
        <span class="h1-line2"><span class="h1-line2-text h1-word" style="animation-delay:.85s">Build Code</span></span>
      </h1>
      <div class="hero-tagline">
        <span class="tagline-we">We Build</span>
        <span class="tagline-futures">Futures</span>
        <span class="tagline-cursor">|</span>
      </div>
      <p class="hero-sub">Three minds. One obsession. Every project a masterpiece.<br>Saiteja × Ravi Kishore × Chakri</p>
      <div class="hero-ctas">
        <a href="#work" class="cta-main" appMagnetic><span>Explore Our Work</span></a>
        <a href="#cta" class="cta-sec" appMagnetic>Hire the Trio</a>
      </div>
      <div class="scroll-hint">
        <div class="scroll-mouse">
          <div class="scroll-dot"></div>
        </div>
        <p>Scroll to Discover</p>
      </div>
    </section>
  `,
    styles: [`
    :host { display: block; }
    #hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: relative;
      overflow: hidden;
      padding: 0 40px;
      background: var(--bg);
      background-image: 
        radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, var(--bg) 100%),
        url('/images/hero-bg.png');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      z-index: 1;
    }
    #heroCanvas {
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      width: 100%;
      height: 100%;
    }
    .hero-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: .6rem;
      letter-spacing: 8px;
      color: var(--gold);
      text-transform: uppercase;
      margin-bottom: 36px;
      opacity: 0;
      animation: riseUp .8s .4s forwards;
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .tag-line {
      display: block;
      width: 40px;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--gold));
    }
    .tag-line:last-child {
      background: linear-gradient(90deg, var(--gold), transparent);
    }
    .tag-text { white-space: nowrap; }
    .hero-h1 {
      font-family: 'Bebas Neue', sans-serif;
      line-height: .85;
      letter-spacing: -2px;
      position: relative;
      z-index: 2;
    }
    .h1-line1 {
      font-size: clamp(5.5rem, 14vw, 16rem);
      color: var(--white);
      display: block;
    }
    .h1-word {
      display: inline-block;
      opacity: 0;
      animation: heroWordIn 1s var(--ease-out-expo) forwards;
    }
    .h1-line2 {
      font-size: clamp(5.5rem, 14vw, 16rem);
      display: block;
      position: relative;
    }
    .h1-line2-text {
      background: linear-gradient(135deg, var(--s) 0%, #FF6B40 25%, var(--gold) 50%, #60E8A0 75%, var(--r) 100%);
      background-size: 200% 200%;
      animation: heroWordIn 1s var(--ease-out-expo) forwards, gradientMove 6s ease-in-out infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @keyframes heroWordIn {
      0% {
        opacity: 0;
        transform: translateY(60px) rotateX(30deg);
        filter: blur(6px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0);
        filter: blur(0);
      }
    }

    .hero-tagline {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(1.4rem, 3vw, 2.8rem);
      font-style: italic;
      color: rgba(242,237,228,.45);
      letter-spacing: 4px;
      margin-top: 16px;
      margin-bottom: 20px;
      opacity: 0;
      animation: riseUp .9s 1s forwards;
      position: relative;
      z-index: 2;
    }
    .tagline-futures {
      color: var(--gold);
      font-weight: 600;
    }
    .tagline-cursor {
      display: inline-block;
      color: var(--gold);
      animation: typewriterBlink 1s step-end infinite;
      margin-left: 2px;
    }

    .hero-sub {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(1rem, 2vw, 1.4rem);
      color: rgba(242, 237, 228, .35);
      margin-bottom: 50px;
      max-width: 600px;
      opacity: 0;
      animation: riseUp .9s 1.1s forwards;
      line-height: 1.6;
      position: relative;
      z-index: 2;
    }
    .hero-ctas {
      display: flex;
      gap: 20px;
      opacity: 0;
      animation: riseUp .9s 1.3s forwards;
      position: relative;
      z-index: 2;
    }
    .hero-float {
      position: absolute;
      pointer-events: none;
      z-index: 2;
    }
    .float-card {
      padding: 16px 22px;
      white-space: nowrap;
      transition: transform .3s var(--ease-out-expo);
    }
    .float-card .fc-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: .5rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: rgba(242, 237, 228, .25);
      margin-bottom: 6px;
    }
    .float-card .fc-val {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.4rem;
      letter-spacing: 2px;
    }

    /* Scroll hint — mouse icon */
    .scroll-hint {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      opacity: 0;
      animation: riseUp 1s 1.8s forwards;
      z-index: 2;
    }
    .scroll-mouse {
      width: 22px;
      height: 34px;
      border: 1.5px solid rgba(212,168,67,.35);
      border-radius: 12px;
      display: flex;
      justify-content: center;
      padding-top: 8px;
    }
    .scroll-dot {
      width: 3px;
      height: 8px;
      background: var(--gold);
      border-radius: 3px;
      animation: bounceArrow 2s ease-in-out infinite;
    }
    .scroll-hint p {
      font-family: 'JetBrains Mono', monospace;
      font-size: .5rem;
      letter-spacing: 4px;
      color: rgba(242, 237, 228, .2);
      text-transform: uppercase;
    }

    @media (max-width: 900px) {
      .hero-float { display: none; }
      .hero-ctas { flex-direction: column; align-items: center; }
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements AfterViewInit, OnDestroy {
    @ViewChild('heroCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

    private ctx!: CanvasRenderingContext2D;
    private hW = 0;
    private hH = 0;
    private hMx = 0;
    private hMy = 0;
    private heroAngle = 0;
    private animId = 0;

    private resizeHandler = () => this.resizeHero();

    ngAfterViewInit(): void {
        const canvas = this.canvasRef.nativeElement;
        this.ctx = canvas.getContext('2d')!;
        this.resizeHero();
        this.hMx = this.hW / 2;
        this.hMy = this.hH / 2;
        window.addEventListener('resize', this.resizeHandler);
        this.drawHero();
    }

    private resizeHero(): void {
        const canvas = this.canvasRef.nativeElement;
        this.hW = canvas.width = canvas.offsetWidth;
        this.hH = canvas.height = canvas.offsetHeight;
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(e: MouseEvent): void {
        const rect = this.canvasRef.nativeElement.getBoundingClientRect();
        this.hMx = e.clientX - rect.left;
        this.hMy = e.clientY - rect.top;
    }

    private drawHero = (): void => {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.hW, this.hH);
        this.heroAngle += 0.002;

        const cx = this.hW / 2;
        const cy = this.hH / 2;
        const ox = (this.hMx - cx) * 0.03;
        const oy = (this.hMy - cy) * 0.03;

        // Outer rotating rings — more rings, subtler
        for (let ring = 0; ring < 6; ring++) {
            const r = 100 + ring * 70;
            const rot = this.heroAngle * (ring % 2 === 0 ? 1 : -1) * (1 + ring * 0.15);
            ctx.save();
            ctx.translate(cx + ox * (ring + 1) * 0.2, cy + oy * (ring + 1) * 0.2);
            ctx.rotate(rot);
            const grad = ctx.createLinearGradient(-r, 0, r, 0);
            if (ring === 0) {
                grad.addColorStop(0, 'rgba(255,61,26,.10)');
                grad.addColorStop(1, 'rgba(255,61,26,.0)');
            } else if (ring === 2) {
                grad.addColorStop(0, 'rgba(0,255,194,.07)');
                grad.addColorStop(1, 'rgba(0,255,194,.0)');
            } else if (ring === 4) {
                grad.addColorStop(0, 'rgba(212,168,67,.08)');
                grad.addColorStop(1, 'rgba(212,168,67,.0)');
            } else {
                grad.addColorStop(0, 'rgba(212,168,67,.04)');
                grad.addColorStop(1, 'rgba(212,168,67,.0)');
            }
            ctx.strokeStyle = grad;
            ctx.lineWidth = ring === 0 || ring === 4 ? 1.5 : 0.5;
            ctx.setLineDash(ring % 3 === 0 ? [6, 14] : ring % 3 === 1 ? [2, 8] : []);
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.restore();
        }

        // Orbiting dots — more vivid glows
        const orbs = [
            { dist: 100, speed: 1.2, size: 4, col: '#FF3D1A', trail: 8 },
            { dist: 170, speed: -0.7, size: 3, col: '#00FFC2', trail: 6 },
            { dist: 240, speed: 0.5, size: 5, col: '#D4A843', trail: 10 },
            { dist: 310, speed: -0.35, size: 3.5, col: '#FF3D1A', trail: 6 },
            { dist: 380, speed: 0.45, size: 4, col: '#00FFC2', trail: 8 },
            { dist: 450, speed: -0.25, size: 3, col: '#D4A843', trail: 5 },
        ];

        orbs.forEach((orb, i) => {
            const angle = this.heroAngle * orb.speed + (i * Math.PI * 2) / orbs.length;
            const x = cx + ox * (i + 1) * 0.12 + Math.cos(angle) * orb.dist;
            const y = cy + oy * (i + 1) * 0.12 + Math.sin(angle) * orb.dist;

            // Trail
            for (let t = 0; t < orb.trail; t++) {
                const ta = angle - t * 0.06;
                const tx = cx + ox * 0.12 + Math.cos(ta) * orb.dist;
                const ty = cy + oy * 0.12 + Math.sin(ta) * orb.dist;
                ctx.beginPath();
                ctx.arc(tx, ty, orb.size * (1 - t / orb.trail) * 0.5, 0, Math.PI * 2);
                const alpha = ((1 - t / orb.trail) * 0.12).toFixed(2);
                ctx.fillStyle = orb.col + Math.round(parseFloat(alpha) * 255).toString(16).padStart(2, '0');
                ctx.fill();
            }

            // Glow
            const grd = ctx.createRadialGradient(x, y, 0, x, y, orb.size * 5);
            grd.addColorStop(0, orb.col + 'AA');
            grd.addColorStop(1, orb.col + '00');
            ctx.beginPath();
            ctx.arc(x, y, orb.size * 4, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();

            // Dot
            ctx.beginPath();
            ctx.arc(x, y, orb.size, 0, Math.PI * 2);
            ctx.fillStyle = orb.col;
            ctx.fill();
        });

        // Central glow — layered
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 100);
        cg.addColorStop(0, 'rgba(212,168,67,.06)');
        cg.addColorStop(0.5, 'rgba(212,168,67,.02)');
        cg.addColorStop(1, 'rgba(212,168,67,0)');
        ctx.beginPath();
        ctx.arc(cx, cy, 100, 0, Math.PI * 2);
        ctx.fillStyle = cg;
        ctx.fill();

        this.animId = requestAnimationFrame(this.drawHero);
    };

    ngOnDestroy(): void {
        cancelAnimationFrame(this.animId);
        window.removeEventListener('resize', this.resizeHandler);
    }
}
