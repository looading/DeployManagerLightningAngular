import { TestBed, inject } from '@angular/core/testing';

import { DeployService } from './deploy.service';

describe('DeployService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeployService]
    });
  });

  it('should be created', inject([DeployService], (service: DeployService) => {
    expect(service).toBeTruthy();
  }));
});
