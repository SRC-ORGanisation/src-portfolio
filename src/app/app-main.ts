import { Component } from '@angular/core';
import { CursorComponent } from './components/cursor/cursor.component';
import { ParticleCanvasComponent } from './components/particle-canvas/particle-canvas.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { StoryComponent } from './components/story/story.component';
import { TeamComponent } from './components/team/team.component';
import { WorkComponent } from './components/work/work.component';
import { ServicesComponent } from './components/services/services.component';
import { ProcessComponent } from './components/process/process.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CursorComponent,
    ParticleCanvasComponent,
    LoaderComponent,
    NavComponent,
    HeroComponent,
    MarqueeComponent,
    StoryComponent,
    TeamComponent,
    WorkComponent,
    ServicesComponent,
    ProcessComponent,
    TestimonialComponent,
    CtaComponent,
    FooterComponent,
  ],
  template: `
    <app-cursor />
    <app-loader />
    <app-particle-canvas />
    <app-nav />
    <app-hero />
    <app-marquee />

    @defer (on viewport) {
      <app-story />
    } @placeholder {
      <div style="min-height:400px"></div>
    }

    @defer (on viewport) {
      <app-team />
    } @placeholder {
      <div style="min-height:400px"></div>
    }

    @defer (on viewport) {
      <app-work />
    } @placeholder {
      <div style="min-height:400px"></div>
    }

    @defer (on viewport) {
      <app-services />
    } @placeholder {
      <div style="min-height:400px"></div>
    }

    @defer (on viewport) {
      <app-process />
    } @placeholder {
      <div style="min-height:400px"></div>
    }

    @defer (on viewport) {
      <app-testimonial />
    } @placeholder {
      <div style="min-height:300px"></div>
    }

    @defer (on viewport) {
      <app-cta />
    } @placeholder {
      <div style="min-height:300px"></div>
    }

    <app-footer />
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
    }
  `],
})
export class AppMain { }
