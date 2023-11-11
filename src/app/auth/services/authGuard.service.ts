import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ɵɵinject } from '@angular/core';
import { map } from 'rxjs';

 // Define the authGuard function, which implements CanActivateFn interface
export const authGuard: CanActivateFn = (route, state) => {
  // Use dependency injection to get an instance of the AuthService
  const authService =  ɵɵinject(AuthService);
  const router = ɵɵinject(Router)

  return authService.isLogged$.pipe(
    map((isloggedIn) => {
        if(isloggedIn){
            return true;
        }

        router.navigateByUrl('/');
        return false;
    })
  )
};