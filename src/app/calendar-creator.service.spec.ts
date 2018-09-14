import { TestBed, inject } from '@angular/core/testing';

import { CalendarCreatorService } from './calendar-creator.service';

describe('CalendarCreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarCreatorService]
    });
  });

  it('should be created', inject([CalendarCreatorService], (service: CalendarCreatorService) => {
    expect(service).toBeTruthy();
  }));
});
