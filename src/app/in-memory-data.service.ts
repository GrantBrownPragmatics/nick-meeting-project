import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
        {id: 1, name: 'Karl', phoneNumber: '703-333-3284'},
        {id: 2, name: 'George', phoneNumber: '703-429-8392'},
        {id: 3, name: 'Lisa', phoneNumber: '703-759-4687'},
    ];
    return {employees};
  }
}