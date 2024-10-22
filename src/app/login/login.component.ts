import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email?: string;
  password?: string;

  constructor(private authService: AuthService, private router:Router) {

  }

  login() {

    if(this.email && this.password){

          let result = this.authService.authenticateUser(this.email, this.password);

          if(result === true){
              this.router.navigate(["/company"]);
          }
    }
  }
}
