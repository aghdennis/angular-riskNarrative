import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOfficerComponent } from './company-officer.component';
import { MockHttpService } from '../services/mock.services';
import { ActivatedRoute } from '@angular/router';
import { CompanySearchService } from '../services/company-search.service';

describe('CompanyOfficerComponent', () => {
  let component: CompanyOfficerComponent;
  let fixture: ComponentFixture<CompanyOfficerComponent>;
  let mockService: MockHttpService = new MockHttpService();
  const activatedRouteMock = {
    snapshot: {
      paramMap : {
        get : () => "search"
      }
    }
  }
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyOfficerComponent],
      providers: [
      {provide : ActivatedRoute, useValue: activatedRouteMock},
      { provide: CompanySearchService, useValue: mockService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
