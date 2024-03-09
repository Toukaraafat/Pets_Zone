import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'http://127.0.0.1:8000/api/proudcts';

  constructor(private http: HttpClient) { }


  getProducts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // getProduct(id:number): Observable<any> {
  //   const url: string = this.baseUrl + id;
  //   return this.http.get(url);
  // }
  getProduct(id:any): Observable<any> {

  return this.http.get(`http://127.0.0.1:8000/api/proudcts/show/${id}`)
}
}
