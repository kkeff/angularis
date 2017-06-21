import { Match } from './match';
import { PrizeDistrubution } from './prize-distrubution';

export class Event {
  id: number;
  name: string;
  status: string;
  fromDate: string;
  toDate: string;
  teams: Array<string>;
  showDetails: boolean;
  matches: Array<Match>;
  prizeDistrubutions: Array<PrizeDistrubution>;
  playoffType: string;
}
