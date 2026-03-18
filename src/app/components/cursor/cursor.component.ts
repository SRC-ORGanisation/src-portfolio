import { Component, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-cursor',
    standalone: true,
    template: `
    <div id="cur"></div>
    <div id="cur2"></div>
    <div class="cursor-trail" id="trail0"></div>
    <div class="cursor-trail" id="trail1"></div>
    <div class="cursor-trail" id="trail2"></div>
    <div class="cursor-trail" id="trail3"></div>
    <div class="cursor-trail" id="trail4"></div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursorComponent implements AfterViewInit, OnDestroy {
    private cur!: HTMLElement;
    private cur2!: HTMLElement;
    private trails: HTMLElement[] = [];
    private trailPositions: { x: number; y: number }[] = [];
    private mx = 0;
    private my = 0;
    private cx = 0;
    private cy = 0;
    private animId = 0;
    private hoverObserver!: MutationObserver;

    private mouseMoveHandler = (e: MouseEvent) => {
        this.mx = e.clientX;
        this.my = e.clientY;
        if (this.cur) {
            this.cur.style.left = this.mx + 'px';
            this.cur.style.top = this.my + 'px';
        }
    };
    private mouseEnterHandler = () => document.body.classList.add('hovering');
    private mouseLeaveHandler = () => document.body.classList.remove('hovering');
    private clickHandler = (e: MouseEvent) => {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
      position:fixed;left:${e.clientX}px;top:${e.clientY}px;
      width:6px;height:6px;border-radius:50%;
      border:1px solid rgba(212,168,67,0.5);pointer-events:none;z-index:9990;
      transform:translate(-50%,-50%);
      animation:clickRipple .7s cubic-bezier(.16,1,.3,1) forwards;
    `;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
    };

    ngAfterViewInit(): void {
        this.cur = document.getElementById('cur')!;
        this.cur2 = document.getElementById('cur2')!;

        // Initialize trails
        for (let i = 0; i < 5; i++) {
            const trail = document.getElementById('trail' + i)!;
            if (trail) {
                this.trails.push(trail);
                this.trailPositions.push({ x: 0, y: 0 });
            }
        }

        document.addEventListener('mousemove', this.mouseMoveHandler);
        document.addEventListener('click', this.clickHandler);

        this.animateCursor();

        // Delay hover setup to let other components render
        setTimeout(() => this.setupHoverListeners(), 2500);

        // Watch for new elements
        this.hoverObserver = new MutationObserver(() => {
            this.setupHoverListeners();
        });
        this.hoverObserver.observe(document.body, { childList: true, subtree: true });
    }

    private animateCursor = (): void => {
        // Smooth follower
        this.cx += (this.mx - this.cx) * 0.12;
        this.cy += (this.my - this.cy) * 0.12;
        if (this.cur2) {
            this.cur2.style.left = this.cx + 'px';
            this.cur2.style.top = this.cy + 'px';
        }

        // Trail particles — each follows the previous with increasing lag
        for (let i = 0; i < this.trails.length; i++) {
            const target = i === 0
                ? { x: this.mx, y: this.my }
                : this.trailPositions[i - 1];
            const lerp = 0.2 - (i * 0.03);
            this.trailPositions[i].x += (target.x - this.trailPositions[i].x) * lerp;
            this.trailPositions[i].y += (target.y - this.trailPositions[i].y) * lerp;

            const trail = this.trails[i];
            if (trail) {
                trail.style.left = this.trailPositions[i].x + 'px';
                trail.style.top = this.trailPositions[i].y + 'px';
                trail.style.opacity = String(0.35 - (i * 0.06));
                trail.style.width = trail.style.height = (3 - i * 0.4) + 'px';
            }
        }

        this.animId = requestAnimationFrame(this.animateCursor);
    };

    private setupHoverListeners(): void {
        document.querySelectorAll('a,button,.t-card,.svc,.proj,.src-g-l,.stat-box,.p-step,.float-card,.nav-btn').forEach((el) => {
            if (!(el as any).__cursorBound) {
                el.addEventListener('mouseenter', this.mouseEnterHandler);
                el.addEventListener('mouseleave', this.mouseLeaveHandler);
                (el as any).__cursorBound = true;
            }
        });
    }

    ngOnDestroy(): void {
        cancelAnimationFrame(this.animId);
        this.hoverObserver?.disconnect();
        document.removeEventListener('mousemove', this.mouseMoveHandler);
        document.removeEventListener('click', this.clickHandler);
    }
}
