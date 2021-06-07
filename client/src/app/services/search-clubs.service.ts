import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../interfaces/clubs.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchClubsService {

  constructor(private $http: HttpClient) { }

  getClubs(): Observable<any> {
    return this.$http.get('http://localhost:3000/clubs');
  }

  getClubByName(code: string): Observable<any> {
    return this.$http.get('http://localhost:3000/clubs/' + code);
  }
}
