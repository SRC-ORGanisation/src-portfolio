import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
    <footer>
      <div class="footer-top-line"></div>
      <div class="footer-content">
        <div class="f-logo">
          <span class="fl-s">S</span><span class="fl-dot">·</span><span class="fl-r">R</span><span class="fl-dot">·</span><span class="fl-c">C</span>
        </div>
        <ul class="f-links">
          <li><a href="#story">Story</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#cta">Contact</a></li>
        </ul>
        <button class="back-to-top" (click)="scrollToTop()">
          <span class="btt-arrow">↑</span>
          <span class="btt-text">Top</span>
        </button>
      </div>
      <p class="f-copy">© 2024 SRC · Saiteja · Ravi Kishore · Chakri</p>
    </footer>
  `,
    styles: [`
    footer {
      padding: 48px 70px 32px;
      position: relative;
    }
    .footer-top-line {
      position: absolute;
      top: 0;
      left: 70px;
      right: 70px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(212,168,67,.15), transparent);
    }
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    .f-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.5rem;
      letter-spacing: 4px;
      display: flex;
      align-items: baseline;
    }
    .fl-s { color: var(--s); }
    .fl-r { color: var(--r); }
    .fl-c { color: var(--c); }
    .fl-dot { color: rgba(242,237,228,.15); font-size: 1.2rem; margin: 0 2px; }
    .f-links { display: flex; gap: 32px; list-style: none; }
    .f-links a {
      font-family: 'JetBrains Mono', monospace;
      font-size: .58rem;
      letter-spacing: 2px;
      color: rgba(242, 237, 228, .25);
      text-decoration: none;
      text-transform: uppercase;
      transition: color .3s;
    }
    .f-links a:hover { color: var(--gold); }
    .back-to-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      background: none;
      border: 1px solid rgba(212,168,67,.15);
      padding: 10px 14px;
      cursor: pointer;
      border-radius: 8px;
      transition: all .3s var(--ease-out-expo);
    }
    .back-to-top:hover {
      border-color: rgba(212,168,67,.4);
      transform: translateY(-3px);
    }
    .btt-arrow {
      font-size: 1rem;
      color: var(--gold);
      animation: bounceArrow 2s ease-in-out infinite;
    }
    .btt-text {
      font-family: 'JetBrains Mono', monospace;
      font-size: .45rem;
      letter-spacing: 2px;
      color: rgba(242,237,228,.25);
      text-transform: uppercase;
    }
    .f-copy {
      font-family: 'JetBrains Mono', monospace;
      font-size: .5rem;
      letter-spacing: 2px;
      color: rgba(242, 237, 228, .15);
      text-transform: uppercase;
      text-align: center;
    }

    @media (max-width: 900px) {
      footer { padding: 36px 24px 24px; }
      .footer-top-line { left: 24px; right: 24px; }
      .footer-content { flex-direction: column; gap: 24px; text-align: center; }
      .f-links { flex-wrap: wrap; justify-content: center; }
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
