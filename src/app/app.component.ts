import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { bootstrapApplication } from '@angular/platform-browser';

import { AsyncPipe } from '@angular/common';
import { of } from 'rxjs';
import { ItemComponent } from './components/item/item.component';
import { FooComponent } from './components/foo/foo.component';
import { ViewportLazyComponent } from './components/viewport-lazy/viewport-lazy.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ItemComponent,
    FooComponent,
    ViewportLazyComponent,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'new-control-flow';
  index = 0;
  show = true;
  obs$ = of('pepito');
  message = 'hello';
  items: { id: number; label: string }[] = [
    { id: 1, label: 'foo' },
    { id: 23, label: 'bar' },
    { id: 3, label: 'baz' },
    { id: 4, label: 'hello' },
    { id: 5, label: 'world' },
  ];
}
