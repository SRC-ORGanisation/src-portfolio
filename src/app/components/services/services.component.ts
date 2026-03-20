import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [RevealDirective],
    template: `
    <section id="services">
      <div class="section-wrap">
        <div class="svc-head" appReveal>
          <h2>Core<br>Capabilities</h2>
          <p>We don't juggle fifty different technologies poorly. We specialize deeply in a modernized, battle-tested stack to deliver uncompromising quality from pixel to database.</p>
        </div>
        <div class="svc-grid">
          @for (svc of services; track svc.num; let i = $index) {
            <div class="svc" appReveal [delay]="(i * 0.1) + 's'">
              <div class="svc-ico" [innerHTML]="svc.icon"></div>
              <div class="svc-num">{{ svc.num }}</div>
              <div class="svc-n">{{ svc.name }}</div>
              <p class="svc-d">{{ svc.desc }}</p>
              <div class="svc-line"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
    styles: [`
    :host { display: block; }
    #services { padding: 100px 0 180px; background: var(--deep); }
    .svc-head { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; margin-bottom: 80px; }
    .svc-head h2 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(3.5rem, 6vw, 7rem); line-height: .88; letter-spacing: 2px; }
    .svc-head p { font-size: 1rem; line-height: 1.9; color: rgba(242,237,228,.45); }
    .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .svc { 
      background: rgba(255,255,255,.02); 
      padding: 60px 40px; 
      position: relative; 
      overflow: hidden; 
      transition: all .6s var(--ease-out-expo);
      border: 1px solid rgba(255,255,255,.04);
      border-radius: var(--radius-lg);
      backdrop-filter: blur(20px);
    }
    .svc:hover { 
      background: rgba(255,255,255,.04);
      border-color: rgba(255,255,255,.12);
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(0,0,0,.5);
    }
    /* Add specific glows to each service based on index */
    .svc:nth-child(1):hover { box-shadow: 0 20px 50px rgba(255,61,26,.15); border-color: rgba(255,61,26,.3); }
    .svc:nth-child(2):hover { box-shadow: 0 20px 50px rgba(212,168,67,.15); border-color: rgba(212,168,67,.3); }
    .svc:nth-child(3):hover { box-shadow: 0 20px 50px rgba(0,255,194,.15); border-color: rgba(0,255,194,.3); }

    .svc-ico { width: 64px; height: 64px; margin-bottom: 32px; position: relative; transition: transform .6s var(--ease-out-expo); }
    .svc:hover .svc-ico { transform: scale(1.15) rotate(5deg); }
    .svc-ico :deep(svg) { width: 100%; height: 100%; filter: drop-shadow(0 0 10px rgba(255,255,255,0.1)); }
    .svc-n { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 700; margin-bottom: 16px; color: var(--white); }
    .svc-d { font-size: 1rem; line-height: 1.8; color: rgba(242,237,228,.5); }
    .svc-num { 
      position: absolute; top: 24px; right: 30px; 
      font-family: 'Bebas Neue', sans-serif; font-size: 5rem; 
      color: rgba(255,255,255,.03); 
      transition: all .6s var(--ease-out-expo); 
      line-height: .8;
    }
    .svc:hover .svc-num { color: rgba(255,255,255,.08); transform: scale(1.1) translate(-5px, 5px); }
    .svc-line { 
      position: absolute; bottom: 0; left: 0; right: 0; height: 4px; 
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.2), transparent);
      transform: scaleX(0); transform-origin: left; 
      transition: transform .6s var(--ease-out-expo);
      border-radius: 0 0 var(--radius-md) var(--radius-md);
    }
    .svc:hover .svc-line { transform: scaleX(1); }

    @media (max-width: 900px) {
      .svc-head { grid-template-columns: 1fr; gap: 40px; }
      .svc-grid { grid-template-columns: 1fr; }
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
    services = [
        {
            num: '01',
            name: 'Product Design',
            desc: "Interfaces that convert, not just impress. We design with user psychology baked in, bridging the gap between aesthetics and function.",
            icon: `<svg viewBox="0 0 56 56" fill="none"><rect x="8" y="12" width="40" height="28" rx="4" stroke="var(--ember)" stroke-width="1.5"/><path d="M18 22 L26 30 L36 18" stroke="var(--ember)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="28" cy="47" r="4" fill="rgba(255,61,26,0.6)"/></svg>`,
        },
        {
            num: '02',
            name: 'Fullstack Systems',
            desc: 'End-to-end applications. We architect, build, and deploy — from high-performance backend APIs to pixel-perfect responsive frontends.',
            icon: `<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="26" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="4 6" opacity="0.6"/><path d="M16 28 L22 22 L28 28 L34 22 L40 28" stroke="var(--gold)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M16 35 L22 29 L28 35 L34 29 L40 35" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.5"/></svg>`,
        },
        {
            num: '03',
            name: 'Cloud Architecture',
            desc: 'AWS, Docker, Kubernetes, CI/CD pipelines. Your product ships fast, scales gracefully under heavy load, and stays online independently.',
            icon: `<svg viewBox="0 0 56 56" fill="none"><rect x="6" y="18" width="44" height="24" rx="6" stroke="var(--neon)" stroke-width="2"/><circle cx="16" cy="30" r="4" fill="rgba(0,255,194,0.4)"/><circle cx="28" cy="30" r="4" fill="var(--neon)"/><circle cx="40" cy="30" r="4" fill="rgba(0,255,194,0.4)"/><path d="M20 30 L24 30 M32 30 L36 30" stroke="var(--neon)" stroke-width="2" stroke-linecap="round"/></svg>`,
        }
    ];
}
