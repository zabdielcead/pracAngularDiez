import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Country } from '../interfaces/pais-interface';

/*
https://restcountries.eu/#api-endpoints-capital-city
*/
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';



  get getParams(){
    return  new HttpParams()
    .set('fields','name;capital:alpha2Code;flag;population');
  }

  constructor(private http:HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params: this.getParams});


    // return this.http.get(url)
    //         .pipe(
    //           catchError( err => of([]))
    //         );
  }

  buscarCapital(termino: string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.getParams});

  }


  getPaisPorAlpha(termino: string):Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country[]>(url,{params: this.getParams});

  }

  buscarRegion(region: string):Observable<Country[]>{
   
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.getParams});

  }
}
