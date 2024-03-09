import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClinicsService {

  private baseUrl: string = 'http://127.0.0.1:8000/api/clinics/';

  constructor(private http: HttpClient) { }

  // method to retrive all clinics
  // what should observable do?????????????
  getClinics(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // method to retrive all clinics
  getAClinic(id:number): Observable<any> {
    const url: string = this.baseUrl + id;
    return this.http.get(url);
  }
  getSingleClinic(x:string): Observable<any> {

  return this.http.get(`http://127.0.0.1:8000/api/clinics/${x}`)
}

}
