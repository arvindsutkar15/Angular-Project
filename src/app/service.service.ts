import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl:string="https://rickandmortyapi.com/api/";
  baseUrl1:string="https://reqres.in/api/";

  httpHeader:HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { 

  }
getDataToServer(endPoint:string){
    const url = this.baseUrl + endPoint;
    return this.http.get(url, {headers:this.httpHeader});
  }

getDataToUserList(endPoint:any){
      const url = this.baseUrl1 + endPoint;
      return this.http.get(url, {headers:this.httpHeader});
  }

}
