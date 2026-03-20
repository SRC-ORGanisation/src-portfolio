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
      border-radius: var(--radius-lg);
      border: 1px solid rgba(255,255,255,.03);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      transition: all .5s var(--ease-out-expo);
    }
    .proj:hover { 
      border-color: rgba(255,255,255,.1); 
      transform: translateY(-8px);
    }
    .proj:first-child { grid-column: span 2; aspect-ratio: 21/9; }
    .proj-inner { position: absolute; inset: 0; transition: transform .7s var(--ease-out-expo); }
    .proj:hover .proj-inner { transform: scale(1.04); }
    .proj-bg { position: absolute; inset: 0; }
    .p1 .proj-bg { background: linear-gradient(145deg, rgba(255,61,26,.05) 0%, transparent 100%); }
    .p2 .proj-bg { background: linear-gradient(145deg, rgba(0,255,194,.05) 0%, transparent 100%); }
    .p3 .proj-bg { background: linear-gradient(145deg, rgba(212,168,67,.05) 0%, transparent 100%); }
    .proj-overlay { 
      position: absolute; inset: 0; 
      background: linear-gradient(to top, rgba(3,3,10,0.95) 0%, rgba(3,3,10,0.4) 40%, transparent 100%);
      transition: opacity .5s ease;
      z-index: 1;
    }
    .proj:hover .proj-overlay {
      opacity: 0.8;
    }
    .proj-content { position: relative; z-index: 2; }
    .proj-num { font-family: 'JetBrains Mono', monospace; font-size: .55rem; letter-spacing: 4px; color: rgba(212,168,67,.5); text-transform: uppercase; margin-bottom: 10px; }
    .proj-name { 
      font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 3vw, 3rem); font-weight: 700; 
      margin-bottom: 15px; line-height: 1.1; color: var(--white);
      transition: text-shadow .4s, transform .5s var(--ease-out-expo);
    }
    .proj:hover .proj-name { 
      text-shadow: 0 0 40px rgba(255,255,255,.3); 
      transform: translateY(-4px); 
    }
    .proj-stack { font-family: 'JetBrains Mono', monospace; font-size: .58rem; letter-spacing: 2px; color: rgba(242,237,228,.3); text-transform: uppercase; }
    .proj-arrow { 
      position: absolute; top: 36px; right: 36px; width: 52px; height: 52px; 
      border: 1px solid rgba(255,255,255,.1); 
      display: flex; align-items: center; justify-content: center; 
      color: var(--white); font-size: 1.3rem; z-index: 2; 
      opacity: 0; transform: translate(15px, -15px) rotate(-45deg); 
      transition: all .6s var(--ease-out-expo);
      border-radius: 50%;
      backdrop-filter: blur(12px);
      background: rgba(255,255,255,.05);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .proj:hover .proj-arrow { 
      opacity: 1; 
      transform: translate(0,0) rotate(0deg); 
      background: var(--white);
      color: var(--bg);
    }
    .proj-tag { 
      position: absolute; top: 36px; left: 36px; 
      font-family: 'JetBrains Mono', monospace; font-size: .52rem; letter-spacing: 3px; 
      text-transform: uppercase; padding: 7px 14px; 
      background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); 
      color: var(--white); z-index: 2;
      border-radius: 20px;
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
      opacity: 0.85;
      filter: grayscale(20%) contrast(1.1);
      transition: transform 1s var(--ease-out-expo), opacity .8s ease, filter .8s ease;
      z-index: 0;
    }
    .proj:hover .proj-img {
      transform: scale(1.08);
      opacity: 1;
      filter: grayscale(0%) contrast(1.15) brightness(1.1);
    }
    .p1:hover { box-shadow: 0 20px 60px rgba(255,61,26,0.15), 0 0 20px rgba(255,61,26,0.05); border-color: rgba(255,61,26,0.3); }
    .p2:hover { box-shadow: 0 20px 60px rgba(0,255,194,0.15), 0 0 20px rgba(0,255,194,0.05); border-color: rgba(0,255,194,0.3); }
    .p3:hover { box-shadow: 0 20px 60px rgba(212,168,67,0.15), 0 0 20px rgba(212,168,67,0.05); border-color: rgba(212,168,67,0.3); }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent { }
