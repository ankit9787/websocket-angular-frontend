import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'auth-register',
    templateUrl: "./register.component.html"
})
export class Registercomponent{
    form = this.fb.group({
        email:['', Validators.required],
        username:['', Validators.required],
        password:['', Validators.required],
    });

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){

    }

    onSubmit(): void{
        this.authService.register(this.form.value as RegisterRequestInterface).
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