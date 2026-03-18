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
          <h2>What We<br>Do Best</h2>
          <p>Three specialists. One seamless team. No handoff chaos, no communication gaps — just clean code, beautiful design, and systems that scale from launch to 1M users.</p>
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
    .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .svc { 
      background: rgba(13,13,26,.6); 
      padding: 52px 40px; 
      position: relative; 
      overflow: hidden; 
      transition: all .4s var(--ease-out-expo);
      border: 1px solid rgba(212,168,67,.04);
      border-radius: var(--radius-md);
    }
    .svc:hover { 
      background: rgba(13,13,26,.9);
      border-color: rgba(212,168,67,.1);
      transform: translateY(-4px);
      box-shadow: 0 16px 48px rgba(0,0,0,.3);
    }
    .svc-ico { width: 56px; height: 56px; margin-bottom: 28px; position: relative; transition: transform .4s var(--ease-out-expo); }
    .svc:hover .svc-ico { transform: scale(1.1); }
    .svc-ico :deep(svg) { width: 100%; height: 100%; }
    .svc-n { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 700; margin-bottom: 14px; }
    .svc-d { font-size: .9rem; line-height: 1.8; color: rgba(242,237,228,.4); }
    .svc-num { 
      position: absolute; top: 20px; right: 24px; 
      font-family: 'Bebas Neue', sans-serif; font-size: 4rem; 
      color: rgba(212,168,67,.04); 
      transition: all .5s var(--ease-out-expo); 
    }
    .svc:hover .svc-num { color: rgba(212,168,67,.12); transform: scale(1.1) rotate(5deg); }
    .svc-line { 
      position: absolute; bottom: 0; left: 0; right: 0; height: 2px; 
      background: linear-gradient(90deg, var(--gold), var(--ember), var(--neon));
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
            name: 'Fullstack Web Apps',
            desc: 'End-to-end applications. We architect, build, and deploy — from database schema to pixel-perfect UI, under one roof.',
            icon: `<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="26" stroke="rgba(212,168,67,0.2)" stroke-width="1"/><path d="M16 28 L22 22 L28 28 L34 22 L40 28" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M16 35 L22 29 L28 35 L34 29 L40 35" stroke="rgba(212,168,67,0.4)" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`,
        },
        {
            num: '02',
            name: 'UI/UX Design',
            desc: "Interfaces that convert, not just impress. We design with user psychology baked in, not bolted on after.",
            icon: `<svg viewBox="0 0 56 56" fill="none"><rect x="8" y="12" width="40" height="28" rx="2" stroke="rgba(212,168,67,0.2)" stroke-width="1.5"/><path d="M18 22 L26 30 L36 18" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" fill="none"/><circle cx="28" cy="47" r="3" fill="rgba(212,168,67,0.4)"/></svg>`,
        },
        {
            num: '03',
            name: 'API & Backend Systems',
            desc: 'RESTful, GraphQL, microservices. Scalable, documented, battle-tested APIs that your frontend team will actually enjoy consuming.',
            icon: `<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="12" stroke="var(--gold)" stroke-width="1.5"/><circle cx="28" cy="28" r="22" stroke="rgba(212,168,67,0.2)" stroke-width="1" stroke-dasharray="4 6"/><circle cx="28" cy="6" r="4" fill="rgba(212,168,67,0.6)"/><circle cx="50" cy="28" r="4" fill="rgba(212,168,67,0.4)"/><circle cx="28" cy="50" r="4" fill="rgba(212,168,67,0.3)"/></svg>`,
        },
        {
            num: '04',
            name: 'Mobile-First Development',
            desc: "Responsive isn't a checkbox — it's a philosophy. Every interface we build feels native on every screen, every device.",
            icon: `<svg viewBox="0 0 56 56" fill="none"><rect x="14" y="8" width="28" height="40" rx="4" stroke="rgba(212,168,67,0.2)" stroke-width="1.5"/><rect x="18" y="14" width="20" height="26" rx="1" fill="rgba(212,168,67,0.05)" stroke="var(--gold)" stroke-width="1"/><circle cx="28" cy="44" r="2" fill="rgba(212,168,67,0.5)"/><path d="M22 22 L34 22 M22 27 L34 27 M22 32 L30 32" stroke="rgba(212,168,67,0.4)" stroke-width="1" stroke-linecap="round"/></svg>`,
        },
        {
            num: '05',
            name: 'Cloud & DevOps',
            desc: 'AWS, Docker, Kubernetes, CI/CD pipelines. Your product ships fast, scales gracefully, and stays online. No exceptions.',
            icon: `<svg viewBox="0 0 56 56" fill="none"><rect x="6" y="18" width="44" height="24" rx="2" stroke="rgba(212,168,67,0.2)" stroke-width="1.5"/><circle cx="14" cy="30" r="4" fill="rgba(212,168,67,0.3)"/><circle cx="28" cy="30" r="4" fill="var(--gold)" opacity="0.6"/><circle cx="42" cy="30" r="4" fill="rgba(212,168,67,0.3)"/><path d="M18 30 L24 30 M32 30 L38 30" stroke="rgba(212,168,67,0.3)" stroke-width="1.5"/></svg>`,
        },
        {
            num: '06',
            name: 'Database Architecture',
            desc: "Schemas that breathe. Whether SQL or NoSQL, normalized or document-based — we design for the product you're building next year.",
            icon: `<svg viewBox="0 0 56 56" fill="none"><ellipse cx="28" cy="22" rx="20" ry="8" stroke="var(--gold)" stroke-width="1.5" opacity="0.7"/><path d="M8 22 Q8 38 28 44 Q48 38 48 22" stroke="rgba(212,168,67,0.3)" stroke-width="1.5" fill="none"/><ellipse cx="28" cy="22" rx="20" ry="8" stroke="rgba(212,168,67,0.15)" stroke-width="1" fill="rgba(212,168,67,0.04)"/><path d="M8 30 Q8 40 28 44 Q48 40 48 30" stroke="rgba(212,168,67,0.2)" stroke-width="1" fill="none"/></svg>`,
        },
    ];
}
