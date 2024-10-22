import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Company, CompanyItem, CompanyOfficers } from './models/company.model';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanySearchService {

  Url_Base: string = 'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1';
  Api_Key:string = "API_KEY_GOES_HERE";

  private _company?: Company;
  private _officers?: CompanyOfficers;

  private _companySearchStore: WritableSignal<Company | undefined> = signal(this._company);
  private _companyOfficerStore: WritableSignal<CompanyOfficers | undefined> = signal(this._officers);
  

  constructor(private httpService: HttpClient) { }

  findCompany(searchTerm: string): Observable<Company | undefined> {

    if(!this.companySearchStore()) {

      return this.httpService.get<Company>(this.Url_Base + `/search?query=${searchTerm}`, 
        { headers : {'x-api-key': this.Api_Key} })
        .pipe(
          tap(item => {
            this.companySearchStore.set(item)
          })
        ); 
    }

    return of(this.companySearchStore());    
  } 

  getCompany(companynumber: string): Observable<CompanyItem | undefined > {
     return this.findCompany(companynumber).pipe(
      map(item => item?.items.find(x => x.company_number === companynumber)));  
  }

  findOfficers(companyNumber: string) : Observable<CompanyOfficers | undefined>{

    if(!this.companyOfficerStore()) {

      return this.httpService.get<CompanyOfficers>(this.Url_Base + `/officers?query=${companyNumber}`, 
        { headers : {'x-api-key': this.Api_Key} })
        .pipe(
          tap(item => {
            this.companyOfficerStore.set(item)
          })
        ); 
    }

    return of(this.companyOfficerStore()); 
}

  public get companySearchStore(): WritableSignal<Company | undefined> {
    return this._companySearchStore;
  }
  public set companySearchStore(value: WritableSignal<Company>) {
    this._companySearchStore = value;
  }

  public get companyOfficerStore(): WritableSignal<CompanyOfficers | undefined> {
    return this._companyOfficerStore;
  }
  public set companyOfficerStore(value: WritableSignal<CompanyOfficers>) {
    this._companyOfficerStore = value;
  }

}
