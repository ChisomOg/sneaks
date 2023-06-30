import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError, pipe } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  _urt: any = 'http://localhost:3000/enroll';

  constructor(private http: HttpClient) { }

  enroll(user: User) {
    return this.http.post<any>(this._urt, user)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error)
  }
  
}
