import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RevealDirective, RouterModule],
  template: `
    <section id="team">
      <div class="team-bg-text">S · R · C</div>
      <div class="section-wrap">
        <div class="team-header" appReveal>
          <div class="s-tag" style="justify-content:center">The Three Pillars</div>
          <h2>Meet the <span>architects</span><br>of your next product</h2>
        </div>
        <div class="team-cards">

          <!-- SAITEJA -->
          <div class="t-card tc-s" appReveal>
            <div class="t-bg-letter">S</div>
            <div class="t-card-glow tc-s-glow"></div>
            <div class="t-avatar" style="animation:glowPulse 3s ease-in-out infinite">
              <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <defs><radialGradient id="av-s" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#FF6B50"/><stop offset="100%" stop-color="#FF1A00"/></radialGradient></defs>
                <circle cx="40" cy="40" r="40" fill="rgba(255,61,26,0.12)"/>
                <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,61,26,0.3)" stroke-width="1"/>
                <ellipse cx="40" cy="34" rx="16" ry="18" fill="url(#av-s)" opacity="0.9"/>
                <path d="M24 28 Q24 14 40 12 Q56 14 56 28 Q50 18 40 17 Q30 18 24 28Z" fill="rgba(20,10,5,0.9)"/>
                <ellipse cx="34" cy="31" rx="3" ry="3.5" fill="#1a0800"/>
                <ellipse cx="46" cy="31" rx="3" ry="3.5" fill="#1a0800"/>
                <circle cx="35" cy="30" r="1.2" fill="rgba(255,255,255,0.9)"/>
                <circle cx="47" cy="30" r="1.2" fill="rgba(255,255,255,0.9)"/>
                <image href="/images/saiteja.png" x="12" y="12" width="56" height="56" preserveAspectRatio="xMidYMid slice" style="border-radius: 50%" clip-path="circle(28px at 40px 40px)"/>
                <path d="M18 70 Q20 54 40 52 Q60 54 62 70" fill="rgba(255,61,26,0.25)"/>
                <text x="33" y="65" font-family="monospace" font-size="8" fill="rgba(255,61,26,0.6)">&lt;/&gt;</text>
                <circle cx="40" cy="40" r="38" fill="none" stroke="rgba(255,61,26,0.15)" stroke-width="2" stroke-dasharray="4 6"/>
              </svg>
            </div>
            <div class="t-role">Frontend Architect</div>
            <div class="t-name">Sai Teja</div>
            <div class="t-quote">"I make browsers jealous"</div>
            <p class="t-desc">The visual alchemist. Saiteja sees the finished product before a single keystroke. He transforms wireframes into living, breathing interfaces that feel inevitable.</p>
            <div class="t-skills">
              <span class="t-sk">React</span><span class="t-sk">Next.js</span><span class="t-sk">TypeScript</span><span class="t-sk">Tailwind</span><span class="t-sk">Figma</span><span class="t-sk">GSAP</span><span class="t-sk">Three.js</span>
            </div>
            <div class="skill-bar-wrap">
              <div class="sb-row"><span class="sb-name">React</span><div class="sb-track"><div class="sb-fill" [attr.data-w]="96" style="background:var(--s)"></div></div><span class="sb-pct">96%</span></div>
              <div class="sb-row"><span class="sb-name">UI/UX</span><div class="sb-track"><div class="sb-fill" [attr.data-w]="92" style="background:var(--s)"></div></div><span class="sb-pct">92%</span></div>
              <div class="sb-row"><span class="sb-name">Animation</span><div class="sb-track"><div class="sb-fill" [attr.data-w]="88" style="background:var(--s)"></div></div><span class="sb-pct">88%</span></div>
            </div>
            <a routerLink="/profile/saiteja" class="t-link">View Portfolio</a>
          </div>

          <!-- RAVI KISHORE -->
          <div class="t-card tc-r" appReveal [delay]="'.15s'">
            <div class="t-bg-letter">R</div>
            <div class="t-card-glow tc-r-glow"></div>
            <div class="t-avatar" style="animation:glowPulse 3.5s ease-in-out infinite;animation-delay:-1s">
              <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <defs><radialGradient id="av-r" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#40FFD0"/><stop offset="100%" stop-color="#00C890"/></radialGradient></defs>
                <circle cx="40" cy="40" r="40" fill="rgba(0,255,194,0.1)"/>
                <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(0,255,194,0.25)" stroke-width="1"/>
                <ellipse cx="40" cy="34" rx="16" ry="18" fill="url(#av-r)" opacity="0.85"/>
                <path d="M24 30 Q24 14 40 12 Q56 14 56 30 Q51 20 40 19 Q29 20 24 30Z" fill="rgba(10,25,20,0.95)"/>
                <ellipse cx="34" cy="31" rx="3" ry="3.5" fill="#051510"/>
                <ellipse cx="46" cy="31" rx="3" ry="3.5" fill="#051510"/>
                <circle cx="35" cy="30" r="1.2" fill="rgba(255,255,255,0.9)"/>
                <circle cx="47" cy="30" r="1.2" fill="rgba(255,255,255,0.9)"/>
                <path d="M34 40 Q40 44 46 40" stroke="#051510" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                <rect x="29" y="27" width="11" height="8" rx="2" fill="none" stroke="rgba(0,255,194,0.5)" stroke-width="1"/>
                <rect x="41" y="27" width="11" height="8" rx="2" fill="none" stroke="rgba(0,255,194,0.5)" stroke-width="1"/>
                <image href="/images/ravi.png" x="12" y="12" width="56" height="56" preserveAspectRatio="xMidYMid slice" clip-path="circle(28px at 40px 40px)"/>
                <path d="M18 70 Q20 54 40 52 Q60 54 62 70" fill="rgba(0,255,194,0.2)"/>
                <text x="33" y="65" font-family="monospace" font-size="7" fill="rgba(0,255,194,0.6)">{{ '{' }}API{{ '}' }}</text>
                <circle cx="40" cy="40" r="38" fill="none" stroke="rgba(0,255,194,0.12)" stroke-width="2" stroke-dasharray="2 4"/>
              </svg>
            </div>
            <div class="t-role">Backend Engineer</div>
            <div class="t-name">Ravi Kishore</div>
            <div class="t-quote">"Your data's safest hands"</div>
            <p class="t-desc">The architect of invisible excellence. Ravi builds the systems that never break. APIs that sing, databases that scale, and server logic so clean it reads like literature.</p>
            <div class="t-skills">
              <span class="t-sk">Node.js</span><span class="t-sk">Python</span><span class="t-sk">PostgreSQL</span><span class="t-sk">MongoDB</span><span class="t-sk">AWS</span><span class="t-sk">Docker</span><span class="t-sk">Redis</span>
            </div>
            <div class="skill-bar-wrap">
              <div class="sb-row"><span class="sb-name">Node.js</span><div class="sb-track"><div class="sb-fill" [attr.data-w]="97" style="background:var(--r)"></div></div><span class="sb-pct">97%</span></div>
              <div class="sb-row"><span class="sb-name">DB Design</span><div class="sb-track"><div class="sb-fill" [attr.data-w]="94" style="background:var(--r)"></div></div><span class="sb-pct">94%</span></div>
              <div class="sb-row"><span class="sb-name">DevOps</span><div class="sb-track"><div class="sb-fill" [attr.data-w]="89" style="background:var(--r)"></div></div><span class="sb-pct">89%</span></div>
            </div>
            <a routerLink="/profile/ravi" class="t-link">View Portfolio</a>
          </div>

          <!-- CHAKRI -->
          <div class="t-card tc-c" appReveal [delay]="'.3s'">
            <div class="t-bg-letter">C</div>
            <div class="t-card-glow tc-c-glow"></div>
            <div class="t-avatar" style="animation:glowPulse 4s ease-in-out infinite;animation-delay:-2s">
              <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <defs><radialGradient id="av-c" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#E8C060"/><stop offset="100%" stop-color="#B8860B"/></radialGradient></defs>
                <circle cx="40" cy="40" r="40" fill="rgba(212,168,67,0.1)"/>
                <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(212,168,67,0.25)" stroke-width="1"/>
                <ellipse cx="40" cy="34" rx="16" ry="18" fill="url(#av-c)" opacity="0.9"/>
                <path d="M24 32 Q23 14 40 11 Q57 14 56 32 Q50 22 40 21 Q30 22 24 32Z" fill="rgba(15,10,0,0.95)"/>
                <ellipse cx="34" cy="31" rx="3" ry="3.5" fill="#100800"/>
                <ellipse cx="46" cy="31" rx="3" ry="3.5" fill="#100800"/>
                <circle cx="35" cy="30" r="1.2" fill="rgba(255,255,255,0.9)"/>
                <circle cx="47" cy="30" r="1.2" fill="rgba(255,255,255,0.9)"/>
                <path d="M34 40 Q40 44 46 40" stroke="#100800" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                <path d="M22 30 Q22 14 40 14 Q58 14 58 30" fill="none" stroke="rgba(212,168,67,0.6)" stroke-width="2.5" stroke-linecap="round"/>
                <rect x="20" y="28" width="6" height="10" rx="3" fill="rgba(212,168,67,0.5)"/>
                <image href="/images/chakri.png" x="12" y="12" width="56" height="56" preserveAspectRatio="xMidYMid slice" clip-path="circle(28px at 40px 40px)"/>
                <path d="M18 70 Q20 54 40 52 Q60 54 62 70" fill="rgba(212,168,67,0.18)"/>
                <text x="33" y="65" font-family="monospace" font-size="7" fill="rgba(212,168,67,0.6)">∞ FS</text>
                <circle cx="40" cy="40" r="38" fill="none" stroke="rgba(212,168,67,0.12)" stroke-width="2" stroke-dasharray="8 4"/>
              </svg>
            </div>
            <div class="t-role">Fullstack &amp; DevOps</div>
            <div class="t-name">Chakri</div>
            <div class="t-quote">"I ship, therefore I am"</div>
            <p class="t-desc">The bridge between worlds. Fluent in frontend elegance and backend power, Chakri is the one who brings both halves together and makes sure everything actually reaches your users.</p>
            <div class="t-skills">
              <span class="t-sk">Vue.js</span><span class="t-sk">Express</span><span class="t-sk">CI/CD</span><span class="t-sk">Firebase</span><span class="t-sk">Linux</span><span class="t-sk">GraphQL</span><span class="t-sk">K8s</span>
            </div>
            <div class="skill-bar-wrap">
              <div class="sb-row"><span class="sb-name">Fullstack</span><div class="sb-track"><div class="sb-fill" [attr.data-w]="93" style="background:var(--c)"></div></div><span class="sb-pct">93%</span></div>
              <div class="sb-row"><span class="sb-name">DevOps</span><div class="sb-track"><div class="sb-fill" [attr.data-w]="91" style="background:var(--c)"></div></div><span class="sb-pct">91%</span></div>
              <div class="sb-row"><span class="sb-name">Infra</span><div class="sb-track"><div class="sb-fill" [attr.data-w]="85" style="background:var(--c)"></div></div><span class="sb-pct">85%</span></div>
            </div>
            <a routerLink="/profile/chakri" class="t-link">View Portfolio</a>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    #team { padding: 100px 0 180px; position: relative; }
    .team-bg-text {
      position: absolute; font-family: 'Bebas Neue', sans-serif; font-size: 22vw;
      color: rgba(242, 237, 228, .015); top: 50%; left: 50%;
      transform: translate(-50%, -50%); white-space: nowrap; pointer-events: none; letter-spacing: 20px;
    }
    .team-header { text-align: center; margin-bottom: 90px; }
    .team-header h2 {
      font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5rem, 5vw, 5rem);
      font-weight: 700; line-height: 1.05;
    }
    .team-header h2 span {
      background: linear-gradient(135deg, var(--s), var(--gold), var(--r));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .team-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .t-card {
      position: relative; overflow: hidden; 
      background: rgba(13,13,26,.7);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(212,168,67,.06);
      padding: 56px 44px 48px;
      cursor: none; 
      transition: transform .5s var(--ease-out-expo), box-shadow .5s, border-color .5s;
      border-radius: var(--radius-md);
    }
    .t-card:hover { 
      transform: translateY(-12px);
      z-index: 3;
      border-color: rgba(212,168,67,.15);
    }
    .tc-s:hover { box-shadow: 0 20px 60px rgba(255,61,26,.12), 0 0 0 1px rgba(255,61,26,.1); }
    .tc-r:hover { box-shadow: 0 20px 60px rgba(0,255,194,.1), 0 0 0 1px rgba(0,255,194,.08); }
    .tc-c:hover { box-shadow: 0 20px 60px rgba(212,168,67,.12), 0 0 0 1px rgba(212,168,67,.1); }

    .t-card-glow {
      position: absolute;
      top: -2px;
      left: 0;
      right: 0;
      height: 3px;
      opacity: 0;
      transition: opacity .4s;
      border-radius: var(--radius-md) var(--radius-md) 0 0;
    }
    .tc-s-glow { background: linear-gradient(90deg, var(--s), transparent 80%); }
    .tc-r-glow { background: linear-gradient(90deg, var(--r), transparent 80%); }
    .tc-c-glow { background: linear-gradient(90deg, var(--c), transparent 80%); }
    .t-card:hover .t-card-glow { opacity: 1; }

    .t-avatar { width: 80px; height: 80px; border-radius: 50%; margin-bottom: 32px; position: relative; overflow: hidden; }
    .t-avatar svg { width: 100%; height: 100%; }
    .tc-s .t-avatar { box-shadow: 0 0 30px rgba(255, 61, 26, .3); }
    .tc-r .t-avatar { box-shadow: 0 0 30px rgba(0, 255, 194, .2); }
    .tc-c .t-avatar { box-shadow: 0 0 30px rgba(212, 168, 67, .25); }
    .t-bg-letter {
      position: absolute; top: 10px; right: 16px; font-family: 'Bebas Neue', sans-serif;
      font-size: 9rem; line-height: 1; opacity: .06; 
      transition: opacity .5s var(--ease-out-expo), transform .6s var(--ease-out-expo);
    }
    .t-card:hover .t-bg-letter { opacity: .2; transform: scale(1.15) rotate(8deg); }
    .tc-s .t-bg-letter { color: var(--s); }
    .tc-r .t-bg-letter { color: var(--r); }
    .tc-c .t-bg-letter { color: var(--c); }
    .t-role {
      font-family: 'JetBrains Mono', monospace; font-size: .62rem;
      letter-spacing: 4px; text-transform: uppercase; margin-bottom: 14px;
    }
    .tc-s .t-role { color: var(--s); } .tc-r .t-role { color: var(--r); } .tc-c .t-role { color: var(--c); }
    .t-name { font-family: 'Cormorant Garamond', serif; font-size: 2.4rem; font-weight: 700; line-height: 1.05; margin-bottom: 8px; }
    .t-quote { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: .95rem; color: rgba(242, 237, 228, .3); margin-bottom: 28px; }
    .t-desc { font-size: .9rem; line-height: 1.85; color: rgba(242, 237, 228, .5); margin-bottom: 32px; }
    .t-skills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 36px; }
    .t-sk {
      font-family: 'JetBrains Mono', monospace; font-size: .52rem; letter-spacing: 2px;
      padding: 5px 11px; background: rgba(242,237,228,.03); border: 1px solid rgba(242,237,228,.08);
      color: rgba(242,237,228,.4); text-transform: uppercase; transition: all .3s;
      border-radius: 4px;
    }
    .t-card:hover .t-sk { 
      border-color: rgba(242,237,228,.15); 
      color: rgba(242,237,228,.7);
      background: rgba(242,237,228,.05);
    }
    .skill-bar-wrap { margin-bottom: 36px; }
    .sb-row { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
    .sb-name { font-family: 'JetBrains Mono', monospace; font-size: .52rem; letter-spacing: 2px; text-transform: uppercase; color: rgba(242,237,228,.3); width: 80px; }
    .sb-track { flex: 1; height: 3px; background: rgba(255,255,255,.04); position: relative; overflow: hidden; border-radius: 3px; }
    .sb-fill { 
      position: absolute; left: 0; top: 0; height: 100%; width: 0; 
      transition: width 1.5s var(--ease-out-expo);
      border-radius: 3px;
      background-image: linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent);
      background-size: 200% 100%;
    }
    .t-card:hover .sb-fill {
      animation: shimmer 2s ease-in-out infinite;
    }
    .sb-pct { font-family: 'JetBrains Mono', monospace; font-size: .5rem; color: rgba(242,237,228,.3); width: 30px; text-align: right; }
    .t-link {
      font-family: 'JetBrains Mono', monospace; font-size: .62rem; letter-spacing: 3px;
      text-transform: uppercase; text-decoration: none; display: inline-flex;
      align-items: center; gap: 10px; transition: gap .3s var(--ease-out-expo);
    }
    .tc-s .t-link { color: var(--s); } .tc-r .t-link { color: var(--r); } .tc-c .t-link { color: var(--c); }
    .t-link:hover { gap: 20px; }
    .t-link::after { content: '→'; font-size: 1rem; }

    @media (max-width: 900px) { 
      .team-cards { grid-template-columns: 1fr; gap: 16px; }
      .t-card { padding: 40px 28px 36px; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent { }
