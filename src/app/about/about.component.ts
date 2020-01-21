import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.getIdFromLocalStorage();
  }
  getIdFromLocalStorage(){
    this.id = localStorage.getItem("ID");
    console.log('the id is.....',this.id);
    

  }


logout(){
 localStorage.removeItem("ID");
  console.log('logout sucessfully');
  this.router.navigate(['login']);
  

}
}
