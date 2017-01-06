/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateAnnouncementHistoryService } from './update-announcement-history.service';

describe('UpdateAnnouncementHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateAnnouncementHistoryService]
    });
  });

  it('should ...', inject([UpdateAnnouncementHistoryService], (service: UpdateAnnouncementHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
