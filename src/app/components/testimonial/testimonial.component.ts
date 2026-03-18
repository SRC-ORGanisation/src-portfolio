import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
    selector: 'app-testimonial',
    standalone: true,
    imports: [RevealDirective],
    template: `
    <section id="testimonial">
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;overflow:hidden">
        <svg width="800" height="800" viewBox="0 0 800 800" style="opacity:.03;animation:spin 60s linear infinite">
          <circle cx="400" cy="400" r="350" fill="none" stroke="var(--gold)" stroke-width="1" stroke-dasharray="10 15"/>
          <circle cx="400" cy="400" r="280" fill="none" stroke="var(--gold)" stroke-width="1"/>
          <circle cx="400" cy="400" r="200" fill="none" stroke="var(--gold)" stroke-width="1" stroke-dasharray="5 8"/>
        </svg>
      </div>
      <div class="section-wrap">
        <div class="testi-inner" appReveal>
          <div class="testi-stars">
            @for (star of [1,2,3,4,5]; track star; let i = $index) {
              <span class="star" [style.animation-delay]="(i * 0.1 + 0.1) + 's'">★</span>
            }
          </div>
          <div class="testi-quote-mark">"</div>
          <div class="testi-carousel">
            @for (t of testimonials; track t.author; let idx = $index) {
              <div class="testi-slide" [style.opacity]="idx === activeSlide ? '1' : '0'" [style.transform]="idx === activeSlide ? 'translateY(0)' : 'translateY(20px)'">
                <p class="testi-q">{{ t.quote }}</p>
                <div class="testi-au">{{ t.author }}</div>
              </div>
            }
          </div>
          <div class="testi-dots">
            @for (t of testimonials; track t.author; let idx = $index) {
              <button class="testi-dot" [class.active]="idx === activeSlide" (click)="goToSlide(idx)"></button>
            }
          </div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    :host { display: block; }
    #testimonial { padding: 160px 0; text-align: center; position: relative; overflow: hidden; }
    .testi-inner { max-width: 900px; margin: 0 auto; position: relative; }
    .testi-quote-mark {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 12rem;
      color: var(--gold);
      opacity: .08;
      position: absolute;
      top: -60px;
      left: 50%;
      transform: translateX(-50%);
      line-height: 1;
      animation: breathe 4s ease-in-out infinite;
    }
    .testi-carousel {
      position: relative;
      min-height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .testi-slide {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: opacity .6s var(--ease-out-expo), transform .6s var(--ease-out-expo);
    }
    .testi-q {
      font-family: 'Cormorant Garamond', serif; font-style: italic;
      font-size: clamp(1.8rem, 3vw, 3rem); line-height: 1.4;
      color: rgba(242,237,228,.8); margin-bottom: 40px; position: relative;
      max-width: 800px;
    }
    .testi-au {
      font-family: 'JetBrains Mono', monospace; font-size: .68rem;
      letter-spacing: 4px; color: var(--gold); text-transform: uppercase;
    }
    .testi-stars { display: flex; justify-content: center; gap: 8px; margin-bottom: 48px; }
    .star { color: var(--gold); font-size: 1.2rem; animation: starPop .4s ease backwards; }
    .testi-dots {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 40px;
    }
    .testi-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1px solid rgba(212,168,67,.3);
      background: transparent;
      cursor: pointer;
      transition: all .3s;
      padding: 0;
    }
    .testi-dot.active {
      background: var(--gold);
      border-color: var(--gold);
      box-shadow: 0 0 12px rgba(212,168,67,.4);
    }
    .testi-dot:hover { border-color: var(--gold); }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialComponent implements OnInit, OnDestroy {
    testimonials = [
        {
            quote: 'Working with SRC felt less like hiring freelancers and more like having three co-founders who happened to be engineering geniuses. The product they delivered was beyond our expectations — and they were early.',
            author: '— Founder, Nexus Platform',
        },
        {
            quote: 'SRC didn\'t just build our app — they rethought our entire UX. The result? 40% higher engagement and users who actually love using our product.',
            author: '— CEO, Bloom Marketplace',
        },
        {
            quote: 'The level of craft in their code is something I\'ve never seen from an agency. Clean architecture, zero tech debt, and they actually documented everything. Legends.',
            author: '— CTO, Vault Finance',
        },
    ];
    activeSlide = 0;
    private timer: any;

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.timer = setInterval(() => {
            this.activeSlide = (this.activeSlide + 1) % this.testimonials.length;
            this.cdr.markForCheck();
        }, 5000);
    }

    goToSlide(idx: number): void {
        this.activeSlide = idx;
        this.cdr.markForCheck();
        // Reset timer
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.activeSlide = (this.activeSlide + 1) % this.testimonials.length;
            this.cdr.markForCheck();
        }, 5000);
    }

    ngOnDestroy(): void {
        clearInterval(this.timer);
    }
}
