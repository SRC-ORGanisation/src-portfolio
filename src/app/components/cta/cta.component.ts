import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
    selector: 'app-cta',
    standalone: true,
    imports: [RevealDirective, MagneticDirective],
    template: `
    <section id="cta">
      <div class="cta-glow"></div>
      <div class="cta-stripe"></div>
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;overflow:hidden">
        <div style="font-family:'Bebas Neue',sans-serif;font-size:40vw;color:rgba(242,237,228,.008);line-height:1;letter-spacing:-20px;animation:pulse 6s ease-in-out infinite">SRC</div>
      </div>
      <div class="section-wrap">
        <div class="cta-inner" appReveal>
          <div class="cta-tag">Ready to build something legendary?</div>
          <h2 class="cta-h">
            <span class="w1">Let's</span>
            <span class="w2">Work.</span>
          </h2>
          <a href="mailto:hello&#64;srcstudio.dev" class="cta-mail">
            <span>hello&#64;srcstudio.dev</span>
            <span class="mail-cursor">|</span>
          </a>
          <div style="display:flex;gap:20px;justify-content:center">
            <a href="mailto:hello&#64;srcstudio.dev" class="cta-main" appMagnetic><span>Start a Project</span></a>
            <a href="#story" class="cta-sec" appMagnetic>Our Story</a>
          </div>
          <div class="cta-badges">
            <div class="cb">
              <div class="cb-n">48H</div>
              <div class="cb-l">Response Time</div>
            </div>
            <div class="cb">
              <div class="cb-n">NDA</div>
              <div class="cb-l">Ready Always</div>
            </div>
            <div class="cb">
              <div class="cb-n">3×</div>
              <div class="cb-l">The Expertise</div>
            </div>
            <div class="cb">
              <div class="cb-n">∞</div>
              <div class="cb-l">Scalability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    :host { display: block; }
    #cta { padding: 140px 0; text-align: center; position: relative; overflow: hidden; }
    .cta-glow { 
      position: absolute; inset: 0; 
      background: radial-gradient(ellipse 70% 80% at 50% 100%, rgba(212,168,67,.08) 0%, transparent 65%); 
    }
    .cta-stripe { 
      position: absolute; inset: 0; 
      background: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(212,168,67,.015) 60px, rgba(212,168,67,.015) 61px); 
    }
    .cta-inner { position: relative; z-index: 1; }
    .cta-tag { 
      font-family: 'JetBrains Mono', monospace; font-size: .62rem; 
      letter-spacing: 8px; color: var(--gold); text-transform: uppercase; margin-bottom: 36px; 
    }
    .cta-h { 
      font-family: 'Bebas Neue', sans-serif; 
      font-size: clamp(6rem, 15vw, 16rem); 
      line-height: .85; letter-spacing: -2px; margin-bottom: 40px; 
    }
    .cta-h span { display: block; }
    .cta-h .w1 { color: var(--white); }
    .cta-h .w2 { 
      background: linear-gradient(135deg, var(--gold), var(--ember)); 
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; 
    }
    .cta-mail { 
      font-family: 'Cormorant Garamond', serif; font-style: italic; 
      font-size: clamp(1.4rem, 2.5vw, 2.5rem); 
      color: rgba(242,237,228,.35); text-decoration: none; 
      display: inline-flex; align-items: center;
      margin-bottom: 56px; transition: color .3s; 
    }
    .cta-mail:hover { color: var(--gold); }
    .mail-cursor {
      display: inline-block;
      color: var(--gold);
      animation: typewriterBlink 1s step-end infinite;
      margin-left: 4px;
      font-style: normal;
    }
    .cta-badges { 
      display: flex; justify-content: center; gap: 48px; margin-top: 60px; flex-wrap: wrap; 
    }
    .cb { 
      text-align: center;
      padding: 24px 20px;
      border: 1px solid rgba(212,168,67,.06);
      border-radius: var(--radius-md);
      background: rgba(13,13,26,.4);
      transition: all .4s var(--ease-out-expo);
      min-width: 120px;
    }
    .cb:hover {
      border-color: rgba(212,168,67,.15);
      transform: translateY(-4px);
      box-shadow: 0 8px 32px rgba(212,168,67,.08);
    }
    .cb-n { font-family: 'Bebas Neue', sans-serif; font-size: 2.8rem; color: var(--gold); line-height: 1; }
    .cb-l { 
      font-family: 'JetBrains Mono', monospace; font-size: .5rem; 
      letter-spacing: 3px; color: rgba(242,237,228,.25); text-transform: uppercase; margin-top: 8px; 
    }

    @media (max-width: 900px) {
      .cta-h { font-size: clamp(5rem, 18vw, 8rem); }
      .cta-badges { flex-direction: row; gap: 12px; }
      .cb { min-width: 0; flex: 1; padding: 16px 12px; }
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent { }
