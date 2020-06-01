import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from  '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {catchError,retry} from 'rxjs/operators';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid='Iv1.130e08686a80bf6a';
  private clientsecret='34c50cc17a39b1ab418e50b6a30e3bd596487c36';

  constructor(private http:HttpClient) {
    console.log("services is ready");
    this.username='tsdharshan4';
   }
   getCollectData():Observable<any>{
     const apiurl="https://api.github.com/users/sanathyadav";
     return this.http.get<any>(apiurl);

     
   }
   getCollectRepos():Observable<any>{
    const url="https://api.github.com/users/"+this.username+"/repos?client_id="+
    this.clientid+ "&client_secret="+ this.clientsecret;
    return this.http.get<any>(url);

    
  }
  updateProfile(username:string){
    this.username=username;
  }
}

