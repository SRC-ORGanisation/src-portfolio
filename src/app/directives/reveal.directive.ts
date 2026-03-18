import { Directive, ElementRef, OnInit, OnDestroy, input } from '@angular/core';

@Directive({
    selector: '[appReveal]',
    standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
    delay = input<string>('0s');

    private observer!: IntersectionObserver;

    constructor(private el: ElementRef<HTMLElement>) { }

    ngOnInit(): void {
        const element = this.el.nativeElement;
        element.classList.add('reveal');

        const delayVal = this.delay();
        if (delayVal && delayVal !== '0s') {
            element.style.transitionDelay = delayVal;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Animate skill bars within this element
                        entry.target.querySelectorAll<HTMLElement>('.sb-fill').forEach((b) => {
                            setTimeout(() => {
                                b.style.width = b.dataset['w'] + '%';
                            }, 300);
                        });
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
        );

        this.observer.observe(element);
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }
}
