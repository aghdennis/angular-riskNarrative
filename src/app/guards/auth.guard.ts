import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  let authService:AuthService = inject(AuthService);
  let router = inject(Router);
  
  if(authService.isAuthenticated() === false) {
    router.navigate(['/login']);    
    return false;
  }
 
  return true;
};
