import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
    selector: 'auth-register',
    templateUrl: "./register.component.html"
})
export class Registercomponent {
    form = this.fb.group({
        email: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
    });

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private socketService: SocketService) {

    }

    onSubmit(): void {
        this.authService.register(this.form.value as RegisterRequestInterface).
            subscribe({
                next: (currentUser) => {
                    console.log('currentuser', currentUser);
                    this.authService.setToken(currentUser);
                    this.socketService.setupSocketConnection(currentUser);
                    this.authService.setCurrentUser(currentUser);
                    this.router.navigateByUrl("/");
                },
                error: (err: HttpErrorResponse) => {
                    console.log('err', err.error);

                }
            })

    }
}