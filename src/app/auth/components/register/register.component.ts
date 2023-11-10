import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'auth-register',
    templateUrl: "./register.component.html"
})
export class Registercomponent{
    form = this.fb.group({
        email:['', Validators.required],
        username:['', Validators.required],
        password:['', Validators.required],
    })

    constructor(private fb: FormBuilder){

    }

    onSubmit(): void{
        console.log('onsubit', this.form.value);
        
    }
}