import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

  constructor(private route: Router){}

  searchCompany(searchTerm: string) {

    if(searchTerm){
      this.route.navigate(['list/' + searchTerm]);
    }
  }
}
