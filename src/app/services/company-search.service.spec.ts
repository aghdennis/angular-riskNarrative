import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting, TestRequest } from '@angular/common/http/testing';
import { CompanySearchService } from './company-search.service';
import { provideHttpClient } from '@angular/common/http';
import { Company } from './models/company.model';

describe('CompanySearchService', () => {
  let service: CompanySearchService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ provideHttpClient(),  provideHttpClientTesting()]
    });    
    service = TestBed.inject(CompanySearchService);   
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a get request to the company url with the correct request headers and api key key', () => {

    //Arrange
    let r:Company | undefined;
    let searchTerm: string = "bbc";
    service.Api_Key = "123"

    //Act
    service.findCompany(searchTerm).subscribe();

    //Assert
    const request:TestRequest = httpTestingController.expectOne(req => req.url == service.Url_Base + `/search?query=${searchTerm}`);  
    expect(request.request.method.toLowerCase()).toBe('get');
    expect(request.request.headers.keys()).toEqual(['x-api-key']);
    expect(request.request.headers.get('x-api-key')).toEqual("123");   
  });

  
  it('should make a get request to the officers url with the correct request headers and api key key', () => {

    //Arrange
    let r:Company | undefined;
    let companyNo: string = "1111";
    service.Api_Key = "132"

    //Act
    service.findOfficers(companyNo).subscribe();

    //Assert
    const request:TestRequest = httpTestingController.expectOne(req => req.url == service.Url_Base + `/officers?query=${companyNo}`);  
    expect(request.request.method.toLowerCase()).toBe('get');
    expect(request.request.headers.keys()).toEqual(['x-api-key']);
    expect(request.request.headers.get('x-api-key')).toEqual("132");   
  });

});
