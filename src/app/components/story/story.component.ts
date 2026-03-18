import { Component, AfterViewInit, OnDestroy, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
    selector: 'app-story',
    standalone: true,
    imports: [RevealDirective],
    template: `
    <section id="story" style="position:relative;overflow:hidden">
      <!-- Animated orbital SVG -->
      <div class="story-orbital" id="orbitalWrap" aria-hidden="true">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="220" stroke="rgba(212,168,67,0.06)" stroke-width="1"/>
          <circle cx="250" cy="250" r="180" stroke="rgba(212,168,67,0.05)" stroke-width="1" stroke-dasharray="6 8"/>
          <circle cx="250" cy="250" r="140" stroke="rgba(255,61,26,0.08)" stroke-width="1"/>
          <circle cx="250" cy="250" r="100" stroke="rgba(0,255,194,0.07)" stroke-width="1" stroke-dasharray="3 5"/>
          <circle cx="250" cy="250" r="55" stroke="rgba(212,168,67,0.12)" stroke-width="1.5"/>
          <circle cx="250" cy="250" r="18" fill="rgba(212,168,67,0.1)" stroke="rgba(212,168,67,0.4)" stroke-width="1"/>
          <circle cx="250" cy="250" r="7" fill="var(--gold)" opacity="0.6"/>
          <g id="orb-s" style="transform-origin:250px 250px;animation:orbitSpin 8s linear infinite">
            <circle cx="250" cy="30" r="10" fill="var(--s)" opacity="0.9"/>
            <circle cx="250" cy="30" r="18" fill="none" stroke="var(--s)" stroke-width="1" opacity="0.3"/>
          </g>
          <g id="orb-r" style="transform-origin:250px 250px;animation:orbitSpin 12s linear infinite reverse">
            <circle cx="250" cy="70" r="8" fill="var(--r)" opacity="0.8"/>
            <circle cx="250" cy="70" r="14" fill="none" stroke="var(--r)" stroke-width="1" opacity="0.25"/>
          </g>
          <g id="orb-c" style="transform-origin:250px 250px;animation:orbitSpin 6s linear infinite">
            <circle cx="250" cy="110" r="9" fill="var(--c)" opacity="0.85"/>
            <circle cx="250" cy="110" r="16" fill="none" stroke="var(--c)" stroke-width="1" opacity="0.3"/>
          </g>
          <line x1="250" y1="250" x2="250" y2="30" stroke="var(--s)" stroke-width="0.5" opacity="0.15" style="transform-origin:250px 250px;animation:orbitSpin 8s linear infinite"/>
          <line x1="250" y1="250" x2="250" y2="70" stroke="var(--r)" stroke-width="0.5" opacity="0.1" style="transform-origin:250px 250px;animation:orbitSpin 12s linear infinite reverse"/>
          <text x="255" y="24" fill="rgba(255,61,26,0.8)" font-family="'Bebas Neue'" font-size="11" letter-spacing="2">S</text>
          <text x="255" y="65" fill="rgba(0,255,194,0.8)" font-family="'Bebas Neue'" font-size="10" letter-spacing="2">R</text>
          <text x="255" y="107" fill="rgba(212,168,67,0.8)" font-family="'Bebas Neue'" font-size="10" letter-spacing="2">C</text>
          <line x1="30" y1="250" x2="470" y2="250" stroke="rgba(212,168,67,0.04)" stroke-width="1"/>
          <line x1="250" y1="30" x2="250" y2="470" stroke="rgba(212,168,67,0.04)" stroke-width="1"/>
        </svg>
      </div>

      <div class="section-wrap">
        <div class="story-grid">
          <div appReveal>
            <div class="s-tag">Our Origin</div>
            <h2 class="big-title">Three friends.<br>One <em>crazy</em><br>idea that<br>worked.</h2>
            <div class="src-giant">
              <span class="src-g-l s">S</span>
              <span class="src-g-l r">R</span>
              <span class="src-g-l c">C</span>
            </div>
          </div>
          <div class="story-right" appReveal [delay]="'.2s'">
            <p>It started at 2AM. Three engineers. One question: <strong>what if we stopped building someone else's dream?</strong></p>
            <p><strong>Saiteja, Ravi Kishore, and Chakri</strong> — each a specialist, together unstoppable. We combined frontend mastery, backend precision, and fullstack versatility into a company that punches above any agency.</p>
            <p>Not freelancers. Not a side gig. A <strong>dedicated product company</strong> that treats every project like our own startup. We argue over architecture at midnight because we care that much.</p>
            <div class="stats-grid">
              <div class="stat-box" appReveal [delay]="'.1s'">
                <div class="stat-n" #stat1>15+</div>
                <div class="stat-l">Projects Shipped</div>
                <div class="stat-glow"></div>
              </div>
              <div class="stat-box" appReveal [delay]="'.2s'">
                <div class="stat-n" #stat2>3</div>
                <div class="stat-l">Specialists</div>
                <div class="stat-glow"></div>
              </div>
              <div class="stat-box" appReveal [delay]="'.3s'">
                <div class="stat-n" #stat3>100%</div>
                <div class="stat-l">Satisfaction</div>
                <div class="stat-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    :host { display: block; }
    #story { padding: 160px 0; position: relative; overflow: hidden; }
    .story-orbital {
      position: absolute;
      right: -100px;
      top: 50%;
      transform: translateY(-50%);
      width: 600px;
      height: 600px;
      pointer-events: none;
    }
    .story-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 100px;
      align-items: center;
    }
    .big-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(3rem, 5.5vw, 6rem);
      font-weight: 700;
      line-height: 1.05;
    }
    .big-title em { font-style: italic; color: var(--gold); }
    .story-right p {
      font-size: 1.05rem;
      line-height: 2;
      color: rgba(242, 237, 228, .55);
      margin-bottom: 24px;
    }
    .story-right p strong { color: var(--white); font-weight: 700; }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2px;
      margin-top: 60px;
    }
    .stat-box { 
      background: var(--panel); 
      padding: 36px 28px; 
      text-align: center; 
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      transition: transform .4s var(--ease-out-expo), box-shadow .4s;
    }
    .stat-box:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-glow-gold);
    }
    .stat-glow {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--s), var(--gold), var(--r));
      opacity: 0;
      transition: opacity .4s;
    }
    .stat-box:hover .stat-glow { opacity: 1; }
    .stat-n { font-family: 'Bebas Neue', sans-serif; font-size: 3.5rem; color: var(--gold); line-height: 1; }
    .stat-l {
      font-family: 'JetBrains Mono', monospace;
      font-size: .55rem;
      letter-spacing: 3px;
      color: rgba(242, 237, 228, .3);
      text-transform: uppercase;
      margin-top: 8px;
    }
    .src-giant { display: flex; justify-content: flex-start; margin-top: 48px; position: relative; }
    .src-g-l {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(7rem, 12vw, 14rem);
      line-height: .8;
      opacity: .06;
      letter-spacing: -15px;
      transition: opacity .5s var(--ease-out-expo), transform .5s var(--ease-out-expo), text-shadow .5s;
      cursor: default;
    }
    .src-g-l:hover { opacity: .4; transform: scale(1.1) rotate(-5deg); }
    .src-g-l.s { color: var(--s); }
    .src-g-l.s:hover { text-shadow: 0 0 60px rgba(255,61,26,.3); }
    .src-g-l.r { color: var(--r); }
    .src-g-l.r:hover { text-shadow: 0 0 60px rgba(0,255,194,.3); }
    .src-g-l.c { color: var(--c); }
    .src-g-l.c:hover { text-shadow: 0 0 60px rgba(212,168,67,.3); }

    @media (max-width: 900px) {
      .story-grid { grid-template-columns: 1fr; gap: 40px; }
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryComponent implements AfterViewInit, OnDestroy {
    private counterObserver!: IntersectionObserver;
    private orbitalWrap: HTMLElement | null = null;
    private scrollHandler = () => {
        if (this.orbitalWrap) {
            this.orbitalWrap.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.15}px))`;
        }
    };

    ngAfterViewInit(): void {
        this.orbitalWrap = document.getElementById('orbitalWrap');
        window.addEventListener('scroll', this.scrollHandler);

        // Counter animation
        this.counterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target as HTMLElement;
                    const text = el.textContent || '';
                    const numMatch = text.match(/\d+/);
                    if (!numMatch) return;
                    const target = parseInt(numMatch[0]);
                    const suffix = text.replace(/\d+/, '');
                    let current = 0;
                    const step = target / 60;
                    const timer = setInterval(() => {
                        current = Math.min(current + step, target);
                        el.textContent = Math.floor(current) + suffix;
                        if (current >= target) clearInterval(timer);
                    }, 22);
                    this.counterObserver.unobserve(el);
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('.stat-n').forEach((el) => {
            this.counterObserver.observe(el);
        });
    }

    ngOnDestroy(): void {
        this.counterObserver?.disconnect();
        window.removeEventListener('scroll', this.scrollHandler);
    }
}
