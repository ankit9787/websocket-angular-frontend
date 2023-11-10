import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { currentUserInterface } from "../types/currentUser.interface";
import {HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService{
    currentUser$ = new BehaviorSubject<currentUserInterface |  null | undefined>(undefined);
    constructor(private http: HttpClient){
    }

    getCurrentUser(): Observable<currentUserInterface>{
        const url = environment.apiURL + "/user";
        return this.http.get<currentUserInterface>(url);
    }

    setCurrentUser(currentUser: currentUserInterface | null): void{
        this.currentUser$.next(currentUser);
    }
}