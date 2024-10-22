import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyListComponent } from './company-list.component';
import { ActivatedRoute } from '@angular/router';
import { MockHttpService } from '../services/mock.services';
import { CompanySearchService } from '../services/company-search.service';

describe('CompanyListComponent', () => {
  let component: CompanyListComponent;
  let fixture: ComponentFixture<CompanyListComponent>;
  let httpService: MockHttpService = new MockHttpService();
  const activatedRouteMock = {
    snapshot: {
      paramMap : {
        get : () => "search"
      }
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyListComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock},
        { provide: CompanySearchService, useValue: httpService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyListComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise the paging properties', () => {
    //Arrange
    let setPageSize = 2;

    //Assert
    expect(component.pageSize).toBe(setPageSize);
    expect(component.startIndex).toBe(0);
    expect(component.endIndex).toBe(setPageSize);     
  });


});
