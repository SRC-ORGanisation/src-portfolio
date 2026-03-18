import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
    selector: 'app-work',
    standalone: true,
    imports: [RevealDirective],
    template: `
    <section id="work">
      <div class="section-wrap">
        <div class="work-head" appReveal>
          <div>
            <div class="s-tag">Selected Work</div>
            <h2>What We've<br>Built</h2>
          </div>
          <div class="work-meta">15+ Projects<br>Delivered<br>On Time</div>
        </div>
        <div class="projects">

          <!-- P1 Featured -->
          <div class="proj p1" appReveal>
            <div class="proj-inner">
              <div class="proj-bg"></div>
              <img src="/images/project-nexus.png" alt="Nexus Dashboard" class="proj-img">
            </div>
            <div class="proj-overlay"></div>
            <div class="proj-tag">Featured · 2024</div>
            <div class="proj-arrow">↗</div>
            <div class="proj-content">
              <div class="proj-num">PROJECT 01 — SAAS PLATFORM</div>
              <div class="proj-name">Nexus — Analytics &amp;<br>Dashboard Platform</div>
              <div class="proj-stack">React · Node.js · PostgreSQL · AWS · Stripe</div>
            </div>
          </div>

          <!-- P2 -->
          <div class="proj p2" appReveal [delay]="'.1s'">
            <div class="proj-inner">
              <div class="proj-bg"></div>
              <img src="/images/project-bloom.png" alt="Bloom Marketplace" class="proj-img">
            </div>
            <div class="proj-overlay"></div>
            <div class="proj-tag">E-Commerce</div>
            <div class="proj-arrow">↗</div>
            <div class="proj-content">
              <div class="proj-num">PROJECT 02</div>
              <div class="proj-name">Bloom — Marketplace Platform</div>
              <div class="proj-stack">Next.js · Stripe · MongoDB · Vercel</div>
            </div>
          </div>

          <!-- P3 -->
          <div class="proj p3" appReveal [delay]="'.2s'">
            <div class="proj-inner">
              <div class="proj-bg"></div>
              <img src="/images/project-vault.png" alt="Vault Finance" class="proj-img">
            </div>
            <div class="proj-overlay"></div>
            <div class="proj-tag">Fintech</div>
            <div class="proj-arrow">↗</div>
            <div class="proj-content">
              <div class="proj-num">PROJECT 03</div>
              <div class="proj-name">Vault — Finance Tracker</div>
              <div class="proj-stack">Vue.js · Python · Firebase · Plaid API</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
    styles: [`
    :host { display: block; }
    #work { padding: 100px 0 180px; position: relative; }
    .work-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 60px; }
    .work-head h2 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(4rem, 7vw, 8rem); line-height: .88; letter-spacing: 2px; }
    .work-meta { font-family: 'JetBrains Mono', monospace; font-size: .6rem; letter-spacing: 3px; color: rgba(242,237,228,.2); text-transform: uppercase; text-align: right; line-height: 2.2; }
    .projects { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .proj { 
      position: relative; overflow: hidden; 
      background: var(--panel); 
      cursor: none; 
      aspect-ratio: 16/10; 
      display: flex; 
      align-items: flex-end; 
      padding: 48px;
      border-radius: var(--radius-md);
      border: 1px solid rgba(212,168,67,.04);
      transition: border-color .4s;
    }
    .proj:hover { border-color: rgba(212,168,67,.12); }
    .proj:first-child { grid-column: span 2; aspect-ratio: 21/9; }
    .proj-inner { position: absolute; inset: 0; transition: transform .7s var(--ease-out-expo); }
    .proj:hover .proj-inner { transform: scale(1.04); }
    .proj-bg { position: absolute; inset: 0; }
    .p1 .proj-bg { background: radial-gradient(ellipse 70% 80% at 15% 60%, rgba(255,61,26,.14) 0%, transparent 65%), radial-gradient(ellipse 50% 70% at 85% 20%, rgba(0,255,194,.09) 0%, transparent 65%), linear-gradient(145deg, #080816 0%, #12102A 100%); }
    .p2 .proj-bg { background: radial-gradient(ellipse 60% 80% at 80% 40%, rgba(0,255,194,.1) 0%, transparent 65%), linear-gradient(145deg, #080E14 0%, #0A1A1A 100%); }
    .p3 .proj-bg { background: radial-gradient(ellipse 60% 80% at 20% 60%, rgba(255,61,26,.1) 0%, transparent 65%), linear-gradient(145deg, #140808 0%, #1A1008 100%); }
    .proj-overlay { 
      position: absolute; inset: 0; 
      background: linear-gradient(to top, rgba(3,3,10,.92) 0%, rgba(3,3,10,.25) 55%, transparent 100%);
      transition: background .5s;
    }
    .proj:hover .proj-overlay {
      background: linear-gradient(to top, rgba(3,3,10,.85) 0%, rgba(3,3,10,.15) 55%, transparent 100%);
    }
    .proj-content { position: relative; z-index: 2; }
    .proj-num { font-family: 'JetBrains Mono', monospace; font-size: .55rem; letter-spacing: 4px; color: rgba(212,168,67,.5); text-transform: uppercase; margin-bottom: 10px; }
    .proj-name { 
      font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 3vw, 3rem); font-weight: 700; 
      margin-bottom: 10px; line-height: 1.1;
      transition: text-shadow .4s;
    }
    .proj:hover .proj-name { text-shadow: 0 0 30px rgba(212,168,67,.15); }
    .proj-stack { font-family: 'JetBrains Mono', monospace; font-size: .58rem; letter-spacing: 2px; color: rgba(242,237,228,.3); text-transform: uppercase; }
    .proj-arrow { 
      position: absolute; top: 36px; right: 36px; width: 52px; height: 52px; 
      border: 1px solid rgba(212,168,67,.2); 
      display: flex; align-items: center; justify-content: center; 
      color: var(--gold); font-size: 1.3rem; z-index: 2; 
      opacity: 0; transform: translate(15px, -15px); 
      transition: all .5s var(--ease-out-expo);
      border-radius: var(--radius-sm);
      backdrop-filter: blur(8px);
      background: rgba(3,3,10,.4);
    }
    .proj:hover .proj-arrow { opacity: 1; transform: translate(0,0); }
    .proj-tag { 
      position: absolute; top: 36px; left: 36px; 
      font-family: 'JetBrains Mono', monospace; font-size: .52rem; letter-spacing: 3px; 
      text-transform: uppercase; padding: 7px 14px; 
      background: rgba(212,168,67,.08); border: 1px solid rgba(212,168,67,.15); 
      color: var(--gold); z-index: 2;
      border-radius: 4px;
      backdrop-filter: blur(8px);
    }
    .proj-deco { position: absolute; z-index: 1; pointer-events: none; transition: transform .7s var(--ease-out-expo); }
    .proj:hover .proj-deco { transform: scale(1.08) rotate(5deg); }

    @media (max-width: 900px) {
      .projects { grid-template-columns: 1fr; }
      .proj:first-child { grid-column: span 1; }
      .work-head { flex-direction: column; gap: 24px; }
    }
    
    /* New image styles */
    .proj-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.6;
      transition: transform .7s var(--ease-out-expo), opacity .7s var(--ease-out-expo);
      z-index: 1;
    }
    .proj:hover .proj-img {
      transform: scale(1.05);
      opacity: 0.8;
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent { }
