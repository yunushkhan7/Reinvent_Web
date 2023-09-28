import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  sendMessage(data:any): Observable<any> {
    return this.http.post(environment.APIEndpoint+`contact`, data);
  }
}
