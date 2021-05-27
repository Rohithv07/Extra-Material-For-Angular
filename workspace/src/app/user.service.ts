import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, retry} from 'rxjs/operators';
import { JsonResult } from './json.interface';
import { UserInterface } from './user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private userUrl = 'https://reqres.in/api/users?page=2';


  getAllUsers(): Observable<JsonResult> {
   return this.http.get<JsonResult>(this.userUrl)
   .pipe(
     retry(5),
     catchError(this.handleError)
   );
  }

  // private handleError<T>(operation = 'operation', result?:T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     console.log(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   }
  // }

  createUser(user: UserInterface) {
    return this.http.post<UserInterface>(this.userUrl, user)
    .pipe(
      retry(5),
      catchError(this.handleError)
    );
  }

  updateUser(user: UserInterface) {
    return this.http.put(this.userUrl, user)
    .pipe(
      retry(5),
      catchError(this.handleError)
    );
  }

  removeUser(id:number) {
    const url = '${this.userUrl}/${id}';
    return this.http.delete(this.userUrl)
    .pipe(
      retry(5),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occured', error.error);
    }
    else {
      console.error(
        `Backend returned error code ${error.status}` +
        `body was : ${error.error}`
      );
    }
    return throwError(
      'Something happened; Please try again later.'
    );
  }


}
