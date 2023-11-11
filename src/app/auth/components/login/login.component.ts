import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'auth-register',
    templateUrl: "./login.component.html"
})
export class LoginComponent{
    form = this.fb.group({
        email:['', Validators.required],
        password:['', Validators.required]
    });

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){

    }

    onSubmit(): void{
        this.authService.login(this.form.value as LoginRequestInterface).
        subscribe({
            next: (currentUser) => {
                console.log('currentuser', currentUser);
                this.authService.setToken(currentUser);
                this.authService.setCurrentUser(currentUser);
                this.router.navigateByUrl("/");
            },
            error : (err: HttpErrorResponse) => {
                console.log('err', err.error);
                
            }
        })
        
    }
}
