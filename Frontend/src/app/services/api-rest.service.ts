import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiRestService {

  API_URL: string = 'http://localhost:3000/api/';
  constructor(private httpClient: HttpClient) {}
  getAllDataApi(url): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + url);
  }
  getOneDataApi(url, id: string): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + url + id);
  }
  postApiData(url, data: any): Observable<any> {
    return this.httpClient.post<any>(this.API_URL + url, data);
  }
  editApiData(url,id: Number, data: any ): Observable<any> {
    return this.httpClient.put<any>(this.API_URL + url + id, data);
  }
  deleteApiData(url, id: Number): Observable<any> {
    return this.httpClient.delete<any>(this.API_URL + url + id);
  }
}
