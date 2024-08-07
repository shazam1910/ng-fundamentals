import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'events-app',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h2> Hello world </h2>',
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
