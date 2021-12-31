import { TestBed } from '@angular/core/testing';

import { DialogDemoService } from './dialog-demo.service';

describe('DialogDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogDemoService = TestBed.get(DialogDemoService);
    expect(service).toBeTruthy();
  });
});
