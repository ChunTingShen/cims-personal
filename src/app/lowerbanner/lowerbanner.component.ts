import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lowerbanner',
  templateUrl: './lowerbanner.component.html',
  styleUrls: ['./lowerbanner.component.css']
})
export class LowerbannerComponent {
  constructor(private router: Router){}


  toHome() {
    console.log("to Home page")
    this.router.navigate(['/'])
    
  }


  toContact() {
    
    console.log("to Contact page")
    this.router.navigate(['/contact'])
    
  }
}
