import { Component, OnChanges, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { CompanyComponent } from "./company/company.component";
import { AuthService } from './services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, CompanyComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'company-search';
isLoggedIn: boolean = false;
  constructor(private router: Router, private authenticationService: AuthService){}

  ngOnInit() {

      this.router.events.subscribe(event  => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.isLoggedIn = this.authenticationService.isAuthenticated();
            break;
          }         
          default: {           
            break;
          }
        }
      });
  }
  
  searchCompany(searchTerm: string) {

    if(searchTerm){
      this.router.navigate(['list/' + searchTerm]);
    }
  }
}
