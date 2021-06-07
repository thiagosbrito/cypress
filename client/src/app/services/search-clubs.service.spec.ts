import { TestBed } from '@angular/core/testing';

import { SearchClubsService } from './search-clubs.service';

describe('SearchClubsService', () => {
  let service: SearchClubsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchClubsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
