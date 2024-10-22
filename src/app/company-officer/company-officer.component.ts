import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OfficerViewModel } from '../view.model';
import { map } from 'rxjs/operators';
import { CommonModule, NgFor } from '@angular/common';
import { CompanySearchService } from '../services/company-search.service';

@Component({
  selector: 'app-company-officer',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './company-officer.component.html',
  styleUrl: './company-officer.component.css'
})
export class CompanyOfficerComponent implements OnInit {

  officer: OfficerViewModel = new OfficerViewModel();

  constructor(private route:ActivatedRoute, private httpService: CompanySearchService){}

  ngOnInit(){

    let companyNumber = this.route.snapshot.paramMap.get('number');
    let companyName = this.route.snapshot.paramMap.get('companyName');

    if(companyNumber && companyName){

      this.officer.companyName = companyName;
      this.officer.companyNumber = companyNumber;

      this.httpService.findOfficers(companyNumber).pipe(
        map(comp =>           
          comp?.items.forEach(compItem => 
            this.officer.officers?.push({
            name : compItem.name,
            role: compItem.officer_role           
         })))).subscribe();  
    }    
  
  }
}
