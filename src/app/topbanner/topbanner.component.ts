import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.css']
})
export class TopbannerComponent {

  constructor(private router: Router){}

  toHome() {
    // console.log("to Home page")
    this.router.navigate(['/'])
    
  }


  toAbout() {
    // console.log("to Home page")
    this.router.navigate(['/'], {fragment: 'about'})
    
  }

  toContact() {
    
    // console.log("to Contact page")
    this.router.navigate(['/contact'])
    
  }
}
