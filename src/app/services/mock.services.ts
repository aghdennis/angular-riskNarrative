import { Observable, of } from "rxjs";
import { Company, CompanyItem, CompanyOfficers, OfficerDetails } from "./models/company.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class MockHttpService {

    constructor(){}

    officers: CompanyOfficers = {
    etag : "6dd2261e61776d79c2c50685145fac364e75e24e",
    links: {
        self: "/company/10241297/officers"
    },
     kind: "officer-list",
     items_per_page: 35,
     items: [
        {
           address: {
                 premises: "The Leeming Building",
                 postal_code: "LS2 7JF",
                 country: "England",
                 locality: "Leeds",
                 address_line_1: "Vicar Lane"
            },
             name: "ANTLES, Kerri",
             appointed_on : new Date('2017-04-01'),
             officer_role: "director",
            links: {
                officer: {
                    "appointments": "/officers/4R8_9bZ44w0_cRlrxoC-wRwaMiE/appointments"
                }
            },
            date_of_birth: {
                month: 6,
                year: "1969"
            },
            occupation: "Finance And Accounting",
            country_of_residence: "United States",
            nationality: "American"
        }]
    };

    private _data: Company = {
        page_number: 1,
        kind: "search#companies",
        total_results: 2,
        items: [
            {
                company_status: "active",
                address_snippet: "Boswell Cottage Main Street, North Leverton, Retford, England, DN22 0AD",
                date_of_creation: new Date('2008-02-11'),
                matches: {
                    title: [1, 3]
                },
                description: "06500244 - Incorporated on 11 February 2008",
                links: {
                    self: "/company/06500244"
                },
                company_number: "06500244",
                title: "BBC LIMITED",
                company_type: "ltd",
                address: {
                    premises: "Boswell Cottage Main Street",
                    postal_code: "DN22 0AD",
                    country: "England",
                    locality: "Retford",
                    address_line_1: "North Leverton"
                },
                kind: "searchresults#company",
                description_identifier: ["incorporated-on"]
            },
            {
                company_status: "active",
                address_snippet: "Redwall lane, North Leverton, Retford, England, DN22 0AD",
                date_of_creation: new Date('2008-12-11'),
                matches: {
                    title: [1, 3, 5, 3]
                },
                description: "06500266 - Incorporated on 11 February 2008",
                links: {
                    self: "/company/06500266"
                },
                company_number: "06500266",
                title: "PURPLE SHELLS LIMITED",
                company_type: "ltd",
                address: {
                    premises: "Boswell Cottage Main Street",
                    postal_code: "DN22 0AD",
                    country: "England",
                    locality: "Retford",
                    address_line_1: "North Leverton"
                },
                kind: "searchresults#company",
                description_identifier: ["incorporated-on"]
            },
            {
                company_status: "active",
                address_snippet: "Boswell Cottage Main Street, North Leverton, Retford, England, DN22 0AD",
                date_of_creation: new Date('2008-12-1'),
                matches: {
                    title: [1, 3, 5, 3]
                },
                description: "06500266 - Incorporated on 11 February 2008",
                links: {
                    self: "/company/06500266"
                },
                company_number: "06500266",
                title: "Dwellings LIMITED",
                company_type: "ltd",
                address: {
                    premises: "Boswell Cottage Main Street",
                    postal_code: "DN22 0AD",
                    country: "England",
                    locality: "Retford",
                    address_line_1: "North Leverton"
                },
                kind: "searchresults#company",
                description_identifier: ["incorporated-on"]
            }
        ],
    };   

    getCompany(id: string): Observable<CompanyItem | undefined > {
        let c =  this.data.items.find(x => x.company_number === id);   
        return of(c);
    }

    findCompany(term: string) : Observable<Company | undefined>{
        return of(this.data);
    }

    findOfficers(companyNumber: string) : Observable<CompanyOfficers  | undefined>{
        return of(this.officers);
    }

    public get data(): Company {
        return this._data;
    }
    public set data(value: Company) {
        this._data = value;
    }
}