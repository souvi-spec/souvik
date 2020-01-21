import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  email:AbstractControl;
  pwd:AbstractControl;

  constructor(
   // private spinner: NgxSpinnerService,
    //private router: Router,
    public formbuilder: FormBuilder,
     private userService: UserService
  ) {
      this.loginform =formbuilder.group({
        email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
        pwd:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
      });
      this.email = this.loginform.controls['email'];
      this.pwd = this.loginform.controls['pswd'];
   }

  ngOnInit() {
  }
  login(){
    console.log('workings');
        
    if(this.loginform.value.email && this.loginform.value.pwd ){
      let sendata ={
        email:this.loginform.value.email,
        pwd:this.loginform.value.pwd
      }
    console.log('the data is ...',sendata);
    let data = this.userService.login(sendata);
    }
    else{
    console.log('no data found');
    }
  }
  
}
