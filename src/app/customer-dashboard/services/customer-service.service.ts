import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { shareReplay, catchError, map, tap } from 'rxjs/operators';
import { Customer } from '../mock-server/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  cache$: Observable<Customer[]> | undefined;

  customerURL: string = 'https://fakestoreapi.com/users';

  constructor(public httpClient: HttpClient) {}

  get customers() {
    if (!this.cache$) {
      this.cache$ = this.getCustomers().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient
      .get<Customer[]>(this.customerURL)
      .pipe(catchError(this.handleError<Customer[]>('getCustomers', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
