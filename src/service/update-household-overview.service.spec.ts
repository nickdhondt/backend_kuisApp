/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateHouseholdOverviewService } from './update-household-overview.service';

describe('UpdateHouseholdOverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateHouseholdOverviewService]
    });
  });

  it('should ...', inject([UpdateHouseholdOverviewService], (service: UpdateHouseholdOverviewService) => {
    expect(service).toBeTruthy();
  }));
});
