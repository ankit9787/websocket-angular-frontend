import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, filter, map } from "rxjs";
import { currentUserInterface } from "../types/currentUser.interface";
import {HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { LoginRequestInterface } from "../types/loginRequest.interface";

@Injectable()
export class AuthService{
    currentUser$ = new BehaviorSubject<currentUserInterface |  null | undefined>(undefined);

    isLogged$ = this.currentUser$.pipe(filter((currentUser) => currentUser !== undefined) , map(Boolean));

    constructor(private http: HttpClient){
    }

    getCurrentUser(): Observable<currentUserInterface>{
        const url = environment.apiURL + "/user";
        return this.http.get<currentUserInterface>(url);
    }
    
    register(registerRequest: RegisterRequestInterface): Observable<currentUserInterface>{
        const url = environment.apiURL + '/users';
        return this.http.post<currentUserInterface>(url, registerRequest);
    }

    login(loginRequest: LoginRequestInterface): Observable<currentUserInterface>{
        const url = environment.apiURL + '/users/login';
        return this.http.post<currentUserInterface>(url, loginRequest);
    }

    setToken(currentUser: currentUserInterface): void {
        localStorage.setItem('token', currentUser.token);
    }

    setCurrentUser(currentUser: currentUserInterface | null): void{
        this.currentUser$.next(currentUser);
    }

    logout(): void {
        localStorage.removeItem('token');
        this.currentUser$.next(null);
    }
}