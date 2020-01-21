import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  


  constructor(
    private toastr: ToastrService 
  ) { 
   
  }

  login(data){
     if(data.email=="so@gmail.com" && data.pwd == "12345"){
      //console.log('login sucessfull');
       let id = uuid();
       console.log('my id is....',id);
       localStorage.setItem("ID",id);
       return true;
       
     }
   else
    {
       console.log('failed');
       return false;
    }
  }
  alertForSuccess(message,title){
    this.toastr.success(message, title);
  }
  alertForWarning(message,title){
    this.toastr.warning(message, title);
  }
  alertFordanger(message,title){
    this.toastr.error(message, title);
  }
}  


