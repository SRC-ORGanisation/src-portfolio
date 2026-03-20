import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-chakri',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="profile-page c-theme">
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
            <img src="/images/chakri.png" alt="Chakri - Fullstack & DevOps" class="p-image">
            <div class="p-tech-float t1">∞ FS</div>
            <div class="p-tech-float t2">CI/CD</div>
            <div class="p-tech-float t3">Linux</div>
          </div>
          
          <div class="p-title">
            <div class="p-role">Fullstack &amp; DevOps</div>
            <h1>Chakri</h1>
            <p class="p-quote">"I ship, therefore I am."</p>
          </div>
        </div>

        <div class="p-content">
          <div class="p-col wide">
            <h2>The Bridge Between Worlds</h2>
            <p>Chakri is the glue that binds frontend elegance with backend power. Fluent across the entire stack, he eliminates the classic engineering problem of "handoffs" by bridging the gap flawlessly.</p>
            <p>From configuring highly available Kubernetes clusters to wrestling complex state management on the client, Chakri ensures delivery is smooth, automated, and continuous.</p>
            
            <div class="p-showcase">
              <div class="c-tag">Fullstack Delivery</div>
              <div class="ps-grid">
                <div class="ps-item">
                  <div class="ps-n">Deployments</div>
                  <div class="ps-v">Automated</div>
                </div>
                <div class="ps-item">
                  <div class="ps-n">Stack Comfort</div>
                  <div class="ps-v">100% End-to-End</div>
                </div>
                <div class="ps-item">
                  <div class="ps-n">Infrastructure</div>
                  <div class="ps-v">Scalable</div>
                </div>
                <div class="ps-item">
                  <div class="ps-n">Delivery</div>
                  <div class="ps-v">Zero Downtime</div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-col side">
            <div class="p-stack-card">
              <h3>Core Arsenal</h3>
              <div class="p-skills">
                <span class="p-sk">Vue.js</span>
                <span class="p-sk">Express</span>
                <span class="p-sk">CI/CD</span>
                <span class="p-sk">Firebase</span>
                <span class="p-sk">Linux</span>
                <span class="p-sk">GraphQL</span>
                <span class="p-sk">K8s</span>
              </div>
              
              <div class="p-stats">
                <div class="p-stat-row">
                  <span>Fullstack Flow</span>
                  <div class="p-bar"><div class="p-fill" style="width:96%"></div></div>
                </div>
                <div class="p-stat-row">
                  <span>Pipeline Automation</span>
                  <div class="p-bar"><div class="p-fill" style="width:94%"></div></div>
                </div>
                <div class="p-stat-row">
                  <span>Cloud Admin</span>
                  <div class="p-bar"><div class="p-fill" style="width:89%"></div></div>
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

    /* Theme variables for Chakri */
    .c-theme {
      --theme-main: var(--c);
      --theme-glow: rgba(212, 168, 67, 0.15);
      --theme-light: rgba(212, 168, 67, 0.6);
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
      animation: floatY 9s ease-in-out infinite reverse;
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
    .t1 { top: 50px; right: -20px; animation: floatY 6s ease-in-out infinite; }
    .t2 { bottom: 30px; left: 0px; animation: floatY2 8s ease-in-out infinite; }
    .t3 { bottom: 90px; right: 10px; animation: floatY 5s ease-in-out infinite reverse; }

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
    .c-tag {
      font-family: 'JetBrains Mono', monospace; font-size: .6rem;
      letter-spacing: 6px; color: var(--theme-main); text-transform: uppercase;
      display: flex; align-items: center; gap: 16px; margin-bottom: 24px;
    }
    .c-tag::before {
      content: ''; width: 32px; height: 1px;
      background: linear-gradient(90deg, var(--theme-main), transparent);
    }
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
export class ProfileChakriComponent { }
