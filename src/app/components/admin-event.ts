import { Component, Input } from '@angular/core';

import { Event } from '../models/event';
//import { TeamLogoMapperService } from '../services/team-logo-mapper';
import constants from '../utils/constants';

@Component({
  selector: 'admin-event',
  templateUrl: './admin-event.html',
  styleUrls: ['./admin-event.css'],
})

export class AdminEventComponent {
  @Input() events: Event[];
  @Input() header: string;

  //constructor(private teamLogoMapper: TeamLogoMapperService){}

  getTeamLogo(team: string) {
    return constants.teamLogoSrc[team] || constants.teamLogoSrc.default;
  }

  toggleDetails(event: Event) {
    event.showDetails = !event.showDetails;
  }
}
