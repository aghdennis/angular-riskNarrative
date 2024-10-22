import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CompanyViewModel } from '../view.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';
import { CompanySearchService } from '../services/company-search.service';
import { MockHttpService } from '../services/mock.services';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {

  companySearchResults: CompanyViewModel[] = [];
  pageSize: number = 2;
  startIndex: number = 0;
  endIndex: number = this.pageSize;

  constructor(private httpService: CompanySearchService, private route: ActivatedRoute){}

  ngOnInit() {
    
    const searchTerm = this.route.snapshot.paramMap.get("searchTerm");   
        
    this.httpService.findCompany(searchTerm!).pipe(
       map(comp => 
        comp?.items.forEach(compItem => 
          this.companySearchResults.push({
          name : compItem.title,
          number: compItem.company_number,
          dateIncorporated: compItem.date_of_creation,
          address: compItem.address.address_line_1.concat(", ", compItem.address.premises, " ," , compItem.address.locality, ", " ,compItem.address.postal_code)
       })))).subscribe();
  } 

  previousPage() {
    this.startIndex = this.startIndex - this.pageSize;
    this.endIndex = this.endIndex - this.pageSize;
  }

  nextPage() {
    this.startIndex = this.startIndex + this.pageSize;
    this.endIndex = this.endIndex + this.pageSize;
  }

}
