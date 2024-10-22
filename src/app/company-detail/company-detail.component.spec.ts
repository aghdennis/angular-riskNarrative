import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailComponent } from './company-detail.component';
import { ActivatedRoute } from '@angular/router';
import { CompanySearchService } from '../services/company-search.service';
import { MockHttpService } from '../services/mock.services';

describe('CompanyDetailComponent', () => {
  let component: CompanyDetailComponent;
  let fixture: ComponentFixture<CompanyDetailComponent>;  
  let mk:MockHttpService;
  
  const activatedRouteMock = {
    snapshot: {
      paramMap : {
        get : () => "search"
      }
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDetailComponent],
      providers: [
        {provide : ActivatedRoute, useValue: activatedRouteMock},
        { provide: CompanySearchService, useClass: MockHttpService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyDetailComponent);
     mk = TestBed.inject(MockHttpService);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive the search parameter', () => {
      
    spyOn(activatedRouteMock.snapshot.paramMap, 'get').and.returnValue("1243254"); 
      
    component.ngOnInit();

    expect(activatedRouteMock.snapshot.paramMap.get).toHaveBeenCalled();       
   
  });

});
