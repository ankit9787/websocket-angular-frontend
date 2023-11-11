import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { currentUserInterface } from "../types/currentUser.interface";
import {HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";
import { RegisterRequestInterface } from "../types/registerRequest.interface";

@Injectable()
export class AuthService{
    currentUser$ = new BehaviorSubject<currentUserInterface |  null | undefined>(undefined);
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

    setToken(currentUser: currentUserInterface): void {
        localStorage.setItem('token', currentUser.token);
    }

    setCurrentUser(currentUser: currentUserInterface | null): void{
        this.currentUser$.next(currentUser);
    }
}