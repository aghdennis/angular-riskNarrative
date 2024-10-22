import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyComponent } from './company.component';
import { RouterTestingHarness } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CompanySearchService } from '../services/company-search.service';
import { MockHttpService } from '../services/mock.services';


describe('CompanyComponent', () => {
  let component: CompanyComponent;
  let fixture: ComponentFixture<CompanyComponent>;
  let mockService: MockHttpService;

  const routerMock = {
    navigate: jasmine.createSpy('navigate'),    
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyComponent],
      providers: [
        { provide : Router, useValue : routerMock },
        { provide : CompanySearchService, useClass : MockHttpService }
      ]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyComponent);
    component = fixture.componentInstance;
    mockService = TestBed.inject(MockHttpService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when search is clicked with a search term input', () => {

    spyOn(mockService, 'findCompany')

    component.searchCompany("BBC");

    expect(mockService.findCompany).not.toHaveBeenCalled();
    expect(routerMock.navigate).toHaveBeenCalled();  
  });

  it('should not call the api service when no search term ins input', () => {
    let term:string | null = '';

    routerMock.navigate.calls.reset();

    component.searchCompany(term);
   
    expect(routerMock.navigate).not.toHaveBeenCalled();  
  });

});
