import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'home',
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy{
    isloggedInSubscription: Subscription | undefined;
    constructor(private authService: AuthService, private router: Router){}

    ngOnInit(): void {
        this.isloggedInSubscription =  this.authService.isLogged$.subscribe(isLoggedIn => {
            if(isLoggedIn){
                this.router.navigateByUrl("/boards");
            }
        })
    }
    
    ngOnDestroy(): void {
        this.isloggedInSubscription?.unsubscribe();
    }
    

}