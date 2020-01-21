import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() { 
   
  }

  login(data){
     if(data.email=="so@gmail.com" && data.pwd == "12345")
       console.log('login sucessfull');
   else
    {
       console.log('failed');
    }
  }

}
