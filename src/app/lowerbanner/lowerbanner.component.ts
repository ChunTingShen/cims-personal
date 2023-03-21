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
    // console.log("to Home page")
    this.router.navigate(['/'])
    
  }


  toAbout() {
    // console.log("to About page")
    this.router.navigate(['/'], {fragment: 'about'})
    
  }
  toContact() {
    
    // console.log("to Contact page")
    this.router.navigate(['/contact'])
    
  }
}
