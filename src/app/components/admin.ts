import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event';

import { Event } from '../models/event';

@Component({
  selector: 'admin',
  templateUrl: './admin.html',
})

export class AdminComponent implements OnInit {
  title = 'Admin';
  selectedEvent: Event = null;
  activeEvents: Event[] = [];
  upcomingEvents: Event[] = [];
  finishedEvents: Event[] = [];
  ongoingEvents: Event[] = [];

  constructor(private eventService: EventService) { }

  mapEvents(events: Event[]): void {
    events.forEach(event => {
      switch(event.status){
        case 'ACTIVE':
          this.activeEvents.push(event);
          break;
        case 'ONGOING':
          this.ongoingEvents.push(event);
          break;
        case 'UPCOMING':
          this.upcomingEvents.push(event);
          break;
        case 'FINISHED':
        // Sort finished according to date
          this.finishedEvents.push(event);
          break;
      }
    });
  }

  ngOnInit(): void {
    this.eventService.getEvents()
      .then(events => this.mapEvents(events));
  }
}
