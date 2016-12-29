/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChatSocketService } from './chat-socket.service';

describe('ChatSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatSocketService]
    });
  });

  it('should ...', inject([ChatSocketService], (service: ChatSocketService) => {
    expect(service).toBeTruthy();
  }));
});
