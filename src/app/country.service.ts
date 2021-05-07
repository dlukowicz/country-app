import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Country} from './country';

@Injectable({ providedIn: 'root' })
export class CountryService {

  private apiUrl = 'https://restcountries.eu/rest/v2';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getCountryByName(countryName: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${countryName}`;
    return this.http.get<Country[]>(url).pipe(
      tap(_ => console.log(`fetched country by ${countryName}`)),
      catchError(this.handleError<Country[]>(`getCountry name =${countryName}`))
    );
  }

    getCountryByCapitalCity(capitalCity: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capitalCity}`;
    return this.http.get<Country[]>(url).pipe(
      tap(_ => console.log(`fetched country by ${capitalCity}`)),
      catchError(this.handleError<Country[]>(`getCountryByCapitalCity =${capitalCity}`))
    );
  }

  getCountryByCurrency(currency: string): Observable<Country[]> {
    const url = `${this.apiUrl}/currency/${currency}`;
    return this.http.get<Country[]>(url).pipe(
      tap(_ => console.log(`fetched country by ${currency}`)),
      catchError(this.handleError<Country[]>(`getCountry by currency =${currency}`))
    );
  }
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
