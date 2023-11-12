import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BoardInterface } from '../types/board.interface';

@Injectable()
export class BoardsService {
  constructor(private http: HttpClient) {}

  getBoards(): Observable<BoardInterface[]> {
    const url = environment.apiURL + '/boards';
    return this.http.get<BoardInterface[]>(url);
  }
}