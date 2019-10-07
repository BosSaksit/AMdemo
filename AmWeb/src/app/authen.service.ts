import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let apiUrl = "http://localhost:8080/AmDemoApiPhp/";

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(public http:HttpClient) { }

  callApiUser(_obj){
    return new Promise((resolve,reject)=>{
      this.http.post(apiUrl + 'AmUser.php',_obj).subscribe(res =>{
        resolve(res);
      },(err)=>{
        reject(err);
      });
    })
  }
}
