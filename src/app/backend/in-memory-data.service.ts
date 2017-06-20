import { InMemoryDbService } from 'angular-in-memory-web-api';
import { heroes, events } from './data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      heroes,
      events
    };
  }
}
