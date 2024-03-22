import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { InitialObject } from '../interfaces/InitialObject';

@Injectable({providedIn: 'root'})
export class SDKService {
    
    private http = inject(HttpClient);
    private baseUrl:string = "http://localhost:4200/api";

    //constructor() { }

    postSDK(data:any):Observable<InitialObject> {
        return this.http.post<InitialObject>(`${this.baseUrl}/initialize`, data)
        .pipe(
          map( response => response),
          tap(console.log)
        )
      }
    
}