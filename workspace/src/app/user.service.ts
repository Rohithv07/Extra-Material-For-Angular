import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from './user-interface';
import { Observable, of } from 'rxjs';
import { catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private userUrl = 'https://reqres.in/api/users?page=2';

  getAllUsers(): Observable<any> {
   return this.http.get<any>(this.userUrl);
  }

  // private handleError<T>(operation = 'operation', result?:T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     console.log(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   }
  // }



}
