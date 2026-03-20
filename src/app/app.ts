import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorComponent } from './components/cursor/cursor.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CursorComponent, LoaderComponent],
  template: `<app-loader /><app-cursor /><router-outlet></router-outlet>`,
  styles: [`
    :host {
      display: block;
      position: relative;
    }
  `],
})
export class App { }
