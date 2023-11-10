import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Registercomponent } from "./components/register/register.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: 'register',
        component: Registercomponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes),
    ReactiveFormsModule
    ],
    providers: [AuthService],
    declarations: [Registercomponent]
})
export class AuthModule{}