import { Component, Input } from '@angular/core';

import { Event } from '../models/event';

@Component({
  selector: 'admin-event',
  templateUrl: './admin-event.html',
  styleUrls: ['./admin-event.css'],
})

export class AdminEventComponent {
  @Input() events: Event[];
  @Input() header: string;

  toggleDetails(event: Event) {
    event.showDetails = !event.showDetails;
  }
}
