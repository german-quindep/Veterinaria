import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {HttpClient}from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  API_URL:string="http://localhost:3000/api/";
  constructor(private httpClient:HttpClient) { }
  getAllDataApi(url:string):Observable<any>{
    return this.httpClient.get<any>(this.API_URL+url);
  }
  getOneDataApi(url:string,id:number):Observable<any>{
    return this.httpClient.get<any>(this.API_URL+url+id);
  }
}
