import { Component, OnInit } from '@angular/core';
import { CompanyViewModel } from '../view.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MockHttpService } from '../services/mock.services';
import { CompanySearchService } from '../services/company-search.service';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit {

  companyDetail: CompanyViewModel = {
    name: '',
    number: '',
    dateIncorporated: undefined,
    address: '',
    type: '',
    status: ''
  };

  constructor(private route:ActivatedRoute, private companyService: CompanySearchService){

  }

  ngOnInit() {

      let companyNumber = this.route.snapshot.paramMap.get("number");     

      if(companyNumber)
      { 
        this.companyService.getCompany(companyNumber).subscribe(result => 
        {
          this.companyDetail.name = result?.title;
          this.companyDetail.number = result?.company_number,
          this.companyDetail.dateIncorporated = result?.date_of_creation;
          this.companyDetail.type = result?.company_type,
          this.companyDetail.status = result?.company_status,
          this.companyDetail.address = result?.address.address_line_1.concat(", ", result.address.premises, " ," , result.address.locality, ", " ,result.address.postal_code)
        });
      }     
  }

}
