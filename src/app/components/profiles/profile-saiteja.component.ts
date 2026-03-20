import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-saiteja',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="profile-page s-theme">
      <!-- Background Effects -->
      <div class="p-bg-grid"></div>
      <div class="p-bg-glow"></div>
      
      <!-- Nav back -->
      <a routerLink="/" class="p-back">
        <span class="p-arrow">←</span>
        <span>Back</span>
      </a>

      <div class="p-wrap">
        <div class="p-header">
          <div class="p-image-wrap">
            <div class="p-image-glow"></div>
            <img src="/images/saiteja.png" alt="Saiteja - Frontend Architect" class="p-image">
            <div class="p-tech-float t1">React</div>
            <div class="p-tech-float t2">&lt;UI/&gt;</div>
            <div class="p-tech-float t3">CSS</div>
          </div>
          
          <div class="p-title">
            <div class="p-role">Frontend Architect</div>
            <h1>Sai Teja</h1>
            <p class="p-quote">"I make browsers jealous."</p>
          </div>
        </div>

        <div class="p-content">
          <div class="p-col wide">
            <h2>The Visual Alchemist</h2>
            <p>Saiteja doesn't just write code; he orchestrates pixels. With a deep understanding of browser rendering engines and CSS object models, he builds interfaces that flow like water.</p>
            <p>Every animation, every layout shift, every micro-interaction is deliberately crafted. He bridges the gap between static design files and living, breathing applications that users actually enjoy using.</p>
            
            <div class="p-showcase">
              <div class="s-tag">Frontend Showcase</div>
              <div class="ps-grid">
                <div class="ps-item">
                  <div class="ps-n">Component Architecture</div>
                  <div class="ps-v">100% Modularity</div>
                </div>
                <div class="ps-item">
                  <div class="ps-n">Web Vitals</div>
                  <div class="ps-v">99+ Lighthouse</div>
                </div>
                <div class="ps-item">
                  <div class="ps-n">Animations</div>
                  <div class="ps-v">60fps GSAP</div>
                </div>
                <div class="ps-item">
                  <div class="ps-n">Accessibility</div>
                  <div class="ps-v">WCAG 2.1 AA</div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-col side">
            <div class="p-stack-card">
              <h3>Core Arsenal</h3>
              <div class="p-skills">
                <span class="p-sk">React</span>
                <span class="p-sk">Next.js</span>
                <span class="p-sk">TypeScript</span>
                <span class="p-sk">Tailwind</span>
                <span class="p-sk">GSAP</span>
                <span class="p-sk">Three.js</span>
                <span class="p-sk">Figma</span>
              </div>
              
              <div class="p-stats">
                <div class="p-stat-row">
                  <span>UI/UX Polish</span>
                  <div class="p-bar"><div class="p-fill" style="width:98%"></div></div>
                </div>
                <div class="p-stat-row">
                  <span>State Management</span>
                  <div class="p-bar"><div class="p-fill" style="width:94%"></div></div>
                </div>
                <div class="p-stat-row">
                  <span>Performance</span>
                  <div class="p-bar"><div class="p-fill" style="width:96%"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    
    .profile-page {
      min-height: 100vh;
      background: var(--bg);
      position: relative;
      overflow-x: hidden;
      padding-bottom: 120px;
    }

    /* Theme variables for Saiteja */
    .s-theme {
      --theme-main: var(--s);
      --theme-glow: rgba(255, 61, 26, 0.15);
      --theme-light: rgba(255, 61, 26, 0.6);
    }

    /* Backgrounds */
    .p-bg-grid {
      position: fixed; inset: 0; pointer-events: none; z-index: 1;
      background-image: 
        linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
      background-size: 50px 50px;
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%);
      -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%);
    }
    .p-bg-glow {
      position: fixed; top: 0; left: 50%; width: 100vw; height: 600px;
      transform: translateX(-50%); pointer-events: none; z-index: 1;
      background: radial-gradient(ellipse at center top, var(--theme-glow) 0%, transparent 70%);
    }

    /* Navigation */
    .p-back {
      position: absolute; top: 40px; left: 60px; z-index: 10;
      display: inline-flex; align-items: center; gap: 12px;
      font-family: 'JetBrains Mono', monospace; font-size: .65rem;
      letter-spacing: 3px; text-transform: uppercase; text-decoration: none;
      color: rgba(242,237,228,.4); transition: color .3s;
    }
    .p-back:hover { color: var(--theme-main); }
    .p-arrow { font-size: 1.2rem; transition: transform .3s var(--ease-out-expo); }
    .p-back:hover .p-arrow { transform: translateX(-6px); }

    /* Layout */
    .p-wrap {
      max-width: 1200px; margin: 0 auto; padding: 140px 40px 0;
      position: relative; z-index: 2;
    }

    /* Header */
    .p-header {
      display: flex; align-items: center; gap: 80px; margin-bottom: 100px;
    }
    
    /* Avatar / Image */
    .p-image-wrap {
      position: relative; width: 320px; height: 320px; flex-shrink: 0;
      animation: floatY 8s ease-in-out infinite;
    }
    .p-image-glow {
      position: absolute; inset: -20px; border-radius: 50%;
      background: var(--theme-main); filter: blur(60px); opacity: 0.15;
      animation: pulse 4s ease-in-out infinite;
    }
    .p-image {
      width: 100%; height: 100%; object-fit: cover; border-radius: 50%;
      position: relative; z-index: 2;
      border: 2px solid rgba(255,255,255,0.05);
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    }
    
    /* Floating tech elements */
    .p-tech-float {
      position: absolute; z-index: 3;
      font-family: 'JetBrains Mono', monospace; font-size: .6rem;
      padding: 6px 12px; background: rgba(13,13,26,0.8);
      border: 1px solid var(--theme-light); border-radius: 4px;
      color: var(--theme-main); backdrop-filter: blur(8px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    }
    .t1 { top: 20px; right: -10px; animation: floatY2 6s ease-in-out infinite; }
    .t2 { bottom: 60px; left: -20px; animation: floatY2 7s ease-in-out infinite reverse; }
    .t3 { bottom: 20px; right: 20px; animation: floatY 5s ease-in-out infinite; }

    /* Title section */
    .p-role {
      font-family: 'JetBrains Mono', monospace; font-size: .7rem;
      letter-spacing: 6px; text-transform: uppercase; color: var(--theme-main);
      margin-bottom: 16px; display: inline-block;
      border-bottom: 1px solid var(--theme-light); padding-bottom: 8px;
    }
    .p-title h1 {
      font-family: 'Bebas Neue', sans-serif; font-size: clamp(5rem, 10vw, 8rem);
      line-height: .9; margin-bottom: 24px; color: var(--white);
      text-shadow: 0 0 40px var(--theme-glow);
    }
    .p-quote {
      font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-style: italic;
      color: rgba(242,237,228,.5); max-width: 500px; line-height: 1.4;
    }

    /* Content Area */
    .p-content {
      display: grid; grid-template-columns: 1fr 380px; gap: 80px;
    }
    
    .p-col h2 {
      font-family: 'Cormorant Garamond', serif; font-size: 2.8rem;
      margin-bottom: 32px; color: var(--white);
    }
    .p-col p {
      font-size: 1.1rem; line-height: 1.9; color: rgba(242,237,228,.6);
      margin-bottom: 24px;
    }

    /* Showcase metrics */
    .p-showcase { margin-top: 60px; }
    .ps-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 32px;
    }
    .ps-item {
      padding: 24px; background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.05); border-radius: var(--radius-md);
      transition: all .3s;
    }
    .ps-item:hover {
      background: rgba(255,255,255,0.04);
      border-color: var(--theme-light);
      transform: translateY(-4px);
    }
    .ps-n {
      font-family: 'JetBrains Mono', monospace; font-size: .55rem;
      letter-spacing: 2px; text-transform: uppercase; color: rgba(242,237,228,.4);
      margin-bottom: 12px;
    }
    .ps-v {
      font-family: 'Bebas Neue', sans-serif; font-size: 2rem;
      color: var(--theme-main);
    }

    /* Side Stack Card */
    .p-stack-card {
      background: var(--glass-bg); backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.05); border-radius: var(--radius-lg);
      padding: 40px; position: sticky; top: 120px;
    }
    .p-stack-card h3 {
      font-family: 'JetBrains Mono', monospace; font-size: .8rem;
      letter-spacing: 4px; text-transform: uppercase; color: var(--white);
      margin-bottom: 32px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px;
    }
    .p-skills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 48px; }
    .p-sk {
      font-family: 'JetBrains Mono', monospace; font-size: .55rem;
      letter-spacing: 2px; text-transform: uppercase;
      padding: 8px 14px; background: rgba(0,0,0,0.3);
      border: 1px solid rgba(255,255,255,0.1); border-radius: 4px;
      color: rgba(242,237,228,.7); transition: all .3s;
    }
    .p-sk:hover {
      border-color: var(--theme-main); color: var(--theme-main);
      box-shadow: 0 0 20px var(--theme-glow);
    }

    /* Skill bars */
    .p-stat-row { margin-bottom: 24px; }
    .p-stat-row span {
      display: block; font-family: 'JetBrains Mono', monospace; font-size: .55rem;
      letter-spacing: 2px; text-transform: uppercase; color: rgba(242,237,228,.4);
      margin-bottom: 10px;
    }
    .p-bar {
      height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;
    }
    .p-fill {
      height: 100%; background: var(--theme-main); border-radius: 2px;
      box-shadow: 0 0 10px var(--theme-main);
    }

    @media (max-width: 1000px) {
      .p-header { flex-direction: column; text-align: center; gap: 40px; }
      .p-role { margin: 0 auto 16px; }
      .p-quote { margin: 0 auto; }
      .p-content { grid-template-columns: 1fr; }
      .p-stack-card { position: relative; top: 0; }
      .p-back { top: 20px; left: 24px; }
    }
    @media (max-width: 600px) {
      .p-image-wrap { width: 240px; height: 240px; }
      .ps-grid { grid-template-columns: 1fr; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSaitejaComponent { }
