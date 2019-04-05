import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  getCountryList() {
    const url = '/assets/meta-data//country-list.json';
    return this.http.get(url).pipe(
      map((res) => {
        console.log(res);
        return res;
      }),
      //catchError(this.handleError('getCountryList Method', []))
    );
  }
  constructor(private http: HttpClient) { }
}
