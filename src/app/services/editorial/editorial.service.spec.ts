import { TestBed } from '@angular/core/testing';

import { EditorialService } from './editorial.service';

describe('EditorialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditorialService = TestBed.get(EditorialService);
    expect(service).toBeTruthy();
  });
});
