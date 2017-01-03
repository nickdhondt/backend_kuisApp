/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateTaskListService } from './update-task-list.service';

describe('UpdateTaskListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateTaskListService]
    });
  });

  it('should ...', inject([UpdateTaskListService], (service: UpdateTaskListService) => {
    expect(service).toBeTruthy();
  }));
});
