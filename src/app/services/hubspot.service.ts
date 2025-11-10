
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HubspotService {
  private baseUrl = 'http://localhost:8080/api/hubspot';

  constructor(private http: HttpClient) {}

  ping(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ping`);
  }

  getPages(): Observable<any> {
    console.log('📡 Calling:', `${this.baseUrl}/pages`);
    return this.http.get(`${this.baseUrl}/pages`);
  }

  getTables(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tables`);
  }
}
