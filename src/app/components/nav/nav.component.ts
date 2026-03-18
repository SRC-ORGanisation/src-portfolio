import { Component, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MagneticDirective],
  template: `
    <nav id="nav" [class.scrolled]="isScrolled" [class.nav-hidden]="isHidden">
      <div class="nav-logo" (mouseenter)="scrambleLogo()">
        <span class="logo-s">S</span><span class="logo-dot">·</span><span class="logo-r">R</span><span class="logo-dot">·</span><span class="logo-c">C</span>
      </div>
      <ul class="nav-links">
        <li><a href="#story">Origin</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
      <a href="#cta" class="nav-btn" appMagnetic><span>Let's Build</span></a>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 500;
      padding: 16px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: calc(100% - 48px);
      max-width: 1400px;
      transition: all .5s cubic-bezier(.16,1,.3,1);
      border-radius: 16px;
      background: transparent;
    }
    nav.scrolled {
      padding: 14px 36px;
      background: rgba(3, 3, 10, .75);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(212, 168, 67, .08);
      box-shadow: 0 8px 32px rgba(0, 0, 0, .3), inset 0 1px 0 rgba(255,255,255,.03);
    }
    nav.nav-hidden {
      transform: translateX(-50%) translateY(-120%);
    }
    .nav-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.8rem;
      letter-spacing: 4px;
      cursor: default;
      display: flex;
      align-items: baseline;
    }
    .logo-s { color: var(--s); text-shadow: 0 0 20px rgba(255,61,26,.3); }
    .logo-r { color: var(--r); text-shadow: 0 0 20px rgba(0,255,194,.3); }
    .logo-c { color: var(--c); text-shadow: 0 0 20px rgba(212,168,67,.3); }
    .logo-dot { color: rgba(242,237,228,.2); font-size: 1.4rem; margin: 0 2px; }
    .nav-links {
      display: flex;
      gap: 48px;
      list-style: none;
    }
    .nav-links a {
      font-family: 'JetBrains Mono', monospace;
      font-size: .62rem;
      color: rgba(242, 237, 228, .4);
      text-decoration: none;
      letter-spacing: 3px;
      text-transform: uppercase;
      transition: color .3s;
      position: relative;
      padding-bottom: 4px;
    }
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 50%;
      height: 1px;
      background: var(--gold);
      transition: left .3s cubic-bezier(.16,1,.3,1), right .3s cubic-bezier(.16,1,.3,1);
    }
    .nav-links a:hover { color: var(--gold); }
    .nav-links a:hover::after { left: 0; right: 0; }
    .nav-btn {
      font-family: 'JetBrains Mono', monospace;
      font-size: .6rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 10px 24px;
      background: transparent;
      border: 1px solid rgba(212, 168, 67, .3);
      color: var(--gold);
      text-decoration: none;
      transition: all .4s cubic-bezier(.16,1,.3,1);
      position: relative;
      overflow: hidden;
      border-radius: 8px;
    }
    .nav-btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(212,168,67,.15), rgba(255,61,26,.1));
      transform: translateY(101%);
      transition: transform .4s cubic-bezier(.16,1,.3,1);
      border-radius: 8px;
    }
    .nav-btn:hover::before { transform: translateY(0); }
    .nav-btn:hover {
      border-color: rgba(212, 168, 67, .5);
      box-shadow: 0 0 20px rgba(212,168,67,.1);
    }
    .nav-btn span { position: relative; z-index: 1; }

    @media (max-width: 900px) {
      nav { 
        padding: 16px 20px; 
        width: calc(100% - 24px);
        top: 8px;
      }
      .nav-links, .nav-btn { display: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  isScrolled = false;
  isHidden = false;
  logoText = 'SRC';

  private lastScrollY = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY;
    this.isScrolled = scrollY > 80;

    // Hide on scroll down, show on scroll up
    if (scrollY > this.lastScrollY && scrollY > 300) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollY = scrollY;
    this.cdr.markForCheck();
  }

  scrambleLogo(): void {
    // Logo is now individual spans, scramble not needed for the new design
    // but we keep a subtle glow pulse effect
  }
}
