import { Injectable } from '@angular/core';
import { constants }  from '../utils/constants';

const teamLogosMap = {
  'NiP': '/images/nip.svg',
  'Astralis': '/images/nip.svg',
  'Virtus.pro': '/images/nip.svg',
  'Fnatic': '/images/nip.svg',
  default: '/images/unknown.svg'
};

const unknownLogo = '/images/unknown.svg';

@Injectable()
export class TeamLogoMapperService {
  getTeamLogo(team: string) {
    return teamLogosMap[team] ? teamLogosMap[team] : unknownLogo;
  }
}
