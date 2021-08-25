import { TestBed } from '@angular/core/testing';

import { ComponentTestService } from './component-test.service';

describe('ComponentTestService', () => {
  let service: ComponentTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
