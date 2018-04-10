import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(crediantials){

    return this.http.post('/api/authenticate', JSON.stringify(crediantials))
    .map(response =>{
     // console.log(response);
     let result = response.json();

     if(result && result.token){

      localStorage.setItem('token', result.token);
      return true;

     }else{

      return false;
     }
    });
  }

  signup(crediantials){
    
  }
}
