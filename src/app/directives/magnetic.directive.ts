import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appMagnetic]',
    standalone: true,
})
export class MagneticDirective {
    constructor(private el: ElementRef<HTMLElement>) { }

    @HostListener('mousemove', ['$event'])
    onMouseMove(e: MouseEvent): void {
        const rect = this.el.nativeElement.getBoundingClientRect();
        const bx = e.clientX - rect.left - rect.width / 2;
        const by = e.clientY - rect.top - rect.height / 2;
        this.el.nativeElement.style.transform = `translate(${bx * 0.25}px, ${by * 0.35}px)`;
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        const el = this.el.nativeElement;
        el.style.transform = 'translate(0, 0)';
        el.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
        setTimeout(() => (el.style.transition = ''), 500);
    }
}
