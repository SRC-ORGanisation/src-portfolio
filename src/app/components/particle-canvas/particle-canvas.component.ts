import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

interface Particle {
    x: number; y: number; vx: number; vy: number;
    r: number; alpha: number; col: string;
    pulse: number; pulseSpeed: number;
}

interface Star {
    x: number; y: number; r: number;
    alpha: number; twinkle: number; twinkleSpeed: number;
}

interface ShootingStar {
    x: number; y: number; vx: number; vy: number;
    life: number; maxLife: number; size: number;
}

@Component({
    selector: 'app-particle-canvas',
    standalone: true,
    template: `<canvas #bgCanvas id="bgCanvas"></canvas>`,
    styles: [`
    :host { display: block; }
    canvas {
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      width: 100vw;
      height: 100vh;
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticleCanvasComponent implements AfterViewInit, OnDestroy {
    @ViewChild('bgCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

    private ctx!: CanvasRenderingContext2D;
    private W = 0;
    private H = 0;
    private particles: Particle[] = [];
    private stars: Star[] = [];
    private shootingStars: ShootingStar[] = [];
    private mouse = { x: -999, y: -999 };
    private animId = 0;
    private colors = ['rgba(212,168,67,', 'rgba(255,61,26,', 'rgba(0,255,194,'];
    private shootingStarTimer = 0;

    private resizeHandler = () => this.resize();
    private mouseMoveHandler = (e: MouseEvent) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    };

    ngAfterViewInit(): void {
        const canvas = this.canvasRef.nativeElement;
        this.ctx = canvas.getContext('2d')!;
        this.resize();

        // Create static star field (background stars)
        for (let i = 0; i < 400; i++) {
            this.stars.push(this.createStar());
        }

        // Create floating particles
        for (let i = 0; i < 120; i++) {
            this.particles.push(this.createParticle());
        }

        window.addEventListener('resize', this.resizeHandler);
        document.addEventListener('mousemove', this.mouseMoveHandler);
        this.animate();
    }

    private resize(): void {
        const canvas = this.canvasRef.nativeElement;
        this.W = canvas.width = window.innerWidth;
        this.H = canvas.height = window.innerHeight;
        // Regenerate stars on resize
        this.stars = [];
        for (let i = 0; i < 400; i++) {
            this.stars.push(this.createStar());
        }
    }

    private createStar(): Star {
        return {
            x: Math.random() * (this.W || window.innerWidth),
            y: Math.random() * (this.H || window.innerHeight),
            r: Math.random() * 1.2 + 0.1,
            alpha: Math.random() * 0.8 + 0.2,
            twinkle: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.005 + Math.random() * 0.02,
        };
    }

    private createParticle(): Particle {
        return {
            x: Math.random() * (this.W || window.innerWidth),
            y: Math.random() * (this.H || window.innerHeight),
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.5 + 0.3,
            alpha: Math.random() * 0.4 + 0.05,
            col: this.colors[Math.floor(Math.random() * 3)],
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.02 + Math.random() * 0.02,
        };
    }

    private spawnShootingStar(): void {
        const fromLeft = Math.random() > 0.5;
        this.shootingStars.push({
            x: fromLeft ? Math.random() * this.W * 0.5 : this.W * 0.5 + Math.random() * this.W * 0.5,
            y: Math.random() * this.H * 0.4,
            vx: (fromLeft ? 1 : -1) * (4 + Math.random() * 6),
            vy: 2 + Math.random() * 3,
            life: 0,
            maxLife: 30 + Math.random() * 40,
            size: 1 + Math.random() * 1.5,
        });
    }

    private drawSpaceBackground(): void {
        const ctx = this.ctx;

        // Deep space gradient base
        const bg = ctx.createLinearGradient(0, 0, 0, this.H);
        bg.addColorStop(0, '#030310');
        bg.addColorStop(0.3, '#050520');
        bg.addColorStop(0.6, '#08081a');
        bg.addColorStop(1, '#03030a');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, this.W, this.H);

        // Nebula glow — subtle colored clouds
        // Red/orange nebula (top-left)
        const neb1 = ctx.createRadialGradient(
            this.W * 0.15, this.H * 0.2, 0,
            this.W * 0.15, this.H * 0.2, this.W * 0.35
        );
        neb1.addColorStop(0, 'rgba(255, 61, 26, 0.04)');
        neb1.addColorStop(0.4, 'rgba(255, 61, 26, 0.02)');
        neb1.addColorStop(1, 'transparent');
        ctx.fillStyle = neb1;
        ctx.fillRect(0, 0, this.W, this.H);

        // Teal nebula (bottom-right)
        const neb2 = ctx.createRadialGradient(
            this.W * 0.85, this.H * 0.75, 0,
            this.W * 0.85, this.H * 0.75, this.W * 0.3
        );
        neb2.addColorStop(0, 'rgba(0, 255, 194, 0.03)');
        neb2.addColorStop(0.5, 'rgba(0, 255, 194, 0.015)');
        neb2.addColorStop(1, 'transparent');
        ctx.fillStyle = neb2;
        ctx.fillRect(0, 0, this.W, this.H);

        // Gold nebula (center)
        const neb3 = ctx.createRadialGradient(
            this.W * 0.5, this.H * 0.5, 0,
            this.W * 0.5, this.H * 0.5, this.W * 0.25
        );
        neb3.addColorStop(0, 'rgba(212, 168, 67, 0.025)');
        neb3.addColorStop(1, 'transparent');
        ctx.fillStyle = neb3;
        ctx.fillRect(0, 0, this.W, this.H);
    }

    private drawStars(): void {
        const ctx = this.ctx;
        for (const star of this.stars) {
            star.twinkle += star.twinkleSpeed;
            const a = star.alpha * (0.5 + 0.5 * Math.sin(star.twinkle));

            // Outer glow for brighter stars
            if (star.r > 0.8) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 210, 255, ${a * 0.08})`;
                ctx.fill();
            }

            // Star dot
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(220, 230, 255, ${a})`;
            ctx.fill();
        }
    }

    private drawShootingStars(): void {
        const ctx = this.ctx;
        for (let i = this.shootingStars.length - 1; i >= 0; i--) {
            const ss = this.shootingStars[i];
            ss.x += ss.vx;
            ss.y += ss.vy;
            ss.life++;

            const progress = ss.life / ss.maxLife;
            const alpha = progress < 0.5 ? progress * 2 : (1 - progress) * 2;

            // Trail
            const tailLen = 8;
            for (let t = 0; t < tailLen; t++) {
                const tx = ss.x - ss.vx * t * 0.8;
                const ty = ss.y - ss.vy * t * 0.8;
                const ta = alpha * (1 - t / tailLen) * 0.6;
                ctx.beginPath();
                ctx.arc(tx, ty, ss.size * (1 - t / tailLen), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${ta})`;
                ctx.fill();
            }

            // Head glow
            ctx.beginPath();
            ctx.arc(ss.x, ss.y, ss.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.3})`;
            ctx.fill();

            // Bright head
            ctx.beginPath();
            ctx.arc(ss.x, ss.y, ss.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fill();

            if (ss.life >= ss.maxLife) {
                this.shootingStars.splice(i, 1);
            }
        }
    }

    private updateParticle(p: Particle): void {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
            const force = (120 - dist) / 120;
            p.vx += (dx / dist) * force * 0.3;
            p.vy += (dy / dist) * force * 0.3;
        }
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0 || p.x > this.W || p.y < 0 || p.y > this.H) {
            Object.assign(p, this.createParticle());
        }
    }

    private drawParticle(p: Particle): void {
        const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
        // Glow
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        this.ctx.fillStyle = p.col + (a * 0.15) + ')';
        this.ctx.fill();
        // Core
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        this.ctx.fillStyle = p.col + a + ')';
        this.ctx.fill();
    }

    private drawConnections(): void {
        const ps = this.particles;
        for (let i = 0; i < ps.length; i++) {
            for (let j = i + 1; j < ps.length; j++) {
                const dx = ps[i].x - ps[j].x;
                const dy = ps[i].y - ps[j].y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(ps[i].x, ps[i].y);
                    this.ctx.lineTo(ps[j].x, ps[j].y);
                    this.ctx.strokeStyle = `rgba(212,168,67,${(1 - d / 100) * 0.06})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
    }

    private animate = (): void => {
        // Draw full space background each frame
        this.drawSpaceBackground();

        // Twinkling star field
        this.drawStars();

        // Shooting stars (spawn randomly)
        this.shootingStarTimer++;
        if (this.shootingStarTimer > 180 + Math.random() * 300) {
            this.spawnShootingStar();
            this.shootingStarTimer = 0;
        }
        this.drawShootingStars();

        // Interactive colored particles
        this.particles.forEach((p) => {
            this.updateParticle(p);
            this.drawParticle(p);
        });
        this.drawConnections();

        this.animId = requestAnimationFrame(this.animate);
    };

    ngOnDestroy(): void {
        cancelAnimationFrame(this.animId);
        window.removeEventListener('resize', this.resizeHandler);
        document.removeEventListener('mousemove', this.mouseMoveHandler);
    }
}
