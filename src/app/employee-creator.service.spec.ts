import { TestBed, inject } from '@angular/core/testing';

import { EmployeeCreatorService } from './employee-creator.service';

describe('EmployeeCreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeCreatorService]
    });
  });

  it('should be created', inject([EmployeeCreatorService], (service: EmployeeCreatorService) => {
    expect(service).toBeTruthy();
  }));
});
