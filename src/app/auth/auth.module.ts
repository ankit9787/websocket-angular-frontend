import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Registercomponent } from "./components/register/register.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { authGuard } from "./services/authGuard.service";

const routes: Routes = [
    {
        path: 'register',
        component: Registercomponent
    },
    {
        path: 'login',
        component: LoginComponent,
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes),
    ReactiveFormsModule
    ],
    providers: [AuthService],
    declarations: [Registercomponent, LoginComponent]
})
export class AuthModule{}