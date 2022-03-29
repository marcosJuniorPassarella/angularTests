/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotoBoardService } from './PhotoBoard.service';

describe('Service: PhotoBoard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoBoardService]
    });
  });

  it('should ...', inject([PhotoBoardService], (service: PhotoBoardService) => {
    expect(service).toBeTruthy();
  }));
});
