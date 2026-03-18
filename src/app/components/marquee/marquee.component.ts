import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-marquee',
    standalone: true,
    template: `
    <div class="marquee-section">
      <div class="marquee-wrap">
        <div class="marquee-inner">
          <span class="marquee-item">FULLSTACK DEVELOPMENT</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">UI / UX DESIGN</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">REACT &amp; NODE.JS</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">SAITEJA × RAVI KISHORE × CHAKRI</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">API INTEGRATION</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">CLOUD DEPLOYMENT</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">MOBILE APPS</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">FULLSTACK DEVELOPMENT</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">UI / UX DESIGN</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">REACT &amp; NODE.JS</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">SAITEJA × RAVI KISHORE × CHAKRI</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">API INTEGRATION</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">CLOUD DEPLOYMENT</span><span class="marquee-sep">✦</span>
          <span class="marquee-item">MOBILE APPS</span><span class="marquee-sep">✦</span>
        </div>
      </div>
      <div class="marquee-wrap reverse">
        <div class="marquee-inner reverse-anim">
          <span class="marquee-item dim">ANGULAR</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">TYPESCRIPT</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">POSTGRESQL</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">DOCKER</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">AWS</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">FIGMA</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">GSAP</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">MONGODB</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">ANGULAR</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">TYPESCRIPT</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">POSTGRESQL</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">DOCKER</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">AWS</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">FIGMA</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">GSAP</span><span class="marquee-sep dim">·</span>
          <span class="marquee-item dim">MONGODB</span><span class="marquee-sep dim">·</span>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .marquee-section {
      position: relative;
      z-index: 5;
      overflow: hidden;
    }
    .marquee-wrap {
      overflow: hidden;
      padding: 12px 0;
      position: relative;
      border-top: 1px solid rgba(212,168,67,.1);
      background: linear-gradient(135deg, rgba(212,168,67,.06), rgba(255,61,26,.03), rgba(0,255,194,.02));
    }
    .marquee-wrap::before,
    .marquee-wrap::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 120px;
      z-index: 2;
      pointer-events: none;
    }
    .marquee-wrap::before {
      left: 0;
      background: linear-gradient(90deg, var(--bg), transparent);
    }
    .marquee-wrap::after {
      right: 0;
      background: linear-gradient(90deg, transparent, var(--bg));
    }
    .marquee-wrap.reverse {
      border-top: none;
      border-bottom: 1px solid rgba(212,168,67,.1);
      background: linear-gradient(135deg, rgba(0,255,194,.02), rgba(212,168,67,.04), rgba(255,61,26,.02));
    }
    .marquee-inner {
      display: flex;
      animation: marquee 25s linear infinite;
      will-change: transform;
    }
    .reverse-anim {
      animation: marqueeReverse 30s linear infinite;
    }
    .marquee-item {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1rem;
      letter-spacing: 5px;
      color: var(--white);
      padding: 0 40px;
      white-space: nowrap;
      transition: color .3s;
    }
    .marquee-item.dim {
      color: rgba(242,237,228,.25);
      font-size: .85rem;
      letter-spacing: 6px;
    }
    .marquee-sep {
      font-size: 1rem;
      color: var(--gold);
      opacity: .5;
      align-self: center;
    }
    .marquee-sep.dim {
      opacity: .2;
      color: rgba(242,237,228,.15);
    }

    .marquee-wrap:hover .marquee-inner {
      animation-play-state: paused;
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarqueeComponent { }
