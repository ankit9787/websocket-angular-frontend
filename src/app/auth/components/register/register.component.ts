import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';

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

    constructor(private fb: FormBuilder, private authService: AuthService){

    }

    onSubmit(): void{
        // console.log('onsubmit', this.form.value);
        // const formValue = this.form.value;
        // if (formValue.email !== null && formValue.username !== null && formValue.password !== null) {
        //     console.log('onsubmit', formValue);
        //     this.authService.register(formValue as RegisterRequestInterface);
        // }
        this.authService.register(this.form.value as RegisterRequestInterface).
        subscribe({
            next: (currentUser) => {
                console.log('currentuser', currentUser);
                
            },
            error : (err) => {
                console.log('err', err);
                
            }
        })
        
    }
}