import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
    selector: 'app-process',
    standalone: true,
    imports: [RevealDirective],
    template: `
    <section id="process">
      <div class="proc-bg-text">PROCESS</div>
      <div class="section-wrap" style="position:relative;z-index:1">
        <div class="proc-head" appReveal>
          <div class="s-tag">How We Work</div>
          <h2>Our <em>obsessive</em><br>four-step ritual</h2>
        </div>
        <div class="proc-timeline">
          <div class="timeline-line"></div>
          @for (step of steps; track step.num; let i = $index) {
            <div class="p-step" [class.step-right]="i % 2 !== 0" appReveal [delay]="(i * 0.12) + 's'">
              <div class="step-dot">
                <span class="dot-inner"></span>
                <span class="dot-ring"></span>
              </div>
              <div class="step-card">
                <div class="ps-num">{{ step.num }}</div>
                <div class="ps-t">{{ step.title }}</div>
                <p class="ps-d">{{ step.desc }}</p>
                <div class="ps-ico">{{ step.icon }}</div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
    styles: [`
    :host { display: block; }
    #process { padding: 160px 0; position: relative; overflow: hidden; }
    .proc-bg-text {
      position: absolute; font-family: 'Bebas Neue', sans-serif; font-size: 25vw;
      color: rgba(242,237,228,.015); white-space: nowrap; top: 50%; left: 50%;
      transform: translate(-50%, -50%); pointer-events: none; letter-spacing: 10px;
    }
    .proc-head { margin-bottom: 80px; }
    .proc-head h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 4.5vw, 5rem); font-weight: 700; line-height: 1.05; }
    .proc-head h2 em { font-style: italic; color: var(--gold); }

    .proc-timeline {
      position: relative;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px 0;
    }
    .timeline-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 1px;
      background: linear-gradient(180deg, transparent, rgba(212,168,67,.2), rgba(212,168,67,.2), transparent);
    }

    .p-step {
      display: flex;
      align-items: flex-start;
      margin-bottom: 60px;
      position: relative;
    }
    .p-step:last-child { margin-bottom: 0; }

    .step-dot {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dot-inner {
      width: 8px;
      height: 8px;
      background: var(--gold);
      border-radius: 50%;
      position: relative;
      z-index: 1;
    }
    .dot-ring {
      position: absolute;
      width: 20px;
      height: 20px;
      border: 1px solid rgba(212,168,67,.3);
      border-radius: 50%;
      animation: breathe 3s ease-in-out infinite;
    }

    .step-card {
      width: calc(50% - 40px);
      background: rgba(13,13,26,.6);
      border: 1px solid rgba(212,168,67,.06);
      padding: 44px 36px;
      position: relative;
      overflow: hidden;
      transition: all .4s var(--ease-out-expo);
      border-radius: var(--radius-md);
      backdrop-filter: blur(12px);
    }
    .step-card:hover {
      border-color: rgba(212,168,67,.15);
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0,0,0,.3);
    }

    /* Default: card on the left */
    .p-step .step-card { margin-right: auto; }
    /* Alternating: card on the right */
    .p-step.step-right .step-card { margin-left: auto; }

    .ps-num { 
      font-family: 'Bebas Neue', sans-serif; font-size: 4rem; 
      color: var(--gold); opacity: .15; line-height: 1; margin-bottom: 20px; 
      transition: opacity .3s; 
    }
    .step-card:hover .ps-num { opacity: .4; }
    .ps-t { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 700; margin-bottom: 14px; }
    .ps-d { font-size: .88rem; line-height: 1.85; color: rgba(242,237,228,.4); }
    .ps-ico { 
      position: absolute; bottom: 24px; right: 24px; font-size: 2rem; opacity: .12; 
      transition: opacity .3s, transform .4s var(--ease-out-expo); 
    }
    .step-card:hover .ps-ico { opacity: .5; transform: scale(1.2) rotate(10deg); }

    @media (max-width: 900px) { 
      .timeline-line { left: 20px; }
      .step-dot { left: 20px; }
      .p-step .step-card,
      .p-step.step-right .step-card { 
        width: calc(100% - 60px);
        margin-left: auto;
        margin-right: 0;
      }
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent {
    steps = [
        { num: '01', title: 'Deep Discovery', desc: "We don't start with code. We start with ruthless questions. What problem, who for, what does real success look like at 1000 users?", icon: '🔍' },
        { num: '02', title: 'Design Sprint', desc: 'Wireframes, prototypes, component libraries. You see the product before we write a single migration. No surprises.', icon: '✦' },
        { num: '03', title: 'Agile Build', desc: "Weekly sprints. Live staging demos. Transparent Notion boards. You're never in the dark about what's happening or why.", icon: '⚡' },
        { num: '04', title: 'Launch + Beyond', desc: 'Go-live is act one, not the finale. We monitor, optimize, and support. Your growth is our portfolio.', icon: '🚀' },
    ];
}
