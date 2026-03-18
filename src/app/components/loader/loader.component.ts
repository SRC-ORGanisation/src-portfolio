import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    <div id="loader" [class.gone]="isDone">
      <div class="loader-bg"></div>
      <div class="loader-content">
        <div class="loader-letters">
          <span class="loader-l s" [style.opacity]="letterVisible[0] ? '1' : '0'" 
                [style.transform]="letterVisible[0] ? 'translateY(0) rotate(0)' : 'translateY(80px) rotate(10deg)'"
                [style.filter]="letterVisible[0] ? 'blur(0)' : 'blur(8px)'">S</span>
          <span class="loader-dot" [style.opacity]="dotVisible ? '1' : '0'"
                [style.transform]="dotVisible ? 'scale(1)' : 'scale(0)'">·</span>
          <span class="loader-l r" [style.opacity]="letterVisible[1] ? '1' : '0'" 
                [style.transform]="letterVisible[1] ? 'translateY(0) rotate(0)' : 'translateY(80px) rotate(-10deg)'"
                [style.filter]="letterVisible[1] ? 'blur(0)' : 'blur(8px)'">R</span>
          <span class="loader-dot" [style.opacity]="dotVisible ? '1' : '0'"
                [style.transform]="dotVisible ? 'scale(1)' : 'scale(0)'">·</span>
          <span class="loader-l c" [style.opacity]="letterVisible[2] ? '1' : '0'" 
                [style.transform]="letterVisible[2] ? 'translateY(0) rotate(0)' : 'translateY(80px) rotate(10deg)'"
                [style.filter]="letterVisible[2] ? 'blur(0)' : 'blur(8px)'">C</span>
        </div>
        <div class="loader-line" [style.transform]="'scaleX(' + lineScale + ')'"></div>
        <p class="loader-text" [style.opacity]="textOpacity">{{ currentText }}</p>
      </div>
      <div class="loader-wipe" [style.transform]="wipeActive ? 'scaleY(0)' : 'scaleY(1)'"></div>
    </div>
  `,
  styles: [`
    #loader {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity .6s cubic-bezier(.16,1,.3,1), visibility .6s;
    }
    #loader.gone { opacity: 0; visibility: hidden; pointer-events: none; }
    .loader-bg {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 60% 60% at 50% 50%, #0a0a1a, var(--bg));
    }
    .loader-wipe {
      position: absolute;
      inset: 0;
      background: var(--bg);
      transform-origin: top;
      transition: transform 1s cubic-bezier(.77,0,.175,1);
      z-index: 1;
    }
    .loader-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .loader-letters { display: flex; align-items: baseline; gap: 4px; }
    .loader-l {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 9rem;
      line-height: 1;
      transition: all .8s cubic-bezier(.16, 1, .3, 1);
    }
    .loader-l.s { color: var(--s); text-shadow: 0 0 60px rgba(255,61,26,.3); }
    .loader-l.r { color: var(--r); text-shadow: 0 0 60px rgba(0,255,194,.3); }
    .loader-l.c { color: var(--c); text-shadow: 0 0 60px rgba(212,168,67,.3); }
    .loader-dot {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 6rem;
      color: var(--gold);
      transition: all .5s cubic-bezier(.34,1.56,.64,1);
      opacity: 0.6;
    }
    .loader-line {
      width: 180px;
      height: 1.5px;
      background: linear-gradient(90deg, transparent, var(--s), var(--gold), var(--r), transparent);
      margin-top: 32px;
      transform: scaleX(0);
      transition: transform 2s cubic-bezier(.16, 1, .3, 1);
    }
    .loader-text {
      font-family: 'JetBrains Mono', monospace;
      font-size: .6rem;
      letter-spacing: 6px;
      color: rgba(242, 237, 228, .25);
      text-transform: uppercase;
      margin-top: 20px;
      transition: opacity .3s;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent implements OnInit {
  letterVisible = [false, false, false];
  dotVisible = false;
  lineScale = '0';
  currentText = 'Initializing';
  textOpacity = '1';
  isDone = false;
  wipeActive = false;

  private texts = ['Initializing', 'Loading Assets', 'Preparing Canvas', 'Awakening Systems', 'Ready'];
  private textIdx = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';

    // Stagger letter reveals with dramatic timing
    [0, 1, 2].forEach((i) => {
      setTimeout(() => {
        this.letterVisible[i] = true;
        this.cdr.markForCheck();
      }, 300 + i * 200);
    });

    // Show dots after letters
    setTimeout(() => {
      this.dotVisible = true;
      this.cdr.markForCheck();
    }, 900);

    // Animate line
    setTimeout(() => {
      this.lineScale = '1';
      this.cdr.markForCheck();
    }, 500);

    // Cycle text
    const timer = setInterval(() => {
      this.textIdx = (this.textIdx + 1) % this.texts.length;
      this.textOpacity = '0';
      this.cdr.markForCheck();
      setTimeout(() => {
        this.currentText = this.texts[this.textIdx];
        this.textOpacity = '1';
        this.cdr.markForCheck();
      }, 200);
    }, 450);

    // Wipe reveal
    setTimeout(() => {
      this.wipeActive = true;
      this.cdr.markForCheck();
    }, 1800);

    // Hide loader
    setTimeout(() => {
      clearInterval(timer);
      this.isDone = true;
      document.body.style.overflow = '';
      this.cdr.markForCheck();
    }, 2800);
  }
}
